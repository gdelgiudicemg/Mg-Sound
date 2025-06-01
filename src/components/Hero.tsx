import React from 'react';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-black text-white pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-purple-900 opacity-80"></div>
      <div 
        className="absolute inset-0 bg-[url('/images/studio-purple.jpg')] bg-cover bg-center opacity-50"
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {t('hero_title')} <span className="text-yellow-400">MG Sound</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {t('hero_subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#booking" 
            className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-colors shadow-lg"
          >
            {t('hero_cta')}
          </a>
          <a 
            href="#services" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-black transition-colors"
          >
            {t('services_title')}
          </a>
        </div>
      </div>
    </section>
  );
};