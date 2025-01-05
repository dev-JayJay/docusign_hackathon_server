const mongoose = require("mongoose");

const connectMongoDB = () => {

    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("mongodb is connected");
    })
    .catch((err) => {
      console.log(`error connecting to mongodb ${err}`);
    });
}

module.exports = { connectMongoDB };