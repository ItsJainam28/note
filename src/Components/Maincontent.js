import React, {useState} from "react";
import CreateArea from "./CreateArea";
export default function Maincontent() {
   
    return(
    <div className="container-fluid">
        <div className="row justify-content-center">
            <CreateArea/>
            <div className="display-notes">
            
            </div>
        </div>
        
    </div>
    )
}

