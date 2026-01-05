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

    if (!description) {
      return NextResponse.json(
        { error: "Description is Required" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Generate ${
      language || "JavaScript"
    } code for: ${description}\n\nCode:`;

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
