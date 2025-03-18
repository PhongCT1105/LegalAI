// src/components/Taskbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Taskbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold">Legal AI Project</div>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/baseline" className="hover:underline">Baseline</Link>
        <Link to="/comparison" className="hover:underline">Comparison</Link>
        <Link to="/slms" className="hover:underline">SLMs</Link>
      </div>
    </nav>
  );
};

export default Taskbar;
