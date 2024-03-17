const bcrypt = require("bcrypt");
const { registerUser } = require("../../controllers/registerTesting");
const Users = require("../../models/users");

jest.mock("bcrypt");
jest.mock("../../models/users");

describe("registerUser", () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        email: "test@example.com",
        password: "testpassword",
        address: "123 Test Street",
        mobile: "1234567890",
        latitude: "123",
        longitude: "456",
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

  it("should register a new user", async () => {
    Users.findOne.mockResolvedValue(null);
    bcrypt.hash.mockResolvedValue("hashedpassword");
    const saveMock = jest.fn();
    Users.mockReturnValue({ save: saveMock });

    await registerUser(req, res);

    expect(Users.findOne).toHaveBeenCalledWith({ email: req.body.email });
    expect(bcrypt.hash).toHaveBeenCalledWith(req.body.password, 10);
    expect(saveMock).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "User registered successfully",
      user: expect.any(Object), // Ensure user is an object
    });
  });

  it("should return 400 if user already exists", async () => {
    Users.findOne.mockResolvedValue({ email: "test@example.com" });

    await registerUser(req, res);

    expect(Users.findOne).toHaveBeenCalledWith({ email: req.body.email });
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "User already exists",
    });
  });

  it("should return 500 if an error occurs", async () => {
    Users.findOne.mockRejectedValue(new Error("Database error"));

    await registerUser(req, res);

    expect(Users.findOne).toHaveBeenCalledWith({ email: req.body.email });
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Server error",
      error: "Database error",
    });
  });
});
