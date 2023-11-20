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
        <div className="create-notes col-12 col-md-6">
            <form>
                {<input type="text" className="form-control my-3" 
                placeholder="Create a note.." 
                onClick={handleExpanded} 
                onChange={handleChange} 
                name="title"
                id="title"

                />}
                <div className="form-floating my-2">
                    {isExpanded && <textarea
                        className="form-control"
                        style={{height: "100px"}}
                        value={note.content}
                        name="content"
                        id="content"
                        placeholder="Take a note..."
                        onChange={handleChange}
                    ></textarea>}
                {isExpanded &&<button type="button" className="btn btn-success my-2 " onClick={handleCreate}>Create</button>}
                {isExpanded &&<button type="button" className="btn btn-danger my-2 mx-2" onClick={handleCancel}>Cancel</button>}
                </div>
            </form>
        </div>
    )}
