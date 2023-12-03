import express from "express";
import db from "../db.mjs";
import fetchuser from "../middleware/fetchuser.mjs";
import { body, validationResult } from "express-validator";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  console.log(req.user);

  const notes = await db
    .collection("Notes")
    .find({ userId: new ObjectId(req.user.id) })
    .toArray();
  res.json(notes);
});

router.post(
  "/addnote",
  fetchuser,
  [body("title").isLength({min : 1}), body("content").isLength({ min: 1 })],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).send({ errors: errors.array() });
        return;
      }
      const { title, content } = req.body;
     
      const newNote = {
        title,
        content,
        userId: new ObjectId(req.user.id),
      };

      const response = await db.collection("Notes").insertOne(newNote);
      res.send(newNote);
    } catch (error) {
      res.status(500).send("Internal Server Error");
      console.log(error);
    
    }
  }
);

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, content } = req.body;
  try{
    const newNote = {
    };
    if(title){newNote.title = title;}
    if(content){newNote.content = content;}
    const note = await db.collection("Notes").findOne({_id : new ObjectId(req.params.id)});
    if(!note){return res.status(404).send("Not Found");}
    if(newNote.title === undefined && newNote.content === undefined){
      return res.status(400).send("Nothing to update");
    }
    if(note.userId.toString() ===! req.user.id){
      return res.status(401).send("Not Allowed to update the note");
    }
  const response = await db
    .collection("Notes")
    .findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: newNote },
      { upsert: true }
    );
  res.json({ message: "Note Updated" });}
  catch(error){
    res.status(500).send("Internal Server Error");
    console.log(error);
  }
});

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try{
    const note = await db.collection("Notes").findOne({_id : new ObjectId(req.params.id)});
    if(!note){return res.status(404).send("Not Found");}
    let noteUserId = new ObjectId(note.userId);
   
    let userId = new ObjectId(req.user.id);


    if(noteUserId.toString() ===! userId.toString()){
     
      return res.status(401).send("Not Allowed to delete the note");
    }
  const response = await db
    .collection("Notes")
    .findOneAndDelete({ _id: new ObjectId(req.params.id) });
  res.json({ message: "Note Deleted" });}
  catch(error){
    res.status(500).send("Internal Server Error");
    console.log(error);
  }
});
export default router;
