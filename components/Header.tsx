import React from 'react';
import { Cloud, MapPin, Clock } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 flex flex-col items-center">
      <span className="animate-fade-in-up inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 text-sm font-medium text-neutral-700">
        <Cloud className="w-3 h-3" />
        Cloud & Infrastructure
      </span>

      <div className="animate-fade-in-up animate-delay-100 text-center max-w-5xl space-y-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-geist font-bold uppercase leading-tight tracking-tighter text-neutral-900">
          Folayemi Emoruwa
        </h1>
        <p className="text-xl sm:text-2xl font-light text-neutral-600 font-inter">
          Early Cloud, Infrastructure and Systems Engineer
        </p>
      </div>

      <p className="animate-fade-in-up animate-delay-200 max-w-2xl text-center text-neutral-600 text-lg mt-8 leading-relaxed font-inter">
        Architecting robust digital infrastructure and scalable cloud solutions. Focusing on reliability, security, and systems optimization.
      </p>

      <div className="animate-fade-in-up animate-delay-300 flex flex-wrap items-center justify-center gap-4 mt-8">
        <div className="flex items-center gap-2 text-sm text-neutral-500 font-inter">
          <MapPin className="w-3 h-3" />
          Leicester, UK
        </div>
        <div className="w-1 h-1 rounded-full bg-neutral-300"></div>
        <div className="flex items-center gap-2 text-sm text-neutral-500 font-inter">
          <Clock className="w-3 h-3" />
          GMT
        </div>
        <div className="w-1 h-1 rounded-full bg-neutral-300"></div>
        <a 
          href="mailto:emoruwafolayemi@gmail.com" 
          className="flex items-center gap-2 text-sm text-neutral-900 font-inter hover:text-neutral-600 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse"></span>
          Available for Projects and Job Opportunities
        </a>
      </div>
    </header>
  );
};