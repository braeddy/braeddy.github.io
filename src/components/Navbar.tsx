'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { language, t, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  
  const languages = [
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'en', label: 'English', flag: '🇬🇧' }
  ];
  
  const handleLanguageChange = (lang: 'it' | 'en') => {
    if (lang !== language) {
      setLanguage(lang);
    }
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };
  
  // Chiudi il menu mobile quando si fa clic fuori da esso
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [mobileMenuOpen, mobileMenuRef]);
  
  // Chiudi il menu quando l'utente fa clic fuori da esso
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);
  
  return (
    <nav className="flex justify-between items-center w-full py-5 px-6 md:px-12 relative">
      <Link href="/" className="flex items-center">
        <Image 
          src="/Images/nobg.png" 
          alt="FF Logo" 
          width={80} 
          height={80} 
          priority
          className="transition-transform duration-300 hover:scale-105"
        />
      </Link>
      
      {/* Menu desktop */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium tracking-wide relative after:absolute after:bottom-0 after:left-0 after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">{t.home}</Link>
        <Link href="#projects" className="text-gray-600 hover:text-blue-600 font-medium tracking-wide relative after:absolute after:bottom-0 after:left-0 after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">{t.project}</Link>
        <Link href="#about" className="text-gray-600 hover:text-blue-600 font-medium tracking-wide relative after:absolute after:bottom-0 after:left-0 after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">{t.about}</Link>
      </div>
      
      {/* Menu hamburger per mobile */}
      <button 
        className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      <div className="hidden md:flex items-center">
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 border text-gray-600 ${
              dropdownOpen ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-200' : 'border-gray-300 bg-white hover:bg-gray-50'
            } rounded-md transition-all duration-200 shadow-sm text-sm font-medium focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-500`}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <span className="text-base">{language === 'it' ? '🇮🇹' : '🇬🇧'}</span>
            <span className="hidden sm:inline font-medium">{language === 'it' ? 'Italiano' : 'English'}</span>
            <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${dropdownOpen ? 'transform rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <div 
            className={`absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 transition-all duration-200 origin-top-right transform ${
              dropdownOpen 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
            role="menu"
            aria-orientation="vertical"
          >
              <div className="py-1.5" role="none">
                <div className="px-3 py-1.5 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  {t.languageSelector}
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code as 'it' | 'en')}
                    className={`flex items-center gap-2 px-4 py-2.5 text-left w-full hover:bg-gray-50 transition-colors ${
                      language === lang.code ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600'
                    }`}
                    role="menuitem"
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span className="font-medium text-sm">{lang.label}</span>
                    {language === lang.code && (
                      <svg className="w-4 h-4 ml-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
        </div>
      </div>
      
      {/* Menu mobile */}
      <div 
        ref={mobileMenuRef}
        className={`absolute top-full right-0 left-0 bg-white shadow-lg z-20 mt-2 p-5 rounded-b-lg transition-transform duration-300 transform origin-top ${
          mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        } md:hidden`}
      >
        <div className="flex flex-col space-y-4">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-blue-600 font-medium py-2 px-3 rounded-md hover:bg-blue-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.home}
          </Link>
          <Link 
            href="#projects" 
            className="text-gray-600 hover:text-blue-600 font-medium py-2 px-3 rounded-md hover:bg-blue-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.project}
          </Link>
          <Link 
            href="#about" 
            className="text-gray-600 hover:text-blue-600 font-medium py-2 px-3 rounded-md hover:bg-blue-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.about}
          </Link>
          
          <hr className="border-gray-200" />
          
          <div className="pt-1.5">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              {t.languageSelector}
            </p>
            <div className="flex flex-col space-y-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code as 'it' | 'en')}
                  className={`flex items-center gap-2 px-2.5 py-2 text-left rounded-md ${
                    language === lang.code ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span className="font-medium text-sm">{lang.label}</span>
                  {language === lang.code && (
                    <svg className="w-4 h-4 ml-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Pulsante Contattami rimosso */}
        </div>
      </div>
    </nav>
  );
}
