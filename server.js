const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const database = process.env.DATABASE;
const app = express();
// const main = async () => {
//   try {
//     await mongoose.connect(database);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };
// main().catch();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

PORT = process.env.PORT || 5000;

app.listen(PORT);
