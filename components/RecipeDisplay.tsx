
import React from 'react';
import type { Recipe } from '../types';

interface RecipeDisplayProps {
  recipe: Recipe;
}

const InfoPill: React.FC<{ label: string, value: string }> = ({ label, value }) => (
    <div className="flex flex-col items-center bg-green-50 text-green-800 p-3 rounded-lg text-center">
        <span className="text-sm font-medium">{label}</span>
        <span className="font-bold text-base">{value}</span>
    </div>
);


const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200/80 overflow-hidden animate-fade-in">
      <div className="p-6 sm:p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{recipe.recipeName}</h2>
        <p className="text-gray-600 mb-6">{recipe.description}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <InfoPill label="Prep Time" value={recipe.prepTime} />
            <InfoPill label="Cook Time" value={recipe.cookTime} />
            <InfoPill label="Servings" value={recipe.servings} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">Ingredients</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">Instructions</h3>
            <ol className="space-y-4 text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex">
                  <span className="bg-green-500 text-white rounded-full h-6 w-6 text-sm flex items-center justify-center font-bold mr-3 flex-shrink-0">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDisplay;
