import React, { useState } from "react";
import { HistoryItem } from "../types";
import toast from "react-hot-toast";
import { sampleCode } from "../data/examples";
import { FaLaptopCode } from "react-icons/fa";
import KernelOutput from "./KernelOutput";

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
      toast.error("Please paste some code to continue.", {
        id: "code-explain-error",
      });
      return;
    }

    setLoading(true);
    setExplanation("");
    toast.success("KernelAI is analyzing your code...", { id: "code-explain" });
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
      setExplanation("Unable to generate explanation. Please try again.");
      toast.error("Unable to generate explanation. Please try again.", {
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
          disabled={loading}
          className="px-4 py-2 bg-gray-600/50 rounded-lg text-center hover:bg-green-600/50 cursor-pointer text-gray-300 hover:text-white transition-colors duration-100 text-sm disabled:cursor-not-allowed disabled:hover:bg-gray-600/50 disabled:hover:text-gray-300"
        >
          Try Sample
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-center space-y-4 p-1">
        <div className="w-full flex flex-col justify-center p-2 gap-2">
          <div className="w-full flex items-center justify-between px-2">
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-300 ml-1"
            >
              Code to Explain
            </label>
            <div className="block text-sm font-medium text-gray-300 mr-1">
              {code.length} chars
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <textarea
              name="code"
              id="code"
              rows={12}
              value={code}
              readOnly={loading}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here to get a detailed explanation"
              className={`w-full min-h-90 bg-black/60 text-emerald-100 placeholder:text-emerald-400/40 rounded-xl border border-emerald-500/40 px-4 py-3 font-normal text-md leading-relaxed backdrop-blur-md focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition-all duration-200 ease-out resize-none overflow-y-auto kernel-scrollbar ${
                loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center p-1">
          <button
            onClick={handleExplain}
            disabled={loading || !code}
            className={`w-full inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-white bg-emerald-600/95 shadow-lg shadow-emerald-500/25 hover:bg-emerald-500 hover:text-black transition-all duration-200 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:bg-gray-500/60 disabled:hover:text-white`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full border-2 border-white/50 border-t-white animate-spin" />
                Analyzing Code...
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <FaLaptopCode className="size-6" />
                <span>Explain Code</span>
              </span>
            )}
          </button>
        </div>
        {explanation && (
          <KernelOutput output={explanation} outputType="Explanation" />
        )}
      </div>
    </div>
  );
};

export default CodeExplanation;
