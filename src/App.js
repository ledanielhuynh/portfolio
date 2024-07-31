import React from 'react';
import FuzzyOverlay from './components/FuzzyOverlay';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';

export default function App() {
  return (
    <div className='relative h-screen overflow-hidden'>
      <Navbar />
      {/* <FuzzyOverlay /> */}
      <Hero/>
    </div>
  );
}
