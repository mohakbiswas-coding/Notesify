import express from "express"
import notesRoutes from "./routes/notesRoutes.js"

const app = express()

app.use("/api/notes", notesRoutes);

// What is an Endpoint?
// An endpoint is a combination of URL + HTTP method that lets the client interact with a specific resource.

app.listen(5001, () => {
    console.log("Server Started on PORT: 5001");
});