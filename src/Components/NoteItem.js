import React from "react";
import NoteState from "./NoteState";

export default function NoteItem(props){
    const {note} = props;
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                    {note.title}
                    </h5>
                    <p className="card-text">
                    {note.content}
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                    </p>
                </div>
            </div>
        </>
    )
}