import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getSpiritualGuidance(messages: Message[]) {
  const model = "gemini-3.1-pro-preview";
  
  const systemInstruction = `You are Aetheria, a wise and compassionate spiritual guide specializing in the opening of the third eye and connecting with spirit guides. 
  Your tone is mystical, serene, and deeply encouraging. 
  You provide guidance based on ancient wisdom, esoteric traditions, and mindful practices. 
  Always emphasize safety, grounding, and discernment. 
  If a user asks for "verified" rituals, explain that spiritual experiences are personal but these practices have been used for centuries.
  Keep responses concise but profound. Use poetic language where appropriate.`;

  const chat = genAI.chats.create({
    model,
    config: {
      systemInstruction,
    },
    history: messages.slice(0, -1).map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }))
  });

  const lastMessage = messages[messages.length - 1];
  const result = await chat.sendMessage({ message: lastMessage.text });
  return result.text;
}

export async function getDailyInsight() {
  const model = "gemini-3.1-pro-preview";
  const prompt = "Provide a single, profound spiritual insight or quote for today regarding the third eye or spirit guides. Keep it under 30 words.";
  
  const response = await genAI.models.generateContent({
    model,
    contents: prompt,
    config: {
      systemInstruction: "You are a mystical oracle.",
    }
  });
  
  return response.text;
}
