const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/dataBase");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5001;
app.use(cors());

app.use(bodyParser.json()); 

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
