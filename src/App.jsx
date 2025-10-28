import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './components/Router'; // updated import

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}
