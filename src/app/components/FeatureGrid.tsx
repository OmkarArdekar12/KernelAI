"use client";

import features from "../data/features";
import { motion } from "framer-motion";

const FeatureGrid = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 0, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: 2.5,
      }}
      className="w-full flex items-center justify-center py-10 px-6 md:px-20"
    >
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full px-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center group relative rounded-2xl border border-emerald-500/20 bg-black/40 backdrop-blur-md p-6 hover:border-emerald-400/40 transition"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition group-hover:animate-bounce">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-100 group-hover:animate-pulse">
                  {feature.title}
                </h3>
              </div>
              <p className="text-emerald-300/70 text-sm leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default FeatureGrid;

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 2,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
