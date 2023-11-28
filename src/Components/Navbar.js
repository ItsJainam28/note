import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary  shadow p-3 mb-5 bg-body-tertiary ">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              fontFamily: "League Spartan",
              fontWeight: "bolder,",
              marginTop: "5px ",
            }}
          >
            Notes.
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>

            {!localStorage.getItem("jwt") ? (
              <form className="d-flex" role="userprofile">
                <Link className="btn btn-outline-success mx-2" to="/login">
                  Login
                </Link>
                <Link
                  className="btn btn-outline-success"
                  to="/signup"
                  type="submit"
                >
                  Signup
                </Link>
              </form>
            ) : (
              <button
                className="btn btn-outline-success mx-2"
                onClick={() => {
                  localStorage.removeItem("jwt");
                  navigate("/login");
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    );
}