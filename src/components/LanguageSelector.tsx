import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button 
        onClick={() => changeLanguage('it')} 
        className={`text-sm px-2 py-1 rounded ${i18n.language === 'it' ? 'bg-yellow-400 text-black font-bold' : 'text-white hover:text-yellow-400'}`}
      >
        IT
      </button>
      <button 
        onClick={() => changeLanguage('de')} 
        className={`text-sm px-2 py-1 rounded ${i18n.language === 'de' ? 'bg-yellow-400 text-black font-bold' : 'text-white hover:text-yellow-400'}`}
      >
        DE
      </button>
      <button 
        onClick={() => changeLanguage('en')} 
        className={`text-sm px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-yellow-400 text-black font-bold' : 'text-white hover:text-yellow-400'}`}
      >
        EN
      </button>
    </div>
  );
};