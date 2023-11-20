import React from "react";


export default function NoteItem(props){
    const {note} = props;
    return(
        <>  <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">
                    {note.title}
                    </h5>
                    <p className="card-text">
                    {note.content}
                    </p>
                    <i className="fa-solid fa-pen-to-square mx-1"></i>
                    <i className="fa-solid fa-trash mx-1"></i>
                </div>
            </div>
        </>
    )
}