import React , {useState}from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
export default function Signup(){
    const [credentials, setCredentials] = useState({username:"", email:"", password:"", cpassword:""});
    const context = useContext(AuthContext);
    const { setJwt} = context;

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }
    const navigate = useNavigate(); // Correct usage of useNavigate
    let passwordMatch = false;
    let userAlreadyExists = false;    
    if(credentials.password===credentials.cpassword){
        passwordMatch = true;
    }
    const onSubmit = async (e) => {
        if(credentials.password!==credentials.cpassword){
            return;
        }
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({username:credentials.username, email:credentials.email, password:credentials.password})
        });
        const json = await response.json();
        // console.log(json.status);
        if(json.status===400){
            userAlreadyExists = true;
        }
        // console.log(json);
        if(json.sucess){
        localStorage.setItem('jwt', json.jwtToken);
        setJwt(json.jwtToken);
        navigate("/");}
       
        else{
            alert("Please enter valid credentials");
        }
    }
    return(
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="ratio-3x">
              <div className="position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-6 bg-body-tertiary rounded">
                <div className="container text-center mb-4">
                  <h1 className="welcome-heading" style={{ fontFamily: 'Raleway', fontSize: '2em', fontWeight: 'bold', color: 'yourColor' }}>Welcome</h1>
                </div>
                <div>
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input type="text" onChange={onChange} name="username" className="form-control" id="username" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input type="email" onChange={onChange} name="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                      <div id="emailHelp" className="form-text">{userAlreadyExists && <p>User already Exists</p>}</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" name="password" onChange={onChange} className="form-control" id="pass" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                      <input type="password" name="cpassword" onChange={onChange} className="form-control" id="pass" required />
                      {!passwordMatch && <div id="emailHelp" className="form-text">Password do not Match.</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
}