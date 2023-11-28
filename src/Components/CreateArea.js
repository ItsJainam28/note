import React, { useState } from "react";
import { useContext } from "react";
import {NoteContext} from "../Context/Notecontext";

export default function CreateArea(){
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"", content:""});
    const[isExpanded, setExpanded] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        setNote(note =>{
            return {
                ...note,
                [name]:value
            };
        });
    }
    function handleCancel() { setExpanded(false); }
    function handleExpanded() { setExpanded(true); }
    function handleCreate() { 
        addNote(note.title, note.content);
        setExpanded(false); }

    return(
        <div className=" create-notes  col-md-6">
            <form className="container-fluid grid gap-0">
                {<input type="text" className={"rounded-top  container-fluid row shadow p-2 border border-bottom-0  p-2 g-col-6"} 
                placeholder="Create a note.." 
                onClick={handleExpanded} 
                onChange={handleChange} 
                name="title"
                id="title"
                />}
             {isExpanded && <textarea
                        className=" rounded-bottom container-fluid row shadow p-2  p-2 g-col-6  border border-top-0 create-textarea"
                        style={{height: "100px"}}
                        value={note.content}
                        name="content"
                        id="content"
                        placeholder="Take a note..."
                        onChange={handleChange}
                    ></textarea>}
                {isExpanded &&<button type="button" className="btn btn-success my-2 " onClick={handleCreate}>Create</button>}
                {isExpanded &&<button type="button" className="btn btn-danger my-2 mx-2" onClick={handleCancel}>Cancel</button>}
            </form>
        </div>
    )}
