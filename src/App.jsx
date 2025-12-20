import React, { useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GoToTop from "./pages/GoToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <GoToTop />
    </BrowserRouter>
  );
}

export default App;
