import { ExplainRequest } from "@/app/types";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI API KEY is not set in Environment Variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const POST = async (req: NextRequest) => {
  try {
    const { code }: ExplainRequest = await req.json();

    if (!code || !code.trim()) {
      return NextResponse.json({ error: "Code is Required" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
You are KernelAI - a senior and expert software engineer.\n
Task: Explain the given code clearly and professionally.\n
Guidelines:\n
- Explain the core logic step by step.\n
- Use simple and precise technical language.\n
- Highlight important conditions, loops, and functions.\n
- Mention edge and corner cases if applicable.\n
- Keep the explanation clean and structured.\n
Output Format (STRICT):\n
1. Code Overview\n
2. Step-by-Step Explanation\n
3. Key Concepts Used\n
4. Edge & Corner Cases\n
5. Time and Space Complexity\n
6. Conclusion\n
Code to Explain:\n
${code}\n\n`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanation = response.text();

    return NextResponse.json({ data: { explanation } }, { status: 200 });
  } catch (err) {
    console.error("Error in Code Explanation: ", err);
    return NextResponse.json(
      { error: "Failed to generate code explanation." },
      { status: 500 }
    );
  }
};
