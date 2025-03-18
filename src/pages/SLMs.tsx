import React from "react";

const SLMs: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Small Language Models (SLMs)</h1>
      <p className="mt-4 text-gray-600">
        The MoE system consists of multiple Small Language Models (SLMs), each fine-tuned for specific legal domains. This ensures cost-efficiency and accuracy.
      </p>
    </div>
  );
};

export default SLMs;
