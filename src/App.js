import "./App.css";
import About from "./Components/About";
import Maincontent from "./Components/Maincontent";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NoteContext } from "./Context/Notecontext";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Maincontent />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
