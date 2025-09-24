
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3zM3 12a9 9 0 0 1 9-9v2a7 7 0 0 0-7 7H3zm9 9a9 9 0 0 1-9-9h2a7 7 0 0 0 7 7v2zm9-9a9 9 0 0 1-9 9v-2a7 7 0 0 0 7-7h2z"/>
            <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
          AI Image Generator
        </h1>
      </div>
    </header>
  );
};

export default Header;
