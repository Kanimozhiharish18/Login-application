const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(
    MONGO_URL,
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
