import React, { useState } from "react";
import { HistoryItem } from "../types";
import toast from "react-hot-toast";
import { languages, samplePromptsWithLanguages } from "../data/examples";
import { GiProcessor } from "react-icons/gi";
import { ScaleLoader } from "react-spinners";
import KernelOutput from "./KernelOutput";
import LanguageSelect from "./LanguageSelect";

interface CodeGenerationProps {
  addToHistory: (
    type: HistoryItem["type"],
    input: string,
    output: string,
  ) => void;
}

const CodeGeneration = ({ addToHistory }: CodeGenerationProps) => {
  const [description, setDescription] = useState<string>("");
  const [language, setLanguage] = useState<string>(
    "Auto (KernelAI intelligently selects the best language)",
  );
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const handleGenerate = async () => {
    if (!description.trim()) {
      toast.error("Please describe what you want to generate.", {
        id: "code-generate-error",
      });
      return;
    }

    setLoading(true);
    setGeneratedCode("");
    setOpen(false);
    toast.success("KernelAI is generating your code...", {
      id: "code-generate",
    });
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ language, description }),
      });
      const data = await response.json();
      if (response.ok) {
        const generatedCodeText =
          data.data?.generatedCode || "No code generated";

        setGeneratedCode(generatedCodeText);
        addToHistory(
          "generate",
          `Language: ${language}.\nDescription: ${description}`,
          generatedCodeText,
        );
      } else {
        setGeneratedCode(`Error: ${data.error}`);
      }
    } catch (err) {
      setGeneratedCode("Unable to generate code. Please try again.");
      toast.error("Failed to generate code. Please try again.", {
        id: "code-generate-failed-error",
      });
    } finally {
      setLoading(false);
    }
  };

  const insertSample = () => {
    setOpen(false);
    const randomSample =
      samplePromptsWithLanguages[
        Math.floor(Math.random() * samplePromptsWithLanguages.length)
      ];

    setLanguage(randomSample.language);
    setDescription(randomSample.description);
  };

  return (
    <div className="w-full flex flex-col justify-center space-y-6 transition-all duration-200">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Generate Code</h2>
        <button
          onClick={insertSample}
          disabled={loading}
          className="px-4 py-2 bg-gray-600/50 rounded-lg text-center hover:bg-green-600/50 cursor-pointer text-gray-300 hover:text-white transition-colors duration-100 text-sm disabled:cursor-not-allowed disabled:hover:bg-gray-600/50 disabled:hover:text-gray-300"
        >
          Try Random Example
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-center space-y-4 p-1">
        <div className="w-full flex flex-col justify-center p-2 gap-2">
          <div className="w-full flex flex-col gap-2 pb-2">
            <label className="text-sm font-medium text-gray-300 pl-2">
              Programming Language
            </label>
            <LanguageSelect
              value={language}
              options={languages}
              disabled={loading}
              onChange={setLanguage}
              open={open}
              toggleSelect={setOpen}
            />
          </div>
          <div className="w-full flex items-center justify-between px-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300 ml-1"
            >
              Description
            </label>
            <div className="block text-sm font-medium text-gray-300 mr-1">
              {description.length} chars
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <textarea
              name="description"
              id="description"
              rows={10}
              spellCheck={false}
              value={description}
              readOnly={loading}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the problem, requirements, constraints, and expected output here..."
              className={`w-full min-h-90 bg-black/60 text-emerald-100 placeholder:text-emerald-400/40 rounded-xl border border-emerald-500/40 px-4 py-3 font-normal text-md leading-relaxed backdrop-blur-md focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition-all duration-200 ease-out resize-none overflow-y-auto kernel-scrollbar ${
                loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center p-1">
          <button
            onClick={handleGenerate}
            disabled={loading || !description}
            className={`w-full inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-white bg-emerald-600/95 shadow-lg shadow-emerald-500/25 hover:bg-emerald-500 hover:text-black transition-all duration-200 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:bg-gray-500/60 disabled:hover:text-white`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <ScaleLoader color="white" />
                Generating Code...
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <GiProcessor className="size-6" />
                <span>Generate Code</span>
              </span>
            )}
          </button>
        </div>
        {generatedCode && (
          <KernelOutput output={generatedCode} outputType="Generated Code" />
        )}
      </div>
    </div>
  );
};

export default CodeGeneration;
