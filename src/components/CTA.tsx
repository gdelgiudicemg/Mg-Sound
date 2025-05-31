import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fissa ora il tuo consulto gratuito!</h2>
          <p className="text-lg mb-8 text-gray-300">
            Scopri cosa possiamo fare per te con un primo incontro gratuito e senza impegno.
            Parliamo delle tue esigenze e ti aiutiamo a trovare la soluzione migliore.
          </p>
          
          <a 
            href="https://calendly.com/dxbeetz" 
            className="inline-flex items-center bg-yellow-500 text-black font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Prenota il Consulto
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};