import React from 'react';
import { Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CalendlyEmbed from './CalendlyEmbed';

export const Booking: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="booking" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('book_appointment')}</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('book_description')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-gray-50 border-b flex items-center">
            <Calendar className="text-yellow-500 mr-3" />
            <h3 className="text-xl font-semibold">{t('availability_calendar')}</h3>
          </div>
          <div className="calendly-container p-0">
            <CalendlyEmbed height="700px" />
          </div>
        </div>
      </div>
    </section>
  );
};