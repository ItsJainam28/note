import React, { useState } from "react";
import { NoteContext } from "./Notecontext";

const NoteState = (props) => {
  const initialNotes = [];  
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState(initialNotes);

  const getNotes = async () => {
    const url = `${host}/api/Note/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNzAwNTExNDk4fQ.Ubbe-SBT8MmyMXdYhLkYY-Y-Aj5Dt8VRRExAH2AEfUo",
      }
    });

    const json = await response.json();
    setNotes(json);
  }
  //Add note
  const addNote = async (title, content) => {
    //Api call
    let note ={}
    const url = `${host}/api/Note/addnote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNzAwNTExNDk4fQ.Ubbe-SBT8MmyMXdYhLkYY-Y-Aj5Dt8VRRExAH2AEfUo",
      },
      body: JSON.stringify({ title, content }),
    });
    const json = await response.json();
    note = json;
    setNotes(notes.concat(note));
    console.log(notes);
  };
  //Delete note
  const deleteNote = async (noteId) => {
    const url = `${host}/api/Note/deletenote/${noteId}`;

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNzAwNTExNDk4fQ.Ubbe-SBT8MmyMXdYhLkYY-Y-Aj5Dt8VRRExAH2AEfUo",
        }
      });
    console.log("I am deleting", noteId);
    const newNotes = notes.filter((note) => {
      return note._id !== noteId;
    });
    setNotes(newNotes);
  };
  //Edit note
  const editNote = async (noteId, title, content) => {
    const url = `${host}/api/Note/updatenote/${noteId}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNzAwNTExNDk4fQ.Ubbe-SBT8MmyMXdYhLkYY-Y-Aj5Dt8VRRExAH2AEfUo",
        "body": JSON.stringify({ title, content })     
        },
      body: JSON.stringify({ title, content }),
    });
    const json = await response.json();
    console.log("RESPONSE", json);
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === noteId) {
        element.title = title;
        element.content = content;
        break;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
