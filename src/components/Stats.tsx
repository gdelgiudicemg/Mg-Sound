import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">La Nostra Professionalità</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-yellow-500" />
            </div>
            <p className="text-5xl font-bold text-yellow-500 mb-2">100%</p>
            <p className="text-gray-700 text-lg">Professionalità</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-yellow-500" />
            </div>
            <p className="text-5xl font-bold text-yellow-500 mb-2">2500+</p>
            <p className="text-gray-700 text-lg">Lavori completati</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <Clock className="h-12 w-12 text-yellow-500" />
            </div>
            <p className="text-5xl font-bold text-yellow-500 mb-2">20+</p>
            <p className="text-gray-700 text-lg">Anni di esperienza</p>
          </div>
        </div>
      </div>
    </section>
  );
};