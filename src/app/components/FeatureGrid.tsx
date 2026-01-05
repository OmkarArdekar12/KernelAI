import React from "react";
import features from "../data/features";
import { div } from "framer-motion/client";

const FeatureGrid = () => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <div key={index}>
          <div>
            <span>{feature.icon}</span>
          </div>
          <h3>{feature.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
