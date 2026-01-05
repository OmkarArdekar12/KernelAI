"use client";

import features from "../data/features";
import { motion } from "framer-motion";

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

const FeatureGrid = () => {
  return (
    <section className="mt-20 max-w-6xl mx-auto px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center group relative rounded-2xl border border-emerald-500/20 bg-black/40 backdrop-blur-md p-6 hover:border-emerald-400/40 transition"
            >
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-emerald-300/70 text-sm leading-relaxed text-center">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FeatureGrid;
