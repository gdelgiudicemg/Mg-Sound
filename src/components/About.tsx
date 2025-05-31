import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="/images/studio di ragistrazione.jpg" 
                alt="Recording Studio" 
                className="rounded-lg shadow-lg w-full object-cover max-h-[500px]"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 px-6 py-4 rounded shadow-lg">
                <p className="font-bold text-lg">Dal 2003</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-6 text-white">Chi Siamo</h2>
            <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-lg text-gray-300 mb-4">
              MG Sound nasce in Italia oltre 20 anni fa, e da 3 anni opera con successo a Göppingen, Germania.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Fondato da Giuseppe D'Ischia e Gino D'Ischia, è uno studio altamente professionale, dedicato alla produzione 
              musicale e video per artisti, brand e aziende.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              La nostra passione per la musica e la produzione audiovisiva ci ha permesso di collaborare con numerosi artisti 
              e creare contenuti di altissima qualità.
            </p>
            <a 
              href="#booking" 
              className="inline-block px-6 py-3 bg-purple-800 text-white font-bold rounded hover:bg-purple-700 transition-colors"
            >
              Lavora Con Noi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};