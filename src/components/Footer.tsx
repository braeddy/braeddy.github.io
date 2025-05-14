'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-gray-600 text-sm font-light tracking-wide">
      <p>{t.copyright} {currentYear} Francesco Frediani</p>
    </footer>
  );
}
