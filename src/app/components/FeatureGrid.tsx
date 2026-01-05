"use client";

import features from "../data/features";
import { motion } from "framer-motion";

const FeatureGrid = () => {
  return (
    <section className="mt-20 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-emerald-500/20 bg-black/40 backdrop-blur-md p-6 hover:border-emerald-400/40 transition"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition">
                <Icon size={24} />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-emerald-300/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureGrid;
