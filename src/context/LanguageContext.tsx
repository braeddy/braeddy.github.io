'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import it from '@/translations/it';
import en from '@/translations/en';

type Language = 'it' | 'en';
type Translations = typeof it;

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const translations = {
  it,
  en
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Inizializza con la lingua preferita dell'utente o italiano come predefinito
  const [language, setLanguageState] = useState<Language>('it');
  const t = translations[language];

  // Carica la lingua dall'localStorage all'avvio
  useEffect(() => {
    // Verifica se siamo nel browser e non nel server
    if (typeof window !== 'undefined') {
      try {
        const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
        if (savedLanguage && (savedLanguage === 'it' || savedLanguage === 'en')) {
          setLanguageState(savedLanguage);
        } else {
          // In alternativa, usa la lingua del browser se disponibile
          const browserLang = navigator.language.split('-')[0];
          if (browserLang === 'en' || browserLang === 'it') {
            setLanguageState(browserLang as Language);
          }
        }
      } catch (error) {
        console.error("Errore nell'accesso a localStorage:", error);
        // Usa italiano come fallback in caso di errore
      }
    }
  }, []);

  // Salva la lingua nelle preferenze quando cambia
  useEffect(() => {
    // Verifica se siamo nel browser e non nel server
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('preferredLanguage', language);
      } catch (error) {
        console.error("Errore nel salvataggio della lingua:", error);
      }
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState(prevLang => prevLang === 'it' ? 'en' : 'it');
  };
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
