import React from 'react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../constants';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-3">
            Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
            Side Projects
          </h3>
        </div>
        <a
          href={PERSONAL_INFO.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          View GitHub Profile
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col h-full bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      className="p-2.5 bg-white text-slate-900 rounded-full hover:bg-accent hover:text-white transition-colors shadow-lg"
                      title="View Project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-slate-800 border border-slate-700 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};