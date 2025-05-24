
import React from 'react';
import { Brain } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-3">
          <Brain className="h-8 w-8" />
          <h1 className="text-3xl font-bold">USMLE Step 1 Pharmacology</h1>
        </div>
        <p className="text-center text-blue-100 mt-2">Master pharmacology concepts through interactive learning</p>
      </div>
    </header>
  );
};

export default Header;
