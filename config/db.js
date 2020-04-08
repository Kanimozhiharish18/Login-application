const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://crampete:crampete123@cluster1-davf0.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      dbName: "userregister",
    }
  );

  console.log(`MongoDB Connected: ${connection.connection.host}`);
};

module.exports = connectDB;
