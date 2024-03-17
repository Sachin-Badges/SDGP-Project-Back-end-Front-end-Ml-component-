// Import the required modules
const { getAllUsersController } = require("../../controllers/getUsers");
const Users = require("../../models/users"); // Assuming this is the correct path to the Users module

// Mock the Users module
jest.mock("../../models/users");

describe("getAllUsersController", () => {
  // Test case: should return all users
  it("should return all users", async () => {
    // Define a sample user data
    const userData = [{ name: "User 1" }, { name: "User 2" }];

    // Mock the Users.find() method to return the sample user data
    Users.find.mockResolvedValue(userData);

    // Create mock request and response objects
    const req = {};
    const res = {
      json: jest.fn(), // Mock the json() function
      status: jest.fn(), // Mock the status() function
    };

    // Call the getAllUsersController function
    await getAllUsersController(req, res);

    // Expectation: res.json() should be called with the sample user data
    expect(res.json).toHaveBeenCalledWith(userData);
  });

  // Test case: should handle error
  it("should handle error", async () => {
    // Mock the Users.find() method to throw an error
    Users.find.mockRejectedValue(new Error("Database error"));

    // Create mock request and response objects
    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(), // Mock the status() function
    };

    // Call the getAllUsersController function
    await getAllUsersController(req, res);

    // Expectation: res.status() should be called with status code 500
    expect(res.status).toHaveBeenCalledWith(500);
    // Expectation: res.json() should be called with the error message
    expect(res.json).toHaveBeenCalledWith({ message: "Database error" });
  });
});
