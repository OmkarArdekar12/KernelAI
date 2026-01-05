import React from "react";
import KernelAIBrand from "./KernelAIBrand";

const Header = () => {
  return (
    <div className="text-center mb-12 px-2">
      <div className="flex items-center justify-center mb-4">
        <KernelAIBrand />
      </div>
      <p className="text-emerald-300/80 text-lg max-w-2xl mx-auto">
        An intelligent coding companion to explain, debug, and generate code -
        powered by advanced AI reasoning.
      </p>
    </div>
  );
};

export default Header;
