import React, { useContext, useEffect, useRef, useState } from "react";
import { NoteContext } from "../Context/Notecontext";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";


export default function Displaynotes() {
  const navigation = useNavigate();
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if(localStorage.getItem("jwt")){
      getNotes();
    }else{
      navigation("/login");
    }
  }, []);


  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({id:"",etitle:"", econtent:""});

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
        etitle:currentNote.title,
        econtent:currentNote.content,
        id : currentNote._id
    });
  };
  function handleChange(event){
    const {name, value} = event.target;
    setNote(note =>{
        return {
            ...note,
            [name]:value
        };
    });
}
const handleUpdateButton = () => {
    editNote(note.id, note.etitle, note.econtent);
    getNotes();
    refClose.current.click();
}
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
    
      ></button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {" "}
              <form>
                <input
                  type="text"
                  className="form-control my-3"
                  value={note.etitle}
                  name="etitle"
                  id="etitle"
                    onChange={handleChange}
                  
                />
                <textarea
                  className="form-control"
                  style={{ height: "100px" }}
                  value={note.econtent}
                  name="econtent"
                  id="econtent"
                    onChange={handleChange}
                  
                ></textarea>
              </form>
            </div>
            <div className="modal-footer">
              <button

                ref={refClose} 
                type="button"
                className="btn btn-secondary d-none"
                data-bs-dismiss="modal"
              >
              </button>
              <button type="button" className="btn btn-primary" onClick={handleUpdateButton}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
    
        {localStorage.getItem('jwt') && notes.map((note) => {
          return <NoteItem  updateNote={() => updateNote(note)} note={note} />;
        })}
      </div>
    </>
  );
}
