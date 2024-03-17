const {
  findUsersByAddress,
} = require("../../controllers/findUserTestingByAddress");

// Mock the Users model
const Users = require("../../models/users");

describe("findUsersByAddress", () => {
  let req, res;

  beforeEach(() => {
    req = {
      query: {
        address: "Test Address",
      },
    };
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return 404 if no users found", async () => {
    // Mocking the Users.find method to return an empty array
    Users.find = jest.fn().mockResolvedValue([]);

    await findUsersByAddress(req, res);

    expect(Users.find).toHaveBeenCalledWith({
      address: new RegExp(req.query.address, "i"),
    });
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "No users found" });
  });

  it("should return users if found", async () => {
    const mockUsers = [{ name: "User 1" }, { name: "User 2" }];
    // Mocking the Users.find method to return the mockUsers array
    Users.find = jest.fn().mockResolvedValue(mockUsers);

    await findUsersByAddress(req, res);

    expect(Users.find).toHaveBeenCalledWith({
      address: new RegExp(req.query.address, "i"),
    });
    expect(res.json).toHaveBeenCalledWith(mockUsers);
  });

  it("should handle server error", async () => {
    const errorMessage = "Database error";
    // Mocking the Users.find method to throw an error
    Users.find = jest.fn().mockRejectedValue(new Error(errorMessage));

    await findUsersByAddress(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Server error",
      error: errorMessage,
    });
  });
});
