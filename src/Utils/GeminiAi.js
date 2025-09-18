// GeminiAi.js
import { GEMINI_API_KEY } from "./Constants";
import { GoogleGenAI } from "@google/genai"

export const GeminiAi = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
  
});

export default GeminiAi;
