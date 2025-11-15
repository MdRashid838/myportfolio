import React, { useState } from "react";
import { BrowserRouter,Router , Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
