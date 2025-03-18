import React from "react";
import { Link } from "react-router-dom";

const Taskbar: React.FC = () => {
  return (
    <nav className="bg-[#FAF9F6] text-[#2D2D2D] p-4 flex justify-between shadow-md">
      <div className="font-bold text-lg">Legal AI Project</div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-[#A27D5C] transition">Home</Link>
        <Link to="/about" className="hover:text-[#A27D5C] transition">About</Link>
        <Link to="/baseline" className="hover:text-[#A27D5C] transition">Baseline</Link>
        <Link to="/comparison" className="hover:text-[#A27D5C] transition">Comparison</Link>
        <Link to="/slms" className="hover:text-[#A27D5C] transition">SLMs</Link>
      </div>
    </nav>
  );
};

export default Taskbar;
