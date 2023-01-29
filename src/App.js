import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
