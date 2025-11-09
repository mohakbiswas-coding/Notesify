import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);

// What is an Endpoint?
// An endpoint is a combination of URL + HTTP method that lets the client interact with a specific resource.

app.listen(PORT, () => {
    console.log("Server Started on PORT: ", PORT);
});