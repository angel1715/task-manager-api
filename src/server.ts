import express from "express";
import { dbConnection } from "./config/db";
import authRoutes from "./routes/authRoutes";
import taskRoutes from "./routes/taskRoutes";
import cors from "cors";
const app = express();

dbConnection();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://task-manager-frontend-swfq.vercel.app/"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.use("/", authRoutes);
app.use("/", taskRoutes);


app.get("/", (req, res) => {
  res.send("Task Manager API running");
});

export default app;
