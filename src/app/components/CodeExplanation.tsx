import React, { useState } from "react";
import { HistoryItem } from "../types";
import toast from "react-hot-toast";
import { sampleCode } from "../data/examples";

interface CodeExplanationProps {
  addToHistory: (
    type: HistoryItem["type"],
    input: string,
    output: string
  ) => void;
}

const CodeExplanation = ({ addToHistory }: CodeExplanationProps) => {
  const [code, setCode] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleExplain = async () => {
    if (!code.trim()) {
      toast.error("Code is Required!", { id: "code-explain-error" });
      return;
    }

    setLoading(true);
    toast.success("KernelAI is analyzing...", { id: "code-explain" });
    try {
      const response = await fetch("/api/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      if (response.ok) {
        const explanationText =
          data.data?.explanation || "No explanation generated";

        setExplanation(explanationText);
        addToHistory("explain", code, explanationText);
      } else {
        setExplanation(`Error: ${data.error}`);
      }
    } catch (err) {
      setExplanation("Failed to generated explanation. Please try again!");
      toast.error("Failed to generated explanation. Please try again!", {
        id: "code-explain-failed-error",
      });
    } finally {
      setLoading(false);
    }
  };

  const insertSample = () => {
    setCode(sampleCode);
  };

  return (
    <div className="w-full flex flex-col justify-center space-y-6 transition-all duration-200">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Explain Code</h2>
        <button
          onClick={insertSample}
          className="px-4 py-2 bg-gray-600/50 rounded-lg text-center hover:bg-green-600/50 cursor-pointer text-gray-300 hover:text-white transition-colors duration-100 text-sm"
        >
          Try Sample
        </button>
      </div>
      <div className="w-full flex items-center justify-center space-y-4 p-1">
        <div className="w-full flex flex-col justify-center p-2 gap-2">
          <label
            htmlFor="code"
            className="block text-sm font-medium text-gray-300 ml-1"
          >
            Paste your code
          </label>
          <div className="w-full flex items-center justify-center">
            <textarea
              name="code"
              id="code"
              rows={12}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here to get a detailed explanation"
              className="w-full min-h-90 bg-black/60 text-emerald-100 placeholder:text-emerald-400/40 rounded-xl border border-emerald-500/40 px-4 py-3 font-mono text-sm leading-relaxed backdrop-blur-md focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition-all duration-200 ease-out resize-none overflow-y-auto kernel-scrollbar"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeExplanation;
