import React from 'react';
import { Phone, Mail, MapPin, Music, Facebook, Instagram } from 'lucide-react';
import { PageViewCounter } from './PageViewCounter';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Music className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-xl font-bold">MG Sound</span>
            </div>
            <p className="text-gray-400 mb-4">
              Il tuo studio professionale per produzione Audio & Video a Göppingen, Germania.
            </p>
            <p className="text-gray-400 mb-4">
              Fondatori: Giuseppe D'Ischia e Gino D'Ischia
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-yellow-400 transition-colors">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-yellow-400 transition-colors">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-400 mr-2" />
                <span>+49 07161 5031946</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-400 mr-2" />
                <a href="mailto:dxbeetz@gmail.com" className="hover:text-yellow-400 transition-colors">
                  dxbeetz@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mr-2 mt-1" />
                <span>Göppingen, Germania<br />Aperto solo su appuntamento</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Collegamenti Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-yellow-400 transition-colors">Chi Siamo</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors">Servizi</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-yellow-400 transition-colors">Prenotazioni</a>
              </li>
              <li>
                <a href="https://calendly.com/dxbeetz" className="hover:text-yellow-400 transition-colors">
                  Consulto Gratuito
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} MG Sound Studio. Tutti i diritti riservati.
          </p>
          <div className="flex justify-center mt-4">
            <PageViewCounter />
          </div>
        </div>
      </div>
    </footer>
  );
};