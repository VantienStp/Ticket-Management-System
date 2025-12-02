import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// API routes
app.use("/api/tickets", ticketRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("TMS Backend (ESM) running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
