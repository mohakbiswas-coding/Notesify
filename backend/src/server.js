import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
// middlewares are mainly used for rate limiting
app.use(express.json()); // This middleware will parse the JSON bodies: req.body 
app.use(rateLimiter);

// Our custom middleware
// app.use((req,res,next) => {
//     console.log(`Req method is ${req.method} & and Req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

// What is an Endpoint?
// An endpoint is a combination of URL + HTTP method that lets the client interact with a specific resource.

// Once the database is connected then only your application should start
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server Started on PORT: ", PORT);
    });
});