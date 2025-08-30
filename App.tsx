
import React, { useState, useCallback } from 'react';
import type { Recipe } from './types';
import { generateRecipe } from './services/geminiService';
import IngredientForm from './components/IngredientForm';
import RecipeDisplay from './components/RecipeDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateRecipe = useCallback(async () => {
    if (!ingredients.trim()) {
      setError('Please enter some ingredients.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setRecipe(null);

    try {
      const generatedRecipe = await generateRecipe(ingredients);
      setRecipe(generatedRecipe);
    } catch (err) {
      console.error(err);
      setError('Failed to generate a recipe. The AI might be busy, or the ingredients might be too unusual. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [ingredients]);

  return (
    <div className="min-h-screen bg-green-50/50 font-sans text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200/80">
          <IngredientForm
            ingredients={ingredients}
            setIngredients={setIngredients}
            onSubmit={handleGenerateRecipe}
            isLoading={isLoading}
          />
        </div>

        <div className="mt-8">
          {isLoading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {recipe && <RecipeDisplay recipe={recipe} />}
          {!isLoading && !error && !recipe && <WelcomeMessage />}
        </div>
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">
        <p>Powered by Gemini AI. Happy Cooking!</p>
      </footer>
    </div>
  );
};

export default App;
