import express from "express";
import db from "./db.mjs";
import authApi from "./routes/auth.mjs";
import notesApi from "./routes/Note.mjs";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "*", // Allow all origins
  credentials: true,
  optionsSuccessStatus: 200,
};
// Use the custom CORS configuration
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.json());

const baseUrl = "https://note-application-d1nr.onrender.com/";
app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occurred.");
  });

  app.use("/api/auth", authApi);
  app.use("/api/Note", notesApi);
app.listen(PORT, ()=>{
  console.log(`Server is running on port: ${PORT}`)
})

app.get("/", (req, res) => {
    res.send("Wassup");
  });
  
