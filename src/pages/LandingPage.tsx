import React from "react";
import { Link } from "react-router-dom";

// Adjust these paths to match where your PNGs are stored
import costIcon from "../assets/cost.png";
import accuracyIcon from "../assets/accuracy.png";
import explanationIcon from "../assets/explanation.png";
import scaleIcon from "../assets/scale.png";


const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] text-[#2D2D2D]">


      {/* Hero Section (Split into Two Parts) */}
      <section id="hero" className="h-screen flex">
        {/* Left Side: Try Demo Section */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 py-16 bg-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Optimized Legal AI 
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md text-center">
            A cost-efficient Legal AI system integrating Mixture-of-Experts (MoE) &amp; RAG for reliable legal assistance.
          </p>
          <Link to="/baseline">
            <button className="py-3 px-6 rounded-md bg-[#A27D5C] text-white hover:bg-[#8C6245] transition font-medium">
              Try Demo
            </button>
          </Link>
        </div>

        {/* Right Side: Placeholder (Can be replaced with Carousel) */}
        <div className="hidden lg:flex flex-col justify-center items-center w-1/2 px-8 py-16 bg-[#F5F3EE]">
          <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
            <p className="font-medium text-gray-700 text-center">
              Hi there! How can I assist you with legal AI today?
            </p>
          </div>
        </div>
      </section>

      <section
  id="why-use"
  className="h-screen flex flex-col justify-center items-center px-8"
  style={{ backgroundColor: "#FFFDF9" }} // matches the "Meet Claude" background
>
  <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Use This?</h2>
  <p className="text-gray-600 max-w-3xl mb-8 text-center">
    Legal assistance is expensive and inaccessible for many. Existing AI legal chatbots struggle with high costs, hallucinations,
    and complexity. Our <strong>Legal AI Project</strong> offers a <strong>cost-effective, accurate, and easy-to-use</strong> alternative.
  </p>

  {/* Features List */}
  <ul className="text-gray-600 space-y-6 max-w-xl mx-auto w-full">
    {/* Lower Costs */}
    <li className="flex items-center gap-x-4 text-left">
      <img src={costIcon} alt="Cost Icon" className="w-10 h-10 flex-shrink-0" />
      <span className="leading-tight">
        <strong>Lower Costs</strong> – Uses small, efficient expert models instead of a full-scale LLM.
      </span>
    </li>

    {/* Better Accuracy */}
    <li className="flex items-center gap-x-4 text-left">
      <img src={accuracyIcon} alt="Accuracy Icon" className="w-10 h-10 flex-shrink-0" />
      <span className="leading-tight">
        <strong>Better Accuracy</strong> – Integrates real legal documents to minimize misinformation.
      </span>
    </li>

    {/* User-Friendly Explanation */}
    <li className="flex items-center gap-x-4 text-left">
      <img src={explanationIcon} alt="Explanation Icon" className="w-10 h-10 flex-shrink-0" />
      <span className="leading-tight">
        <strong>User-Friendly</strong> – Chain-of-Thought reasoning makes legal explanations clear.
      </span>
    </li>

    {/* Scalable */}
    <li className="flex items-center gap-x-4 text-left">
      <img src={scaleIcon} alt="Scale Icon" className="w-10 h-10 flex-shrink-0" />
      <span className="leading-tight">
        <strong>Scalable</strong> – Adaptable to different legal domains.
      </span>
    </li>
  </ul>
</section>





      {/* How We Built It Section */}
      <section id="how-built" className="h-screen flex flex-col justify-center items-center text-center px-8 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Built It</h2>
        <p className="text-gray-600 max-w-3xl mb-8">
          This AI system leverages a <strong>Mixture-of-Experts (MoE) architecture</strong> combined with <strong>Retrieval-Augmented Generation (RAG)</strong>
          to deliver <strong>accurate and cost-efficient</strong> legal assistance.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F5F3EE] p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">🔹 Query Classification &amp; Routing</h4>
            <p className="text-gray-600">
              Classifies legal queries into <strong>Employment Law, Contract Law, Family Law</strong>, and more for expert routing.
            </p>
          </div>
          <div className="bg-[#F5F3EE] p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">🔹 Mixture-of-Experts (MoE)</h4>
            <p className="text-gray-600">
              Activates only <strong>the necessary small models (SLMs)</strong> to optimize efficiency and reduce computing costs.
            </p>
          </div>
          <div className="bg-[#F5F3EE] p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">🔹 Retrieval-Augmented Generation (RAG)</h4>
            <p className="text-gray-600">
              Fetches <strong>real legal case data</strong> to improve the factual accuracy of responses and reduce hallucinations.
            </p>
          </div>
          <div className="bg-[#F5F3EE] p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">🔹 User-Friendly Explanation</h4>
            <p className="text-gray-600">
              Uses <strong>Chain-of-Thought reasoning</strong> to simplify legal jargon and provide clear, structured answers.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Cost-efficient Legal AI system integrating Mixture-of-Experts (MoE) & RAG for reliable legal assistance Research by Phong Cao. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
