import React, { useState } from "react";
import { NoteContext } from "./Notecontext";

const NoteState = (props) => {
    
    <NoteContext.Provider value 
    ={state}>
        {props.children}
    </NoteContext.Provider>
};

export default NoteState; 