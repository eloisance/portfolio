import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

export const Experience: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-3">
          Experience
        </h2>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
          Career Timeline
        </h3>
      </div>

      <div className="space-y-12">
        {EXPERIENCE_DATA.map((item, index) => (
          <div key={item.id} className="relative group">
            {/* Connector Line (except for last item) */}
            {index !== EXPERIENCE_DATA.length - 1 && (
              <div className="absolute left-[7px] top-10 bottom-[-48px] w-[2px] bg-slate-800 group-hover:bg-slate-700 transition-colors" />
            )}

            <div className="flex gap-6 md:gap-10">
              {/* Timeline Node */}
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-4 h-4 rounded-full border-[3px] border-slate-900 bg-slate-700 ring-1 ring-slate-700 group-hover:bg-accent group-hover:ring-accent/30 transition-all duration-300 shadow-sm" />
              </div>

              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {item.role}
                  </h4>
                  <span className="text-sm font-medium font-mono text-gray-500 tabular-nums">
                    {item.period}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-300 mb-4">
                  {item.company}{' '}
                  <span className="text-slate-700 mx-2">
                    •
                  </span>{' '}
                  <span className="text-gray-500 font-normal">
                    {item.location}
                  </span>
                </div>

                <ul className="space-y-2">
                  {item.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-[1px] before:bg-slate-700"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};