
import React from 'react';
import ChefHatIcon from './icons/ChefHatIcon';

const WelcomeMessage: React.FC = () => {
    return (
        <div className="text-center p-8 bg-gray-100/80 rounded-2xl border-2 border-dashed border-gray-300">
            <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                    <ChefHatIcon className="w-12 h-12 text-green-600" />
                </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Ready to Cook Something Amazing?</h2>
            <p className="text-gray-600 max-w-md mx-auto">
                Enter the ingredients you have in the box above, and our AI chef will whip up a custom recipe just for you.
            </p>
        </div>
    );
};

export default WelcomeMessage;
