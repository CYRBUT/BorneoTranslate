
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we assume the key is provided.
  console.warn("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const translateText = async (
  text: string,
  sourceLang: Language,
  targetLang: Language
): Promise<string> => {
  if (!text.trim()) {
    return "";
  }
  if (!API_KEY) {
    return "Error: API key is not configured.";
  }

  try {
    const prompt = `Translate the following text from ${sourceLang} to ${targetLang}. Provide ONLY the translated text, without any introductory phrases, explanations, or quotation marks.

Text to translate:
"${text}"`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error translating text:", error);
    return "An error occurred during translation.";
  }
};
