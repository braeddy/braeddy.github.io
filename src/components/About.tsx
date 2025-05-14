'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-20 text-center tracking-tight uppercase">{t.aboutTitle}</h2>
        
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="md:w-2/5">
            <div className="relative w-[260px] h-[260px] mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src="/Images/avatar.png"
                alt="Francesco Frediani" 
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">Francesco Frediani</h3>
            <p className="text-gray-700 font-light leading-relaxed mb-5 text-lg">
              {t.aboutMe1}
            </p>
            <p className="text-gray-700 font-light leading-relaxed mb-5 text-lg">
              {t.aboutMe2}
            </p>
            <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
              {t.aboutMe3}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/cv" 
                className="bg-blue-600 text-gray-100 px-8 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 font-medium tracking-wide text-center text-lg shadow-md hover:shadow-lg hover:-translate-y-1 transform"
              >
                {t.downloadCV}
              </Link>                <Link 
                href="mailto:francesco.frediani@icloud.com" 
                className="border border-gray-300 px-8 py-3 rounded-md hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 font-medium tracking-wide text-center text-lg text-gray-600 hover:shadow-md hover:-translate-y-1 transform"
              >
                {t.contactMe}
              </Link>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-10 tracking-tight text-center">{t.myProfile}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-xl shadow-md transform hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-default hover:bg-gradient-to-b hover:from-white hover:to-blue-50">
            <h4 className="font-semibold text-xl mb-6 text-blue-600">{t.skills}</h4>
            <ul className="list-disc list-inside text-gray-700 font-light space-y-3 text-lg">
              <li>HTML, CSS, JavaScript</li>
              <li>React, Next.js</li>
              <li>Tailwind CSS</li>
              <li>Node.js, Express</li>
              <li>Python</li>
            </ul>
          </div>
          
          <div className="bg-white p-10 rounded-xl shadow-md transform hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-default hover:bg-gradient-to-b hover:from-white hover:to-blue-50">
            <h4 className="font-semibold text-xl mb-6 text-blue-600">{t.education}</h4>
            <ul className="text-gray-700 font-light space-y-6 text-lg">
              <li>
                <p className="font-medium">{t.university}</p>
                <p>{t.degree}</p>
                <p className="text-gray-500 text-sm mt-1">2023-Presente</p>
              </li>
              <li>
                <p className="font-medium">{t.highSchool}</p>
                <p>{t.diploma}</p>
                <p className="text-gray-500 text-sm mt-1">2018-2023</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-10 rounded-xl shadow-md transform hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-default hover:bg-gradient-to-b hover:from-white hover:to-blue-50">
            <h4 className="font-semibold text-xl mb-6 text-blue-600">{t.languages}</h4>
            <ul className="text-gray-700 font-light space-y-6 text-lg">
              <li>
                <p className="font-medium">{t.italian}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                </div>
                <p className="text-gray-500 text-sm mt-1">{t.nativeLanguage}</p>
              </li>
              <li>
                <p className="font-medium">{t.english}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-blue-600 h-2.5 rounded-full w-4/5"></div>
                </div>
                <p className="text-gray-500 text-sm mt-1">{t.advancedLevel}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
