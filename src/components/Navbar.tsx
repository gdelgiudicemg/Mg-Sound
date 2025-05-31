import React, { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center text-white">
            <Music className="h-8 w-8 text-yellow-400 mr-2" />
            <span className="text-xl font-bold">MG Sound</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-yellow-400 transition-colors">
              Chi Siamo
            </a>
            <a href="#booking" className="text-white hover:text-yellow-400 transition-colors">
              Prenotazioni
            </a>
            <a href="#services" className="text-white hover:text-yellow-400 transition-colors">
              Servizi
            </a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">
              Contatti
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-black bg-opacity-95 rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <a 
                href="#about" 
                className="text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Chi Siamo
              </a>
              <a 
                href="#booking" 
                className="text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Prenotazioni
              </a>
              <a 
                href="#services" 
                className="text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Servizi
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contatti
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};