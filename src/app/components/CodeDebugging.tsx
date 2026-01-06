import React, { useState } from "react";
import { HistoryItem } from "../types";
import toast from "react-hot-toast";
import { sampleBuggyCode, sampleError } from "../data/examples";
import { VscDebugAll } from "react-icons/vsc";
import KernelOutput from "./KernelOutput";

interface CodeDebuggingProps {
  addToHistory: (
    type: HistoryItem["type"],
    input: string,
    output: string
  ) => void;
}

const CodeDebugging = ({ addToHistory }: CodeDebuggingProps) => {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [debugging, setDebugging] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleDebug = async () => {
    if (!code.trim()) {
      toast.error("Please paste some code for debugging.", {
        id: "code-debug-error",
      });
      return;
    }

    setLoading(true);
    setDebugging("");
    toast.success("KernelAI is debugging your code...", { id: "code-debug" });
    try {
      const response = await fetch("/api/debug", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, error }),
      });
      const data = await response.json();
      if (response.ok) {
        const debuggingText =
          data.data?.debugging || "No debugging suggestions generated";

        setDebugging(debuggingText);
        addToHistory(
          "debug",
          `Code:\n${code}\n\nError:\n${error}`,
          debuggingText
        );
      } else {
        setDebugging(`Error: ${data.error}`);
      }
    } catch (err) {
      setDebugging(
        "Unable to generate debugging suggestions. Please try again."
      );
      toast.error(
        "Unable to generate debugging suggestions. Please try again.",
        {
          id: "code-debug-failed-error",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const insertSample = () => {
    setCode(sampleBuggyCode);
    setError(sampleError);
  };

  return (
    <div className="w-full flex flex-col justify-center space-y-6 transition-all duration-200">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Debug Code</h2>
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
              htmlFor="debug-code"
              className="block text-sm font-medium text-gray-300 ml-1"
            >
              Code to Debug
            </label>
            <div className="block text-sm font-medium text-gray-300 mr-1">
              {code.length} chars
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <textarea
              name="debug-code"
              id="debug-code"
              rows={12}
              spellCheck={false}
              value={code}
              readOnly={loading}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your buggy code here..."
              className={`w-full min-h-90 bg-black/60 text-emerald-100 placeholder:text-emerald-400/40 rounded-xl border border-emerald-500/40 px-4 py-3 font-normal text-md leading-relaxed backdrop-blur-md focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition-all duration-200 ease-out resize-none overflow-y-auto kernel-scrollbar ${
                loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center p-2 gap-2">
          <div className="w-full flex items-center justify-between px-2">
            <label
              htmlFor="error"
              className="block text-sm font-medium text-gray-300 ml-1"
            >
              Error Message (Optional)
            </label>
          </div>
          <div className="w-full flex items-center justify-center">
            <textarea
              name="error"
              id="error"
              rows={3}
              spellCheck={false}
              value={error}
              readOnly={loading}
              onChange={(e) => setError(e.target.value)}
              placeholder="Describe or paste the error message here..."
              className={`w-full min-h-20 bg-black/60 text-emerald-100 placeholder:text-emerald-400/40 rounded-xl border border-emerald-500/40 px-4 py-3 font-normal text-md leading-relaxed backdrop-blur-md focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition-all duration-200 ease-out resize-none overflow-y-auto kernel-scrollbar ${
                loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center p-1">
          <button
            onClick={handleDebug}
            disabled={loading || !code}
            className={`w-full inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-white bg-emerald-600/95 shadow-lg shadow-emerald-500/25 hover:bg-emerald-500 hover:text-black transition-all duration-200 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:bg-gray-500/60 disabled:hover:text-white`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full border-2 border-white/50 border-t-white animate-spin" />
                Debugging Code...
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <VscDebugAll className="size-6" />
                <span>Debug Code</span>
              </span>
            )}
          </button>
        </div>
        {debugging && (
          <KernelOutput output={debugging} outputType="Debugging Fixes" />
        )}
      </div>
    </div>
  );
};

export default CodeDebugging;
