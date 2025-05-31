import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Booking } from './components/Booking';
import { Services } from './components/Services';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Booking />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;