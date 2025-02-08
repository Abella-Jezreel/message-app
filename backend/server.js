import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/dataBase.js';
import authRoute from './routes/authRoute.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Connect to MongoDB
connectDB();

app.use('/api/messenger', authRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});