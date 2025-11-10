import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './components/Router'; // updated import
import OpeningAnimation from './components/OpeningAnimation';

const getRoute = () => {
  const hash = window.location.hash.replace('#', '').trim();
  const clean = hash.startsWith('/') ? hash.slice(1) : hash;
  const [path] = clean.split('?');
  return path || '';
};

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    if (!showContent) {
      document.body.classList.add('opening-animation-active');
    } else {
      document.body.classList.remove('opening-animation-active');
    }
  }, [showContent]);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  // Determine if we should apply bg-black (exclude characters page)
  const shouldApplyBgBlack = route !== 'characters';
  // Determine if we should apply pt-16 (exclude home page and characters page)
  const shouldApplyPt16 = route !== '' && route !== 'characters';

  return (
    <>
      {!showContent && <OpeningAnimation onComplete={handleAnimationComplete} />}
      <div 
        className={`relative min-h-screen text-white overflow-x-hidden transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-75'
        }`}
        style={shouldApplyBgBlack ? {
          backgroundImage: 'url("/Bg-Image.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundColor: 'rgba(0,0,0,0.55)',
          visibility: showContent ? 'visible' : 'hidden'
        } : { visibility: showContent ? 'visible' : 'hidden' }}
      >
        {shouldApplyBgBlack && <div className="absolute inset-0 bg-black/65 backdrop-blur-sm"></div>}
        <div className="relative z-10">
          <Navbar />
          <main className={shouldApplyPt16 ? 'pt-16' : ''}>
            <AppRouter />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
