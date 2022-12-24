import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from "./components/Login";

function App() {
  
  return (
    <>
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
