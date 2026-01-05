'use client';

import { useEffect, useState } from 'react';
import { getConsent, setConsent, CookieConsent } from '@/lib/cookies';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsentState] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

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

  const handleRejectAll = () => {
    const newConsent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setConsent(newConsent);
    setConsentState(newConsent);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    setConsent(consent);
    if (consent.analytics) {
      loadGTM();
    }
    setIsVisible(false);
  };

  const toggleConsent = (type: keyof CookieConsent) => {
    if (type === 'necessary') return; // Toujours requis
    setConsentState(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-gradient-to-t from-black/95 to-black/90 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icône Cookie */}
          <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-2xl shrink-0">
            🍪
          </div>
          
          {/* Texte principal */}
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg mb-1">
              Nous utilisons des cookies
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ce site utilise des cookies pour améliorer votre expérience et analyser notre trafic. 
              Vous pouvez personnaliser vos préférences ci-dessous.
              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="text-amber-400 hover:text-amber-300 ml-1 underline underline-offset-2"
              >
                {showDetails ? 'Masquer les détails' : 'En savoir plus'}
              </button>
            </p>
          </div>
          
          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto shrink-0">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-all duration-200"
            >
              Refuser
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2.5 text-sm font-medium text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 rounded-lg transition-all duration-200 shadow-lg shadow-amber-500/20"
            >
              Tout accepter
            </button>
          </div>
        </div>
        
        {/* Détails des cookies */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Cookies nécessaires */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">Nécessaires</span>
                  <div className="w-10 h-5 bg-green-500/30 rounded-full flex items-center justify-end px-0.5">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <p className="text-gray-400 text-xs">
                  Essentiels au fonctionnement du site. Toujours actifs.
                </p>
              </div>
              
              {/* Cookies analytics */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">Analytiques</span>
                  <button
                    onClick={() => toggleConsent('analytics')}
                    className={`w-10 h-5 rounded-full flex items-center transition-all duration-200 px-0.5 ${
                      consent.analytics ? 'bg-amber-500/30 justify-end' : 'bg-gray-600/30 justify-start'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-colors ${
                      consent.analytics ? 'bg-amber-500' : 'bg-gray-500'
                    }`}></div>
                  </button>
                </div>
                <p className="text-gray-400 text-xs">
                  Nous aident à comprendre comment vous utilisez le site.
                </p>
              </div>
              
              {/* Cookies marketing */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">Marketing</span>
                  <button
                    onClick={() => toggleConsent('marketing')}
                    className={`w-10 h-5 rounded-full flex items-center transition-all duration-200 px-0.5 ${
                      consent.marketing ? 'bg-amber-500/30 justify-end' : 'bg-gray-600/30 justify-start'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-colors ${
                      consent.marketing ? 'bg-amber-500' : 'bg-gray-500'
                    }`}></div>
                  </button>
                </div>
                <p className="text-gray-400 text-xs">
                  Utilisés pour des publicités personnalisées.
                </p>
              </div>
              
              {/* Cookies préférences */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">Préférences</span>
                  <button
                    onClick={() => toggleConsent('preferences')}
                    className={`w-10 h-5 rounded-full flex items-center transition-all duration-200 px-0.5 ${
                      consent.preferences ? 'bg-amber-500/30 justify-end' : 'bg-gray-600/30 justify-start'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-colors ${
                      consent.preferences ? 'bg-amber-500' : 'bg-gray-500'
                    }`}></div>
                  </button>
                </div>
                <p className="text-gray-400 text-xs">
                  Mémorisent vos préférences (thème, langue).
                </p>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-200"
              >
                Sauvegarder mes préférences
              </button>
            </div>
          </div>
        )}
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
