const express = require("express");
const app = express();
require("dotenv").config();

const allRoutes = require("./routes/index");
const { connectMongoDB } = require('./config/mongo.config');

connectMongoDB();
app.use(express.json()); 

app.use("/api/v1", allRoutes);
app.use("/", (req, res) => {
  res.status(200).json({
    message: "checking root endpoint",
    error: null,
  });
  console.log("this root route was visited");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is running at http://localhost:${PORT}/`);
});
