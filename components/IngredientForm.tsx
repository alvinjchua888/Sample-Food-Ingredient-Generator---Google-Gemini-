
import React from 'react';
import SparklesIcon from './icons/SparklesIcon';

interface IngredientFormProps {
  ingredients: string;
  setIngredients: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const IngredientForm: React.FC<IngredientFormProps> = ({
  ingredients,
  setIngredients,
  onSubmit,
  isLoading,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="ingredients" className="block text-lg font-semibold text-gray-700 mb-2">
          What ingredients do you have?
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g., chicken breast, rice, broccoli, soy sauce"
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-shadow duration-200 resize-none"
          disabled={isLoading}
        />
        <p className="text-xs text-gray-500 mt-2">
          Separate ingredients with commas. You can submit with Ctrl+Enter or Cmd+Enter.
        </p>
      </div>
      <button
        type="submit"
        disabled={isLoading || !ingredients.trim()}
        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-100 disabled:scale-100"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Generating...</span>
          </>
        ) : (
          <>
            <SparklesIcon className="w-5 h-5" />
            <span>Generate Recipe</span>
          </>
        )}
      </button>
    </form>
  );
};

export default IngredientForm;
