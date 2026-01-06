import { GenerateRequest } from "@/app/types";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI API KEY is not set in Environment Variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const POST = async (req: NextRequest) => {
  try {
    const { language, description }: GenerateRequest = await req.json();

    if (!description || !description.trim()) {
      return NextResponse.json(
        { error: "Description is Required" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const codeLanguage =
      !language ||
      language === "Auto (KernelAI intelligently selects the best language)"
        ? "the most appropriate programming language"
        : language;

    const prompt = `
You are KernelAI - a senior and expert software engineer and system designer.\n
Task: Generate clean, optimized, and production-ready code.\n
Language: Use ${codeLanguage}\n
Guidelines:\n
- Choose the best language automatically if not explicitly specified.\n
- Follow industry best practices.\n
- Write clean, readable, and modular code.\n
- Use meaningful variable and function names.\n
- Handle edge and corner cases where applicable.\n
- Add inline comments in code.\n
- If applicable, include (include in the code explanation):\n
  - Time Complexity\n
  - Space Complexity\n
Output Rules:\n
- Return the code (code in single terminal/code box) and code explanation separately.\n
- Just Give Ouput in the following format:\n
  1. Code (language)\n
  2. Code Explanation\n
  3. Code Core Points, Best Practices (Industry Level) and Edge & Corner Cases\n
  4. Time and Space Complexity\n
  5. Conclusion\n
Problem Description:\n
${description}\n\n`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedCode = response.text();

    return NextResponse.json({ data: { generatedCode } }, { status: 200 });
  } catch (err) {
    console.error("Error in Code Generation: ", err);
    return NextResponse.json(
      { error: "Failed to generate code." },
      { status: 500 }
    );
  }
};
