import React from 'react';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();
  
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
                <p className="font-bold text-lg">{t('since_2003')}</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-6 text-white">{t('about_title')}</h2>
            <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-lg text-gray-300 mb-4">
              {t('about_history')}
            </p>
            <p className="text-lg text-gray-300 mb-6">
              {t('about_founders')}
            </p>
            <p className="text-lg text-gray-300 mb-6">
              {t('about_passion')}
            </p>
            <a 
              href="#booking" 
              className="inline-block px-6 py-3 bg-purple-800 text-white font-bold rounded hover:bg-purple-700 transition-colors"
            >
              {t('work_with_us')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};