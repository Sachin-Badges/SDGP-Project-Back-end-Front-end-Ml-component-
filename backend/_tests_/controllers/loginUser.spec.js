const bcrypt = require("bcrypt");
const { loginUser } = require("../../controllers/loginUser");
const Users = require("../../models/users");

jest.mock("../../models/users");
jest.mock("bcrypt");

describe("loginUser", () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      body: {
        email: "test@example.com",
        password: "testpassword",
      },
    };
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return 404 if user not found", async () => {
    Users.findOne.mockResolvedValue(null);
    await loginUser(req, res, next);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "User not found" });
  });

  // Add more test cases for other scenarios...
});
