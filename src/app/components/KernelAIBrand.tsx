"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const KernelAIBrand = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -9 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <Image
          src="/kernelAI-logo.png"
          alt="KernelAI Logo"
          width={100}
          height={100}
          priority
        />
      </motion.div>

      <motion.span
        className={`text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center`}
        initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <span className="text-white">Kernel</span>
        <span className="bg-linear-to-r from-lime-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
          AI
        </span>
      </motion.span>
    </div>
  );
};

export default KernelAIBrand;

// import Image from "next/image";
// const KernelAIBrand = () => {
//   return (
//     <div className="flex flex-wrap justify-center items-center gap-2 px-4">
//       <Image
//         src="/kernelAI-logo.png"
//         alt="KernelAI Logo"
//         width={100}
//         height={100}
//         priority
//       />
//       <span
//         className={`text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center`}
//       >
//         <span className="text-white">Kernel</span>
//         <span className="bg-linear-to-r from-lime-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
//           AI
//         </span>
//       </span>
//     </div>
//   );
// };
// export default KernelAIBrand;
