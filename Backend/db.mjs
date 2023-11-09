import { MongoClient } from "mongodb";
const connectionString = "mongodb+srv://admin:admin@cluster0.ssd371h.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Connected to the database");
} catch (e) {
  console.log("Unable to connect to the database due to the following error:");
  console.log(e);
}

let db = conn.db("NotesDB");

export default db;