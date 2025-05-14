'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

export default function LanguageTransition() {
  const { language } = useLanguage();
  const [showTransition, setShowTransition] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  const [prevLanguage, setPrevLanguage] = useState('');
  
  // Imposta lo stato iniziale dopo il primo rendering
  useEffect(() => {
    if (initialRender) {
      setPrevLanguage(language);
      setInitialRender(false);
    }
  }, [initialRender, language]);
  
  // Mostra la transizione solo quando la lingua è cambiata, non all'avvio iniziale
  useEffect(() => {
    if (!initialRender && prevLanguage !== language) {
      // Mostra la transizione
      setShowTransition(true);
      
      // Nascondi lo sfondo di transizione dopo 700ms
      const timer = setTimeout(() => {
        setShowTransition(false);
      }, 700);
      
      setPrevLanguage(language);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [language, prevLanguage, initialRender]);
  
  // Non mostrare nulla all'avvio iniziale o quando la transizione è nascosta
  if (initialRender || !showTransition) return null;
  
  return (
    <div className="fixed inset-0 bg-blue-500 bg-opacity-10 pointer-events-none z-[9999] transition-opacity duration-700 flex items-center justify-center">
      <div className="p-4 rounded-full bg-blue-500 shadow-lg transform animate-ping">
        <span className="text-3xl">{language === 'it' ? '🇮🇹' : '🇬🇧'}</span>
      </div>
    </div>
  );
}
