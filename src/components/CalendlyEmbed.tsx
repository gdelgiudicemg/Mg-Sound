import React, { useEffect, useState } from 'react'; 
import { useTranslation } from 'react-i18next';
 
const CalendlyEmbed: React.FC<{height?: string}> = ({ height = '700px' }) => { 
  const { i18n } = useTranslation();
  const [key, setKey] = useState(0);
  
  const locale = i18n && i18n.language ? i18n.language : 'it';
  const calendlyUrl = `https://calendly.com/dxbeetz`;
  
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
    
    // Rimuovi qualsiasi istanza precedente di Calendly
    if (window.Calendly) {
      window.Calendly.destroyBadgeWidget();
    }
    
    // Carica lo script di Calendly dinamicamente
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Configura Calendly con la lingua corrente
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: document.getElementById('calendly-container'),
          prefill: {},
          locale: locale
        });
      }
    };
    
    return () => {
      // Pulizia
      document.body.removeChild(script);
    };
  }, [locale, calendlyUrl]);
  
  return (
    <div style={{ minWidth: '320px', height }}>
      <div id="calendly-container" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default CalendlyEmbed;