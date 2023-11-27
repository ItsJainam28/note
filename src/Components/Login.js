import React from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";

export default function Login(){
    const [credentials, setCredentials] = useState({email:"", password:""});

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
        if(json.sucess){
        localStorage.setItem('jwt', json.jwtToken);}
        else{
            alert("Invalid Credentials");
        }
    
    }
    return(
        <div>
            <h1>Login to continue to Notes.</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"  name="email" className="form-control" id="email" onChange={onChange} aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1"  className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" onChange={onChange} id="pass"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>)
};