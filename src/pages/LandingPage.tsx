import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#2D2D2D]">
      {/* Main Container */}
      <div className="flex flex-1">
        {/* Left Section: Hero Section */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 py-16 bg-white">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
            Your ideas, amplified
          </h1>
          <p className="text-center text-gray-600 mb-8 max-w-md">
            A cost-efficient Legal AI system integrating Mixture-of-Experts (MoE) & RAG for reliable legal assistance.
          </p>
          
          {/* Replaced Authentication Buttons with a CTA Button */}
          <Link to="/baseline" className="w-full max-w-sm">
            <button className="w-full py-3 rounded-md bg-[#A27D5C] text-white hover:bg-[#8C6245] transition font-medium text-center">
              Try Demo
            </button>
          </Link>

          <p className="text-sm text-gray-500 mt-4 text-center max-w-sm">
            Curious about how it works? <Link to="/about" className="underline hover:text-gray-700">Learn more</Link>.
          </p>
        </div>

        {/* Right Section: Placeholder Chat or Feature Area */}
        <div className="hidden lg:flex flex-col justify-center items-center w-1/2 px-8 py-16 bg-[#F5F3EE]">
          <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
            <p className="font-medium text-gray-700">
              Hi there! Ask me anything about Legal AI or the project.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Legal AI Research. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
