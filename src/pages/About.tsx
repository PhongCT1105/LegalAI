import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6] text-[#2D2D2D] p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl text-center">
        {/* Profile Image */}
        <img 
          src="/profile.jpg"  // Change this to the correct path if needed
          alt="Profile Picture" 
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md object-cover"
        />

        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">Phong Cao</h1>
        <p className="text-gray-600 mb-6">
          AI researcher and developer passionate about AI, and machine learning application.
        </p>

        {/* Personal Links */}
        <div className="flex flex-col space-y-4">
          <a 
            href="https://phongcao.dev/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg font-medium text-[#A27D5C] hover:underline"
          >
            🌍 Portfolio: phongcao.dev
          </a>

          <a 
            href="https://www.linkedin.com/in/phong-cao/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg font-medium text-[#A27D5C] hover:underline"
          >
            🔗 LinkedIn: linkedin.com/in/phong-cao/
          </a>

          <a 
            href="https://github.com/PhongCT1105" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg font-medium text-[#A27D5C] hover:underline"
          >
            💻 GitHub: github.com/PhongCT1105
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
