import React from 'react';
import { Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-2xl text-center z-10">
        <div className="mb-8 animate-fade-in-up">
          <img
            src="https://avatars.githubusercontent.com/u/5332350?s=400&v=4"
            alt={PERSONAL_INFO.name}
            loading="eager"
            className="w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-slate-700 shadow-xl object-cover mx-auto"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-white animate-fade-in-up delay-100">
          {PERSONAL_INFO.name}
        </h1>

        <p className="text-lg md:text-xl font-medium text-accent mb-8 animate-fade-in-up delay-200">
          {PERSONAL_INFO.title}
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed animate-fade-in-up delay-300">
          <p>
            With over 7 years of experience, including my time at <span className="text-white font-semibold">Vestiaire Collective</span>, I specialize in engineering robust, high-performance Android applications.
          </p>
          <p>
            I am passionate about delivering strong, scalable mobile solutions that solve real business challenges. From architecture to pixel-perfect UI, I focus on building powerful apps that users love.
          </p>
        </div>

        <div className="mt-10 animate-fade-in-up delay-500">
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-900 rounded-full font-medium transition-all hover:bg-slate-200 hover:scale-105"
          >
            <Linkedin size={18} />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};