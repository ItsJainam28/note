import React from "react";
import { useContext } from "react";
import { NoteContext } from "../Context/Notecontext";

export default function NoteItem(props) {
  const { note, updateNote } = props;
  const context = useContext(NoteContext);
  const { deleteNote} = context;

  return (
    <>
     
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.content}</p>
          <i
            className="fa-solid fa-pen-to-square mx-1"  onClick={() => {updateNote(note)}}
          ></i>
          <i
            className="fa-solid fa-trash mx-1"
            onClick={() => deleteNote(note._id)}
          ></i>
        </div>
      </div>
    </>
  );
}
