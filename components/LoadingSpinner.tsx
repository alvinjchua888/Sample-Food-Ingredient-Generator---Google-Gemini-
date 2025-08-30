
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center">
      <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-semibold text-gray-700">Crafting your recipe...</p>
      <p className="text-sm text-gray-500">The AI chef is thinking!</p>
    </div>
  );
};

export default LoadingSpinner;
