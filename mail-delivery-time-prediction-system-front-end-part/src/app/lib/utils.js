const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected()) {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to Mongo");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    // handleError(error);
    console.log(error);
    throw new Error("Error connecting to Mongo");
  }
};
