'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  imagePosition?: 'left' | 'right';
  link: string;
  externalUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  imagePath, 
  imagePosition = 'right',
  link,
  externalUrl
}: ProjectCardProps) {
  const { t } = useLanguage();
  
  return (
    <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 my-12`}>
      <div className="md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">{title}</h3>
        <p className="text-gray-700 mb-8 font-light leading-relaxed">{description}</p>
        <Link 
          href={externalUrl || link}
          target={externalUrl ? "_blank" : undefined}
          rel={externalUrl ? "noopener noreferrer" : undefined}
          className="flex items-center text-blue-700 hover:text-blue-900 transition-all duration-300 font-medium tracking-wide text-lg group"
        >
          {t.findMore} <span className="ml-2 transform group-hover:translate-x-1 group-hover:translate-y--1 transition-transform duration-300">↗</span>
        </Link>
      </div>
      
      <div className="md:w-1/2">
        <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          {externalUrl ? (
            <Link href={externalUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Image 
                src={imagePath} 
                alt={title} 
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
              />
              <span className="absolute bottom-3 right-3 bg-blue-700 text-white text-xs px-3 py-1.5 rounded shadow-sm font-medium transform transition-all duration-300 hover:bg-blue-800 hover:shadow-md">
                {t.visitSite}
              </span>
            </Link>
          ) : (
            <Image 
              src={imagePath} 
              alt={title} 
              fill
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
