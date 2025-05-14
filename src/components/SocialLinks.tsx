'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function SocialLinks() {
  const { t } = useLanguage();
  
  // Definizione dei social media con tutte le loro proprietà
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      color: 'bg-blue-700'
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      color: 'bg-gray-800'
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 tracking-tight">{t.socialTitle}</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto font-light text-lg">
          {t.socialDescription}
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {socialLinks.map((social, index) => (
            <Link 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visita il mio profilo ${social.name}`}
              className="group flex flex-col items-center"
            >
              <div className={`p-5 rounded-full ${social.color} shadow-md transform transition-all duration-300 hover:scale-110 group-hover:shadow-lg flex items-center justify-center`}>
                <span className="text-white">{social.icon}</span>
              </div>
              <span className="mt-3 text-gray-700 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {social.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
