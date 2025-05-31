import React from 'react';
import { Calendar } from 'lucide-react';

export const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Prenota il Tuo Appuntamento</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Prenota facilmente online tramite il nostro calendario interattivo.
            Scegli il giorno e l'orario che preferisci per il tuo servizio.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-gray-50 border-b flex items-center">
            <Calendar className="text-yellow-500 mr-3" />
            <h3 className="text-xl font-semibold">Calendario delle Disponibilità</h3>
          </div>
          <div className="calendly-container p-0 h-[700px]">
            <iframe 
              src="https://calendly.com/dxbeetz" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Calendly Booking"
              className="block"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};