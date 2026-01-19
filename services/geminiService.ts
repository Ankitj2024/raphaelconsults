import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStudyAdvice = async (
  userPrompt: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct a context-aware prompt
    const systemInstruction = `You are a senior educational consultant for EduVoyage Global. 
    Your goal is to help students find the best overseas study opportunities. 
    Be encouraging, professional, and knowledgeable about universities in the UK, USA, Canada, Australia, and Europe.
    Provide concise, actionable advice. If asked about visa processes, provide general guidance but advise consulting a legal expert for specifics.
    Structure your answers with bullet points where appropriate.`;

    // Simple chat history construction for context (last 4 messages)
    const recentHistory = history.slice(-4).map(h => `${h.role === 'user' ? 'Student' : 'Consultant'}: ${h.text}`).join('\n');
    
    const finalPrompt = `${recentHistory}\nStudent: ${userPrompt}\nConsultant:`;

    const response = await ai.models.generateContent({
      model: model,
      contents: finalPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this moment. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get advice from the AI consultant.");
  }
};