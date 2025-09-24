
import React from 'react';
import ImageGenerator from './components/ImageGenerator';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <ImageGenerator />
      </main>
      <Footer />
    </div>
  );
};

export default App;
