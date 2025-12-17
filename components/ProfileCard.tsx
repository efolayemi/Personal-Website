import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export const ProfileCard: React.FC = () => {
  return (
    <div className="animate-fade-in-up animate-delay-400 relative rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
      <figure className="relative overflow-hidden group">
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/328e46cc-1fda-4ae7-9a7a-2364d60fa512_1600w.png" 
          alt="Portrait of Folayemi Emoruwa" 
          className="w-full aspect-square group-hover:scale-105 transition-transform duration-700 object-cover object-top"
        />
        
        <figcaption className="absolute bottom-4 left-4">
          <a 
            href="mailto:emoruwafolayemi@gmail.com"
            className="flex items-center gap-2 text-xs font-medium font-inter text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-black/60 transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
            Open to new opportunities
          </a>
        </figcaption>
      </figure>

      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl font-geist font-extralight tracking-tight">
            Hello, I'm <span className="text-neutral-900">Folayemi Emoruwa</span>
          </h2>
          <p className="text-neutral-600 mt-2 leading-relaxed text-sm font-inter">
            Early Career Cloud, Infrastructure and Systems Engineer specializing in digital transformation.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <SocialButton 
            href="https://github.com/efolayemi/" 
            icon={<Github className="w-4 h-4" />} 
            label="GitHub" 
          />
          <SocialButton 
            href="https://www.linkedin.com/in/efolayemi/" 
            icon={<Linkedin className="w-4 h-4" />} 
            label="LinkedIn" 
          />
          <SocialButton 
            href="https://medium.com/@folayemiemoruwa" 
            icon={<MediumIcon />} 
            label="Medium" 
          />
        </div>

        <div className="border-t border-neutral-200 pt-6 space-y-3">
          <a href="mailto:emoruwafolayemi@gmail.com" className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transform hover:scale-[1.02] transition-all duration-200 shadow-sm font-inter text-sm">
            <Mail className="w-3 h-3" />
            Let's collaborate
          </a>
          <a href="#" className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-lg border border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-50 transition-all duration-200 font-inter text-sm">
            <Download className="w-3 h-3" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-lg hover:bg-neutral-100 transition-all duration-200 text-neutral-600 flex items-center justify-center"
    aria-label={label}
  >
    {icon}
  </a>
);

const MediumIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);