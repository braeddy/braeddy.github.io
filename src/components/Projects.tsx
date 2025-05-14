'use client';

import ProjectCard from './ProjectCard';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: 'Dessert & co',
      description: t.dessertDescription,
      imagePath: '/Images/desserteco.png',
      imagePosition: 'left',
      link: '/projects/dessert-co',
      externalUrl: 'https://dessert-co.vercel.app'
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold mb-16 text-center tracking-tight uppercase">{t.projectsTitle}</h2>
      
      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            imagePath={project.imagePath}
            imagePosition={project.imagePosition as 'left' | 'right'}
            link={project.link}
            externalUrl={project.externalUrl}
          />
        ))}
      </div>
    </section>
  );
}
