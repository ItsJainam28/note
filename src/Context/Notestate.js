import React, { useState } from "react";
import { NoteContext } from "./Notecontext";


const NoteState = (props) => {
    
    const [notes, setNotes] = useState([{
        _id: "655bc1a75b30a55afde311bc",
        title: "First Note",
        content: "This is edited by the user",
        userId: "655bc1a75b30a55afde311bb",
      },{
        _id: "655bc1a75b30a55afde311bc",
        title: "First Note",
        content: "This is edited by the user",
        userId: "655bc1a75b30a55afde311bb",
      },{
        _id: "655bc1a75b30a55afde311bc",
        title: "First Note",
        content: "This is edited by the user",
        userId: "655bc1a75b30a55afde311bb",
      }]);

    //Add note
    const addNote = (title, content)=>{
        //Api call
        const note = {
            _id: "655bc1a75b30a55afde311bc",
            title: title,
            content: content,
            userId: "655bc1a75b30a55afde311bb",
          };
        setNotes(notes.concat(note));
        console.log(notes);
    }
    //Delete note
    const deleteNote = ()=>{
        

    }
    //Edit note
    const editNote = ()=>{

    }

    return (
        <NoteContext.Provider value ={{notes,addNote}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState; 