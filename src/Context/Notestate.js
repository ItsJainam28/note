// Import React and useState hook from React
import React, { useState } from "react";
// Import the NoteContext from "./Notecontext"
import { NoteContext } from "./Notecontext";

// Define the NoteState component
const NoteState = (props) => {
  // Initialize the state for notes with an empty array
  const initialNotes = [];  
  // Define the API host URL
  const host = "http://localhost:5000";
  // Use the useState hook to manage the 'notes' state
  const [notes, setNotes] = useState(initialNotes);

  // Function to fetch all notes from the API
  const getNotes = async () => {
    const url = `${host}/api/Note/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add the authentication token to the headers
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNzAwNTExNDk4fQ.Ubbe-SBT8MmyMXdYhLkYY-Y-Aj5Dt8VRRExAH2AEfUo",
      }
    });

    const json = await response.json();
    // Update the 'notes' state with the fetched data
    setNotes(json);
  }

  // Function to add a new note
  const addNote = async (title, content) => {
    // API call to add a new note
    let note ={}
    const url = `${host}/api/Note/addnote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add the authentication token to the headers
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNzAwNTExNDk4fQ.Ubbe-SBT8MmyMXdYhLkYY-Y-Aj5Dt8VRRExAH2AEfUo",
      },
      body: JSON.stringify({ title, content }),
    });
    const json = await response.json();
    // Update the 'notes' state by concatenating the new note
    setNotes(notes.concat(json));
    console.log(notes);
  };

  // Function to delete a note
  const deleteNote = async (noteId) => {
    const url = `${host}/api/Note/deletenote/${noteId}`;

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // Add the authentication token to the headers
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNzAwNTExNDk4fQ.Ubbe-SBT8MmyMXdYhLkYY-Y-Aj5Dt8VRRExAH2AEfUo",
        }
      });
    console.log("I am deleting", noteId);
    // Filter out the deleted note from the 'notes' state
    const newNotes = notes.filter((note) => {
      return note._id !== noteId;
    });
    setNotes(newNotes);
  };

  // Function to edit/update a note
  const editNote = async (noteId, title, content) => {
    const url = `${host}/api/Note/updatenote/${noteId}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Add the authentication token to the headers
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNzAwNTExNDk4fQ.Ubbe-SBT8MmyMXdYhLkYY-Y-Aj5Dt8VRRExAH2AEfUo",
        "body": JSON.stringify({ title, content })     
        },
      body: JSON.stringify({ title, content }),
    });
    const json = await response.json();
    console.log("RESPONSE", json);
    // Update the 'notes' state with the modified note
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note._id === noteId) {
          return { ...note, title, content };
        }
        return note;
      });
    });
  };

  // Provide the 'notes', 'addNote', 'deleteNote', 'editNote', and 'getNotes' values to the NoteContext
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {/* Render the child components */}
      {props.children}
    </NoteContext.Provider>
  );
};

// Export the NoteState component
export default NoteState;
