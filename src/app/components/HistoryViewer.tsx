"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LuX } from "react-icons/lu";
import { HistoryItem } from "../types";
import KernelOutput from "./KernelOutput";
import { FaFileCode } from "react-icons/fa";
import { VscDebugAlt } from "react-icons/vsc";
import { GiRegeneration } from "react-icons/gi";
import { MdHistory } from "react-icons/md";

interface HistoryViewerProps {
  item: HistoryItem;
  onClose: () => void;
}

const HistoryViewer = ({ item, onClose }: HistoryViewerProps) => {
  const getIcon = (type: HistoryItem["type"]) => {
    switch (type) {
      case "explain":
        return FaFileCode;
      case "debug":
        return VscDebugAlt;
      case "generate":
        return GiRegeneration;
      default:
        return MdHistory;
    }
  };

  const Icon = getIcon(item.type);

  return (
    <AnimatePresence>
      <motion.div
        className="w-full fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="relative w-full max-w-[90%] md:max-w-[70%] mx-4 bg-black/80 border border-emerald-600/80 rounded-2xl shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
          >
            <LuX size={22} />
          </button>

          <div className="p-6 border-b border-emerald-600/50">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-emerald-300 capitalize">
              History: <Icon className="inline size-5" /> {item.type}
            </h3>
            <p className="text-xs text-gray-400 mt-1">{item.timestamp}</p>
          </div>

          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto kernel-scrollbar">
            <div>
              <h4 className="pl-3 text-md font-semibold text-emerald-300 capitalize">
                Input
              </h4>
              <pre className="bg-black/70 p-4 rounded-xl text-gray-200 text-sm whitespace-pre-wrap">
                {item.input}
              </pre>
            </div>

            <KernelOutput outputType="Output" output={item.output} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HistoryViewer;
