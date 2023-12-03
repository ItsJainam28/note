import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NoteContext } from "../Context/Notecontext";
import { AuthContext } from "../Context/AuthContext";


export default function Login(){
  const context = useContext(NoteContext);
  const authcontext = useContext(AuthContext);
  const {jwtToken, setJwt} = authcontext;
  const { getNotes } = context;
    const [credentials, setCredentials] = useState({email:"", password:""});
    const navigate = useNavigate();
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email:credentials.email, password:credentials.password})
        });
        const json = await response.json();

        if(json.success === true){
        localStorage.setItem('jwt', json.jwtToken);
        setJwt(localStorage.getItem('jwt'));
        console.log("Jwt token", jwtToken)
        navigate("/");}
        else{
            alert("Invalid Credentials");
        }
    }
    return(
        <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-6 ">
            <div className="ratio-3x3 ">
              <div className="position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-6 bg-body-tertiary rounded ">
                <div className="container text-center mb-4">
                <h1 className="" style={{ fontFamily: 'Raleway', fontSize: '2em', fontWeight: 'bold', color: 'yourColor' }}>Welcome</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                  <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      onChange={onChange}
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
  
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      onChange={onChange}
                      id="pass"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>)
};