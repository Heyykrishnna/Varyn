import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Router from './components/Router';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <Router />
      </main>
      <Footer />
    </div>
  );
}
