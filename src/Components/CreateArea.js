import React, { useState } from "react";

export default function CreateArea(){
    const [note, setNote] = useState({
        title:"",
        content:""
    });
    const[isExpanded, setExpanded] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]:value
            };
        });
    }
    function handleCancel() { setExpanded(false); }
    function handleExpanded() { setExpanded(true); }
    function handleCreate() { 
            
        setExpanded(false); }

    return(
        <div className="create-notes col-12 col-md-6">
            <form>
                {<input type="text" className="form-control " placeholder="Create a note.." onClick={handleExpanded} onChange={handleChange}/>}
                <div className="form-floating">
                    {isExpanded && <textarea
                        className="form-control"
                        style={{height: "100px"}}
                        value={note.content}
                        name="content"
                        placeholder="Take a note..."
                        onChange={handleChange}
                    ></textarea>}
                {isExpanded &&<button type="button" class="btn btn-success" onClick={handleCreate}>Create</button>}
                {isExpanded &&<button type="button" class="btn btn-danger" onClick={handleCancel}>Cancel</button>}
                </div>
            </form>
        </div>
    )}
