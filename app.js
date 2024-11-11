import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./routes/messageRoutes.js"; // Only the message router is kept

const app = express();
config({ path: "./config.env" });

// CORS configuration: Allow all origins
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"], // Allowed HTTP methods
    credentials: true,  // You can keep this if needed, or remove if not required
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Route for messages
app.use("/api/v1/message", messageRouter);

// Connect to the database
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
