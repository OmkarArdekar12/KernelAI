"use client";

import React, { useState } from "react";
import HistoryPanel from "./HistoryPanel";
import tabs from "../data/tabs";
import { HistoryItem, Tab } from "../types";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState<Tab["id"]>("explain");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  return (
    <div className="w-full flex flex-col items-center justify-center lg:flex-row gap-8 py-2 px-4 md:px-10">
      <div className="w-full lg:2/3 flex flex-col">
        <div className="w-full bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-600/95">
          <div className="w-full flex items-center gap-3 border-b border-gray-700/50 bg-gray-900-50 p-2">
            {tabs.map((tab: Tab) => (
              <button
                key={tab.id}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab == tab.id
                    ? `bg-linear-to-r ${tab.gradient} text-white shadow-lg`
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="text-xl mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <HistoryPanel />
    </div>
  );
};

export default MainContent;
