
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

export const translateText = async (
  text: string,
  sourceLang: Language,
  targetLang: Language
): Promise<string> => {
  if (!text.trim()) {
    return "";
  }
  
  const API_KEY = process.env.API_KEY;

  if (!API_KEY) {
    return "Error: API key not available. Please configure the API_KEY environment variable in your hosting environment.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
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
    if (error instanceof Error) {
        if (error.message.includes('API key not valid')) {
            return "Error: The provided API key is invalid. Please check your configuration.";
        }
    }
    return "An error occurred during translation. Check the browser console for details.";
  }
};
