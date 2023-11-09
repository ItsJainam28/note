import express from "express";
import db from "./db.mjs";
import authApi from "./routes/auth.mjs";
import notesApi from "./routes/notes.mjs";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occurred.");
  });

app.use("/api/auth", authApi)
app.use("/api/notes", notesApi)

app.listen(PORT, ()=>{
  console.log(`Server is running on port: ${PORT}`)
})

app.get("/", (req, res) => {
    res.send("Wassup");
  });
  
