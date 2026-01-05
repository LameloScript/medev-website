'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getConsent, setConsent, CookieConsent } from '@/lib/cookies';

// Traductions FR/EN
const translations = {
  fr: {
    title: 'Medev utilise des cookies',
    description: 'Nous utilisons des cookies pour personnaliser notre site web et nos offres selon vos intérêts, à des fins de mesure et d\'analyse. En utilisant notre site, vous acceptez notre utilisation des cookies.',
    acceptAll: 'Tout accepter',
    configure: 'Configurer',
    readMore: 'En savoir plus',
    savePreferences: 'Sauvegarder',
    configTitle: 'Paramètres des cookies',
    categories: {
      necessary: { name: 'Nécessaires', desc: 'Essentiels au fonctionnement du site' },
      analytics: { name: 'Analytiques', desc: 'Nous aident à améliorer le site' },
      marketing: { name: 'Marketing', desc: 'Publicités personnalisées' },
      preferences: { name: 'Préférences', desc: 'Mémorisent vos choix' },
    },
  },
  en: {
    title: 'Medev Uses Cookies',
    description: 'We use cookies to personalize our website and offering to your interests and for measurement and analytics purposes. By using our website and our products, you agree to our use of cookies.',
    acceptAll: 'Accept all',
    configure: 'Configure cookies',
    readMore: 'Read more',
    savePreferences: 'Save',
    configTitle: 'Cookie Settings',
    categories: {
      necessary: { name: 'Necessary', desc: 'Essential for the website to function' },
      analytics: { name: 'Analytics', desc: 'Help us improve our site' },
      marketing: { name: 'Marketing', desc: 'Personalized advertising' },
      preferences: { name: 'Preferences', desc: 'Remember your choices' },
    },
  },
};

type Lang = 'fr' | 'en';

export default function CookieConsentBanner() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [consent, setConsentState] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Déterminer la langue à partir du pathname
  const lang: Lang = pathname?.startsWith('/en') ? 'en' : 'fr';
  const t = translations[lang];

  useEffect(() => {
    const existingConsent = getConsent();
    if (!existingConsent) {
      setIsVisible(true);
    } else {
      setConsentState(existingConsent);
      if (existingConsent.analytics) {
        loadGTM();
      }
    }
  }, []);

  const loadGTM = () => {
    if (typeof window !== 'undefined' && !window.dataLayer) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-58DKGVRR';
      document.head.appendChild(script);
    }
  };

  const handleAcceptAll = () => {
    const newConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setConsent(newConsent);
    setConsentState(newConsent);
    loadGTM();
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    setConsent(consent);
    if (consent.analytics) {
      loadGTM();
    }
    setIsVisible(false);
    setShowConfig(false);
  };

  const toggleConsent = (type: keyof CookieConsent) => {
    if (type === 'necessary') return;
    setConsentState(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Header coloré */}
        <div className="bg-[#FF6300] h-24 flex items-end justify-center pb-0 relative">
          {/* Cookie SVG illustration */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Cookie body */}
              <circle cx="50" cy="50" r="40" fill="#E8943A" />
              <circle cx="50" cy="50" r="38" fill="#F5A742" />
              {/* Chocolate chips */}
              <circle cx="35" cy="40" r="6" fill="#5D3A1A" />
              <circle cx="55" cy="35" r="5" fill="#5D3A1A" />
              <circle cx="65" cy="50" r="4" fill="#5D3A1A" />
              <circle cx="45" cy="60" r="5" fill="#5D3A1A" />
              <circle cx="60" cy="65" r="4" fill="#5D3A1A" />
              {/* Cookie crumbs/texture */}
              <circle cx="30" cy="55" r="3" fill="#E8943A" />
              <circle cx="70" cy="40" r="2" fill="#E8943A" />
              {/* Face - eyes */}
              <circle cx="40" cy="48" r="4" fill="#2D1810" />
              <circle cx="56" cy="48" r="4" fill="#2D1810" />
              <circle cx="41" cy="47" r="1.5" fill="white" />
              <circle cx="57" cy="47" r="1.5" fill="white" />
              {/* Face - mouth */}
              <path d="M42 58 Q48 65 54 58" stroke="#2D1810" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Arms */}
              <path d="M15 50 Q10 45 12 38" stroke="#E8943A" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M85 45 Q92 42 88 35" stroke="#E8943A" strokeWidth="6" fill="none" strokeLinecap="round" />
              {/* Legs */}
              <ellipse cx="38" cy="88" rx="8" ry="6" fill="#E8943A" />
              <ellipse cx="62" cy="88" rx="8" ry="6" fill="#E8943A" />
            </svg>
          </div>
        </div>
        
        {/* Content */}
        <div className="pt-14 pb-6 px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            {t.title}
          </h2>
          
          {!showConfig ? (
            <>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t.description}
              </p>
              
              {/* Buttons */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors"
                >
                  {t.acceptAll}
                </button>
                <button
                  onClick={() => setShowConfig(true)}
                  className="px-6 py-2.5 bg-white text-[#FF6300] text-sm font-semibold rounded-full border-2 border-[#FF6300] hover:bg-orange-50 transition-colors"
                >
                  {t.configure}
                </button>
              </div>
              
              {/* Read more link */}
              <a 
                href={lang === 'fr' ? '/fr/politique-cookies' : '/en/cookie-policy'}
                className="text-sm text-gray-900 font-semibold underline underline-offset-2 hover:text-[#FF6300] transition-colors"
              >
                {t.readMore}
              </a>
            </>
          ) : (
            <>
              {/* Cookie categories */}
              <div className="space-y-3 mb-6 text-left">
                {/* Necessary - always on */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.categories.necessary.name}</p>
                    <p className="text-xs text-gray-500">{t.categories.necessary.desc}</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-0.5">
                    <div className="w-5 h-5 bg-white rounded-full shadow"></div>
                  </div>
                </div>
                
                {/* Analytics */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.categories.analytics.name}</p>
                    <p className="text-xs text-gray-500">{t.categories.analytics.desc}</p>
                  </div>
                  <button
                    onClick={() => toggleConsent('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-all px-0.5 ${
                      consent.analytics ? 'bg-[#FF6300] justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-5 h-5 bg-white rounded-full shadow"></div>
                  </button>
                </div>
                
                {/* Marketing */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.categories.marketing.name}</p>
                    <p className="text-xs text-gray-500">{t.categories.marketing.desc}</p>
                  </div>
                  <button
                    onClick={() => toggleConsent('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center transition-all px-0.5 ${
                      consent.marketing ? 'bg-[#FF6300] justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-5 h-5 bg-white rounded-full shadow"></div>
                  </button>
                </div>
                
                {/* Preferences */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.categories.preferences.name}</p>
                    <p className="text-xs text-gray-500">{t.categories.preferences.desc}</p>
                  </div>
                  <button
                    onClick={() => toggleConsent('preferences')}
                    className={`w-12 h-6 rounded-full flex items-center transition-all px-0.5 ${
                      consent.preferences ? 'bg-[#FF6300] justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-5 h-5 bg-white rounded-full shadow"></div>
                  </button>
                </div>
              </div>
              
              {/* Save button */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setShowConfig(false)}
                  className="px-6 py-2.5 text-gray-600 text-sm font-semibold hover:text-gray-900 transition-colors"
                >
                  ← {lang === 'fr' ? 'Retour' : 'Back'}
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-8 py-2.5 bg-[#FF6300] text-white text-sm font-semibold rounded-full hover:bg-orange-600 transition-colors"
                >
                  {t.savePreferences}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Déclaration TypeScript pour window.dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
