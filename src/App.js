import "./App.css";
import About from "./Components/About";
import Maincontent from "./Components/Maincontent";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./Context/Notestate";
import Login from "./Components/Login";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isNavbarVisible = !location.pathname.startsWith("/login");

  return (
    <>
      <NoteState>
       
          {isNavbarVisible&& <Navbar />}
          <div>
            <Routes>
              <Route path="/" element={<Maincontent />} />
              <Route path="/about" element={<About/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </div>

      </NoteState>
    </>
  );
}

export default App;