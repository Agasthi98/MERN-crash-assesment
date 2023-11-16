import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import vehicleRoutes from "./routes/routes.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.use("/api/vehicles", vehicleRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

//create port
const PORT = process.env.PORT || 6500;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold
  )
);
