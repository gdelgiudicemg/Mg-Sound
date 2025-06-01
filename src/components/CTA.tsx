import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const CTA: React.FC = () => {
  const { t, i18n } = useTranslation();
  // Aggiungiamo un controllo di sicurezza
  const locale = i18n && i18n.language ? i18n.language : 'it';
  
  // Stato per memorizzare l'URL di Calendly
  const [calendlyUrl, setCalendlyUrl] = useState(`https://calendly.com/dxbeetz?locale=${locale}`);
  
  // Aggiorna l'URL quando cambia la lingua
  useEffect(() => {
    setCalendlyUrl(`https://calendly.com/dxbeetz?locale=${locale}`);
  }, [locale]);
  
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('book_free_consultation')}</h2>
          <p className="text-lg mb-8 text-gray-300">
            {t('cta_description')}
          </p>
          
          <a 
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-yellow-500 text-black font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors"
          >
            <Calendar className="mr-2 h-5 w-5" />
            {t('book_consultation')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};