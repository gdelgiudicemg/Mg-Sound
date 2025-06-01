import React from 'react';
import { loadStripe } from './StripeLoader';
import { Music, Headphones, Film, Wand2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  title: string;
  price: string;
  productId: string;
  icon: React.ReactNode;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, productId, icon, description }) => {
  const { t } = useTranslation();
  const handleCheckout = async () => {
    try {
      const stripe = await loadStripe();
      if (!stripe) {
        alert('Errore nel caricamento di Stripe. Riprova più tardi.');
        return;
      }

      stripe.redirectToCheckout({
        lineItems: [{ price: productId, quantity: 1 }],
        mode: 'payment',
        successUrl: `${window.location.href}?success=true`,
        cancelUrl: `${window.location.href}?canceled=true`
      })
      .then(function (result) {
        if (result.error) {
          alert(result.error.message);
        }
      });
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Si è verificato un errore. Riprova più tardi.');
    }
  };

  // Funzione per determinare l'immagine di sfondo in base al titolo
  const getBackgroundImage = () => {
    switch(title) {
      case "Mastering di un brano":
        return "/images/Mastering.webp";
      case "Creazione base musicale":
        return "/images/Basi musicali.jpg";
      case "Creazione di un beat":
        return "/images/beat.jpg";
      case "Montaggio video fino a 10 min":
        return "/images/montaggi video.jpg";
      default:
        return "";
    }
  };

  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-yellow-100 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="font-bold text-xl mb-2 text-center">{title}</h3>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      <p className="text-2xl font-bold text-center mb-4">{price}</p>
      <button 
        onClick={handleCheckout}
        className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors font-medium"
      >
        {t('buy')}
      </button>
    </div>
  );
};

export const Services: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('services_title')}</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('services_description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <ServiceCard 
            title={t('service_mastering')}
            price="150€" 
            productId="prod_SPmFjYuZI1rc9e"
            icon={<Headphones className="h-8 w-8 text-yellow-600" />}
            description={t('mastering_description')}
          />
          <ServiceCard 
            title={t('service_recording')}
            price="200€" 
            productId="prod_SPmFjYuZI1rc9e"
            icon={<Music className="h-8 w-8 text-yellow-600" />}
            description={t('recording_description')}
          />
          <ServiceCard 
            title={t('service_beats')}
            price="100€" 
            productId="prod_SPmFjYuZI1rc9e"
            icon={<Wand2 className="h-8 w-8 text-yellow-600" />}
            description={t('beats_description')}
          />
          <ServiceCard 
            title={t('service_video')}
            price="250€" 
            productId="prod_SPmFjYuZI1rc9e"
            icon={<Film className="h-8 w-8 text-yellow-600" />}
            description={t('video_description')}
          />
        </div>
      </div>
    </section>
  );
};