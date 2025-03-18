// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Taskbar from "./components/Taskbar";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Baseline from "./pages/Baseline";
import Comparison from "./pages/Comparison";
import SLMs from "./pages/SLMs";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Taskbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/baseline" element={<Baseline />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/slms" element={<SLMs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
