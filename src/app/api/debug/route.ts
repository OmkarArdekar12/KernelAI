import { DebugRequest } from "@/app/types";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI API KEY is not set in Environment Variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const POST = async (req: NextRequest) => {
  try {
    const { code, error: errorMessage }: DebugRequest = await req.json();

    if (!code || !code.trim()) {
      return NextResponse.json({ error: "Code is Required" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    let prompt = `
You are KernelAI — a senior and expert software engineer and debugger.\n
Task: Analyze the given code and identify issues, bugs, or improvements.\n
Guidelines:\n
- Identify the root cause of the issue.\n
- Explain WHY the issue occurs.\n
- Provide clear and correct fixes.\n
- Suggest best practices and improvements.\n
- Mention edge and corner cases if relevant.\n
- If the error message is provided, use it for accurate debugging.\n
Output Format (STRICT):\n
1. Issue Identification\n
2. Root Cause Explanation\n
3. Debugging Fixes\n
4. Entire Improved / Corrected Code\n
5. Best Practices & Preventive Tips\n
6. Conclusion\n
Code:\n
${code}\n\n
${errorMessage ? `Error Message:\n${errorMessage}` : ""}\n\n`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const debugging = response.text();

    return NextResponse.json({ data: { debugging } }, { status: 200 });
  } catch (err) {
    console.error("Error in Code Debugging: ", err);
    return NextResponse.json(
      { error: "Failed to generate debugging suggestion." },
      { status: 500 }
    );
  }
};
