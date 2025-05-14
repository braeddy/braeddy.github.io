'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          {t.greeting} <span className="text-blue-600">Francesco</span>,
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10 font-light">
          {t.role} <span className="inline-block">📍</span>
        </p>
        
        <Link 
          href="#projects" 
          className="bg-blue-600 text-gray-100 px-8 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 inline-block font-medium tracking-wide text-lg shadow-md hover:shadow-lg hover:-translate-y-1 transform hover:scale-105"
        >
          {t.cta}
        </Link>
      </div>
      
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-blue-400 rounded-full overflow-hidden">
          <Image 
            src="/Images/avatar_nobg.png" 
            alt="Francesco avatar" 
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
