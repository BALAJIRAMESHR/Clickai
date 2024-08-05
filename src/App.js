import React from 'react';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './App.css';
import FAQ from './components/FAQ section';
import TestimonialSection from './components/TestimonialSection';

function App() {
  return (
    <div className="App">
      <TestimonialSection/>
      <FAQ section/>
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
