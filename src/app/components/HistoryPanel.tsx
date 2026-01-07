import React from "react";
import { FaFileCode } from "react-icons/fa";
import { VscDebugAlt } from "react-icons/vsc";
import { GiRegeneration } from "react-icons/gi";
import { MdHistory } from "react-icons/md";
import { HistoryItem } from "../types";
import { FaHistory } from "react-icons/fa";

interface HistoryItemProps {
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
}

const HistoryPanel = ({ history, onSelect }: HistoryItemProps) => {
  const formatContent = (content: string, maxLength: number = 100): string => {
    if (content.length <= maxLength) {
      return content;
    }
    return content.substring(0, maxLength) + "...";
  };

  const getTypeConfig = (type: HistoryItem["type"]) => {
    switch (type) {
      case "explain":
        return {
          icon: FaFileCode,
          color: "from-emerald-600/95 via-green-600/95 to-teal-600/95",
        };
      case "debug":
        return {
          icon: VscDebugAlt,
          color: "from-lime-600/95 via-emerald-600/95 to-green-600/95",
        };
      case "generate":
        return {
          icon: GiRegeneration,
          color: "from-green-600/95 via-teal-600/95 to-emerald-600/95",
        };
      default:
        return {
          icon: MdHistory,
          color: "from-green-600/95 via-emerald-600/95 to-lime-600/95",
        };
    }
  };

  return (
    <div className="w-full bg-black-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-600/95">
      <div className="w-full flex flex-col items-start bg-black-800/50 p-6 border-b border-emerald-600/95">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-200 text-center">
            Recent Activity
          </h2>
        </div>
        <p className="text-gray-400 text-sm mt-1">
          Your recent interactions with KernelAI
        </p>
      </div>
      <div className="p-4 max-h-120 overflow-y-auto kernel-scrollbar">
        {history.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-full bg-black-800/50 rounded-full flex items-center justify-center">
              <FaHistory className="size-7 text-gray-400 m-4" />
            </div>
            <p className="text-gray-500 text-sm">No activity yet</p>
            <p className="text-gray-600 text-xs mt-1">
              Your interactions will appear here
            </p>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center space-y-3">
            {history.map((item) => {
              const config = getTypeConfig(item.type);
              const Icon = config.icon;
              return (
                <div
                  onClick={() => onSelect(item)}
                  key={item.id}
                  className="w-full flex flex-col items-center p-4 rounded-xl border border-gray-600/50 hover:border-gray-500/50 transition-all duration-200 group backdrop-blur-sm bg-black-900/50 cursor-pointer"
                >
                  <div className="w-full flex flex-col items-start justify-center gap-1 mb-3">
                    <div
                      className={`flex items-center space-x-2 bg-linear-to-tl ${config.color} py-1 px-4 rounded-xl`}
                    >
                      <Icon className="size-4" />
                      <span className="text-sm font-medium text-gray-200 capitalize">
                        {item.type}
                      </span>
                    </div>
                    <span className="pl-1 pt-1 text-xs text-gray-400 group-hover:text-gray-300">
                      {item.timestamp}
                    </span>
                  </div>
                  <div className="w-full flex flex-col space-y-2 pl-1">
                    <div className="w-full">
                      <p className="text-xs font-medium text-gray-300 mb-1">
                        Input
                      </p>
                      <p className="text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">
                        {formatContent(item.input, 60)}
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="text-xs font-medium text-gray-300 mb-1">
                        Output
                      </p>
                      <p className="text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">
                        {formatContent(item.output, 80)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPanel;
