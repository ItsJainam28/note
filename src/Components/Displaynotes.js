import React, { useContext } from "react";
import { NoteContext } from "../Context/Notecontext";
import NoteItem from "./NoteItem";

export default function Displaynotes() {
    // I need to create a function that shows all the notes\
    const context = useContext(NoteContext);
    const {notes} = context;
    
return(
    <>
    <div className="container my-3">
        {notes.map((note , index)=>{
            console.log(note);
            return <NoteItem key={index} note={note}/>
        })}
    </div>
    </>
)
}