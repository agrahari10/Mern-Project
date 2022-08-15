import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <NoteState>
            <Routes>
              <Route excat path="/" element={<Home showAlert={showAlert} />} />
              <Route excat path="/about" element={<About />} />
              <Route
                excat
                path="/Signup"
                element={<Signup showAlert={showAlert} />}
              />
              <Route
                excat
                path="/Login"
                element={<Login showAlert={showAlert} />}
              />
            </Routes>
          </NoteState>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
