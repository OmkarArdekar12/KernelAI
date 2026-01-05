import React from "react";
import KernelAIBrand from "./KernelAIBrand";

const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <KernelAIBrand size="text-5xl" logoSize={100} />
      </div>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Your intelligent coding companion. Explain, debug, and generate code
        with AI-powered assistance.
      </p>
    </div>
  );
};

export default Header;
