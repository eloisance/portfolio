import React from 'react';
import { SERVICES } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">About Me</h2>
        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Bridging the gap between design and engineering.</h3>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            With over 6 years of experience in the digital landscape, I have honed my skills in both product design and frontend development. This hybrid approach allows me to not only design beautiful interfaces but also understand the technical constraints and possibilities needed to bring them to life.
          </p>
          <p>
            I believe that great software is born from the intersection of empathy for the user, clean aesthetics, and robust code. Whether I'm sketching wireframes or debugging React components, my goal is always the same: to create seamless, enjoyable experiences.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:shadow-lg hover:border-accent/20 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
              <service.icon size={24} />
            </div>
            <h4 className="text-lg font-bold mb-2">{service.title}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};