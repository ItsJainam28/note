import React, { useState } from "react";
import { NoteContext } from "./Notecontext";

const NoteState = (props) => {
    const note = {"title": "This is a title", "content": "This is the content"};
    const [notes, setNotes] = useState([note]);

    return (
        <NoteContext.Provider value ={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState; 