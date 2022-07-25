import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages";
import About from "./pages/About";
import Cinic from "./pages/Cinic";
import "./App.scss";
import Qualarc from "./pages/Qualarc";
import Cha from "./pages/Cha";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/cinic" element={<Cinic />} />
        <Route path="/qualarc" element={<Qualarc />} />
        <Route path="/cha" element={<Cha />} />
      </Routes>
    </Router>
  );
}

export default App;
