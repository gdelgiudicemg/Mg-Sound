import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: {
        translation: {
          // Navbar
          'about': 'Chi Siamo',
          'booking': 'Prenotazioni',
          'services': 'Servizi',
          'contact': 'Contatti',
          
          // Hero
          'hero_title': 'Studio Professionale di Registrazione',
          'hero_subtitle': 'Produzioni Audio & Video di Alta Qualità',
          'hero_cta': 'Prenota Ora',
          'our_services': 'I Nostri Servizi',
          
          // Stats
          'our_professionalism': 'La Nostra Professionalità',
          'professionalism': 'Professionalità',
          'completed_works': 'Lavori completati',
          'years_experience': 'Anni di esperienza',
          
          // About
          'about_title': 'Chi Siamo',
          'about_description': 'Il tuo studio professionale per produzione Audio & Video a Göppingen, Germania.',
          'about_founders': 'Fondatori: Giuseppe D\'Ischia e Gino D\'Ischia',
          'about_history': 'MG Sound nasce in Italia oltre 20 anni fa, e da 3 anni opera con successo a Göppingen, Germania.',
          'about_passion': 'La nostra passione per la musica e la produzione audiovisiva ci ha permesso di collaborare con numerosi artisti e creare contenuti di altissima qualità.',
          'work_with_us': 'Lavora Con Noi',
          'since_2003': 'Dal 2003',
          
          // Booking
          'book_appointment': 'Prenota il Tuo Appuntamento',
          'book_description': 'Prenota facilmente online tramite il nostro calendario interattivo. Scegli il giorno e l\'orario che preferisci per il tuo servizio.',
          'availability_calendar': 'Calendario delle Disponibilità',
          
          // Services
          'services_title': 'I Nostri Servizi',
          'services_description': 'Offriamo una vasta gamma di servizi professionali per soddisfare tutte le tue esigenze audio e video.',
          'service_recording': 'Registrazione',
          'service_mastering': 'Mastering',
          'service_beats': 'Produzione Beat',
          'service_video': 'Montaggi Video',
          'buy': 'Acquista',
          'mastering_description': 'Perfeziona il tuo brano con un mastering professionale',
          'beats_description': 'Beat personalizzati per il tuo progetto musicale',
          'recording_description': 'Registrazione professionale in studio',
          'video_description': 'Montaggio video professionale per i tuoi contenuti',
          
          // CTA
          'book_free_consultation': 'Fissa ora il tuo consulto gratuito!',
          'cta_description': 'Scopri cosa possiamo fare per te con un primo incontro gratuito e senza impegno. Parliamo delle tue esigenze e ti aiutiamo a trovare la soluzione migliore.',
          'book_consultation': 'Prenota il Consulto',
          
          // Footer
          'footer_rights': 'Tutti i diritti riservati.',
          'footer_open': 'Aperto solo su appuntamento',
          'footer_quick_links': 'Collegamenti Rapidi',
          'footer_free_consult': 'Consulto Gratuito',
          'total_visits': 'Visite totali'
        }
      },
      de: {
        translation: {
          // Navbar
          'about': 'Über Uns',
          'booking': 'Buchungen',
          'services': 'Dienstleistungen',
          'contact': 'Kontakt',
          
          // Hero
          'hero_title': 'Professionelles Aufnahmestudio',
          'hero_subtitle': 'Hochwertige Audio- & Videoproduktionen',
          'hero_cta': 'Jetzt Buchen',
          'our_services': 'Unsere Dienstleistungen',
          
          // Stats
          'our_professionalism': 'Unsere Professionalität',
          'professionalism': 'Professionalität',
          'completed_works': 'Abgeschlossene Arbeiten',
          'years_experience': 'Jahre Erfahrung',
          
          // About
          'about_title': 'Über Uns',
          'about_description': 'Ihr professionelles Studio für Audio- & Videoproduktion in Göppingen, Deutschland.',
          'about_founders': 'Gründer: Giuseppe D\'Ischia und Gino D\'Ischia',
          'about_history': 'MG Sound wurde vor über 20 Jahren in Italien gegründet und ist seit 3 Jahren erfolgreich in Göppingen, Deutschland, tätig.',
          'about_passion': 'Unsere Leidenschaft für Musik und audiovisuelle Produktion hat es uns ermöglicht, mit zahlreichen Künstlern zusammenzuarbeiten und Inhalte von höchster Qualität zu erstellen.',
          'work_with_us': 'Arbeiten Sie Mit Uns',
          'since_2003': 'Seit 2003',
          
          // Booking
          'book_appointment': 'Buchen Sie Ihren Termin',
          'book_description': 'Buchen Sie einfach online über unseren interaktiven Kalender. Wählen Sie den Tag und die Uhrzeit, die Sie für Ihren Service bevorzugen.',
          'availability_calendar': 'Verfügbarkeitskalender',
          
          // Services
          'services_title': 'Unsere Dienstleistungen',
          'services_description': 'Wir bieten eine breite Palette professioneller Dienstleistungen, um alle Ihre Audio- und Videoanforderungen zu erfüllen.',
          'service_recording': 'Aufnahme',
          'service_mastering': 'Mastering',
          'service_beats': 'Beat-Produktion',
          'service_video': 'Videoschnitt',
          'buy': 'Kaufen',
          'mastering_description': 'Perfektionieren Sie Ihren Track mit professionellem Mastering',
          'beats_description': 'Maßgeschneiderte Beats für Ihr Musikprojekt',
          'recording_description': 'Professionelle Studioaufnahme',
          'video_description': 'Professioneller Videoschnitt für Ihre Inhalte',
          
          // CTA
          'book_free_consultation': 'Buchen Sie jetzt Ihre kostenlose Beratung!',
          'cta_description': 'Entdecken Sie, was wir für Sie tun können, mit einem ersten kostenlosen und unverbindlichen Treffen. Wir besprechen Ihre Bedürfnisse und helfen Ihnen, die beste Lösung zu finden.',
          'book_consultation': 'Beratung Buchen',
          
          // Footer
          'footer_rights': 'Alle Rechte vorbehalten.',
          'footer_open': 'Nur nach Vereinbarung geöffnet',
          'footer_quick_links': 'Schnelllinks',
          'footer_free_consult': 'Kostenlose Beratung',
          'total_visits': 'Gesamtbesuche'
        }
      },
      en: {
        translation: {
          // Navbar
          'about': 'About Us',
          'booking': 'Bookings',
          'services': 'Services',
          'contact': 'Contact',
          
          // Hero
          'hero_title': 'Professional Recording Studio',
          'hero_subtitle': 'High-Quality Audio & Video Productions',
          'hero_cta': 'Book Now',
          'our_services': 'Our Services',
          
          // Stats
          'our_professionalism': 'Our Professionalism',
          'professionalism': 'Professionalism',
          'completed_works': 'Completed Works',
          'years_experience': 'Years of Experience',
          
          // About
          'about_title': 'About Us',
          'about_description': 'Your professional studio for Audio & Video production in Göppingen, Germany.',
          'about_founders': 'Founders: Giuseppe D\'Ischia and Gino D\'Ischia',
          'about_history': 'MG Sound was born in Italy over 20 years ago, and has been operating successfully in Göppingen, Germany for 3 years.',
          'about_passion': 'Our passion for music and audiovisual production has allowed us to collaborate with numerous artists and create high-quality content.',
          'work_with_us': 'Work With Us',
          'since_2003': 'Since 2003',
          
          // Booking
          'book_appointment': 'Book Your Appointment',
          'book_description': 'Easily book online through our interactive calendar. Choose the day and time you prefer for your service.',
          'availability_calendar': 'Availability Calendar',
          
          // Services
          'services_title': 'Our Services',
          'services_description': 'We offer a wide range of professional services to meet all your audio and video needs.',
          'service_recording': 'Recording',
          'service_mastering': 'Mastering',
          'service_beats': 'Beat Production',
          'service_video': 'Video Editing',
          'buy': 'Buy',
          'mastering_description': 'Perfect your track with professional mastering',
          'beats_description': 'Custom beats for your music project',
          'recording_description': 'Professional studio recording',
          'video_description': 'Professional video editing for your content',
          
          // CTA
          'book_free_consultation': 'Book your free consultation now!',
          'cta_description': 'Discover what we can do for you with a first free and no-obligation meeting. We discuss your needs and help you find the best solution.',
          'book_consultation': 'Book Consultation',
          
          // Footer
          'footer_rights': 'All rights reserved.',
          'footer_open': 'Open by appointment only',
          'footer_quick_links': 'Quick Links',
          'footer_free_consult': 'Free Consultation',
          'total_visits': 'Total visits'
        }
      }
    },
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;