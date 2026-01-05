"use client";

import React, { useState } from "react";
import HistoryPanel from "./HistoryPanel";
import { HistoryItem, Tab } from "../types";
import CodeExplanation from "./CodeExplanation";
import CodeDebugging from "./CodeDebugging";
import CodeGeneration from "./CodeGeneration";
import tabs from "../data/tabs";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState<Tab["id"]>("explain");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const addToHistory = (
    type: HistoryItem["type"],
    input: string,
    output: string
  ) => {
    const newItem: HistoryItem = {
      id: Date.now(),
      type,
      timestamp: new Date().toLocaleString(),
      input,
      output,
    };
    setHistory((prev) => [newItem, ...prev.slice(0, 9)]);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center lg:flex-row gap-8 py-2 px-1 sm:px-4 md:px-10">
      <div className="w-full lg:2/3 flex flex-col">
        <div className="w-full bg-black-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-600/95">
          <div className="w-full flex flex-wrap items-center gap-3 border-b border-emerald-600/95 border-black-700/50 bg-black-900-50 p-2">
            {tabs.map((tab: Tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`flex flex-wrap items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeTab == tab.id
                      ? `bg-linear-to-r ${tab.gradient} text-white shadow-lg`
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="text-xl">
                    <Icon size={25} />
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
          <div className="w-full flex items-center p-6">
            {activeTab == "explain" && (
              <CodeExplanation addToHistory={addToHistory} />
            )}
            {activeTab == "debug" && (
              <CodeDebugging addToHistory={addToHistory} />
            )}
            {activeTab == "generate" && (
              <CodeGeneration addToHistory={addToHistory} />
            )}
          </div>
        </div>
      </div>
      <HistoryPanel history={history} />
    </div>
  );
};

export default MainContent;
