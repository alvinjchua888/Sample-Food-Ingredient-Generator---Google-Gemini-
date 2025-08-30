
import React from 'react';
import ChefHatIcon from './icons/ChefHatIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200/80">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <div className="flex items-center space-x-3">
          <div className="bg-green-500 p-2 rounded-full text-white">
            <ChefHatIcon className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            AI Recipe Generator
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
