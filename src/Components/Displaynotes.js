import React, { useContext } from "react";
import { NoteContext } from "../Context/Notecontext";
import NoteItem from "./NoteItem";
import NoteState from "../Context/Notestate";
export default function Displaynotes() {
    // I need to create a function that shows all the notes\
    const context = useContext(NoteState);
    const {notes, setNotes} = context;
    
return(
    <>
    <div className="container my-3">
        {notes.map((note)=>{
            return <NoteItem note={note}/>
        })}
    </div>
    </>
)

}