import React, { useState } from "react";
import { HistoryItem } from "../types";
import toast from "react-hot-toast";

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

  const handleExplain = async () => {};

  return (
    <div>
      {toast.success("Done")}
      {toast.error("Oops")}CodeExplanation
    </div>
  );
};

export default CodeExplanation;
