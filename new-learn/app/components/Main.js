// pages/index.js

import React from 'react';

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br">
      <h1 className="text-4xl font-bold text-center text-white mb-4">Welcome to GenCraft.ai</h1>
      <p className="text-lg text-center text-white mb-8">Welcome to the World of Generative AI. Let's flaunt through our exciting tools.</p>
      <button className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3">Get Started</button>
    </div>
  );
};

export default Main;
