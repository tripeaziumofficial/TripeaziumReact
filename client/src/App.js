import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>
      {/* <Home/> */}
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>

      <Footer/>
    </>
  );
}

export default App;
