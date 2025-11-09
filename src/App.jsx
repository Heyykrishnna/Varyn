import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './components/Router'; // updated import
import OpeningAnimation from './components/OpeningAnimation';

export default function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!showContent) {
      document.body.classList.add('opening-animation-active');
    } else {
      document.body.classList.remove('opening-animation-active');
    }
  }, [showContent]);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      {!showContent && <OpeningAnimation onComplete={handleAnimationComplete} />}
      <div 
        className={`min-h-screen bg-black text-white overflow-x-hidden transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ visibility: showContent ? 'visible' : 'hidden' }}
      >
        <Navbar />
        <main className="pt-16">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </>
  );
}
