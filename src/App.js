import "./App.css";
import About from "./Components/About";
import Maincontent from "./Components/Maincontent";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./Context/Notestate";
import Login from "./Components/Login";
import { useLocation } from "react-router-dom";
import Signup from "./Components/Signup";

function App() {




  return (
    <>
      <NoteState>
       
           <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Maincontent />} />
              <Route path="/about" element={<About/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />

            </Routes>
          </div>

      </NoteState>
    </>
  );
}

export default App;