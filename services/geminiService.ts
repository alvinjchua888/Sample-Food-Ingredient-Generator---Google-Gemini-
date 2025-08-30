
import { GoogleGenAI, Type } from "@google/genai";
import type { Recipe } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const recipeSchema = {
  type: Type.OBJECT,
  properties: {
    recipeName: { type: Type.STRING, description: "The name of the recipe." },
    description: { type: Type.STRING, description: "A short, enticing description of the dish." },
    prepTime: { type: Type.STRING, description: "Preparation time, e.g., '15 minutes'." },
    cookTime: { type: Type.STRING, description: "Cooking time, e.g., '25 minutes'." },
    servings: { type: Type.STRING, description: "Number of servings, e.g., '4 servings'." },
    ingredients: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of all ingredients required for the recipe, including quantities."
    },
    instructions: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Step-by-step instructions to prepare the dish."
    }
  },
  required: ["recipeName", "description", "prepTime", "cookTime", "servings", "ingredients", "instructions"],
};


export const generateRecipe = async (ingredients: string): Promise<Recipe> => {
  const prompt = `You are a creative chef. Based on the following ingredients, create a delicious recipe. The user has: ${ingredients}. Please provide a complete recipe including a name, description, prep time, cook time, servings, a detailed ingredient list (including any pantry staples like oil, salt, pepper if needed), and step-by-step instructions.`;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: recipeSchema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text.trim();
    const recipeData: Recipe = JSON.parse(jsonText);
    
    // Basic validation
    if (!recipeData.recipeName || !recipeData.ingredients || !recipeData.instructions) {
        throw new Error("AI returned incomplete recipe data.");
    }

    return recipeData;
  } catch (error) {
    console.error("Error generating recipe from Gemini API:", error);
    throw new Error("Failed to parse recipe from AI response.");
  }
};
