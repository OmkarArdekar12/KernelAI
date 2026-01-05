import React from "react";

const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md">
          <span></span>
        </div>
        <h1 className="text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-500">
          KernelAI
        </h1>
      </div>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Your intelligent coding companion. Explain, debug, and generate code
        with AI-powered assistance.
      </p>
    </div>
  );
};

export default Header;
