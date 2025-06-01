import React from 'react';
import { Phone, Mail, MapPin, Music, Facebook, Instagram } from 'lucide-react';
import { PageViewCounter } from './PageViewCounter';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  
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
              {t('about_description')}
            </p>
            <p className="text-gray-400 mb-4">
              {t('about_founders')}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                {/* TikTok non è disponibile in lucide-react, quindi creiamo un'icona personalizzata */}
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M15 8a4 4 0 0 0 4 4V8h-4Z" />
                  <path d="M15 2v14" />
                  <path d="M9 16v-4" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('contact')}</h3>
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
                <span>Göppingen, Germania<br />{t('footer_open')}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer_quick_links')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-yellow-400 transition-colors">{t('about')}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors">{t('services')}</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-yellow-400 transition-colors">{t('booking')}</a>
              </li>
              <li>
                <a href="https://calendly.com/dxbeetz" className="hover:text-yellow-400 transition-colors">
                  {t('footer_free_consult')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} MG Sound Studio. {t('footer_rights')}
          </p>
          <div className="flex justify-center mt-4">
            <PageViewCounter />
          </div>
        </div>
      </div>
    </footer>
  );
};