"use client";

import React, { useEffect, useState } from 'react';
import { fetchMediumArticles } from '../services/mediumService';
import { MediumArticle } from '../types';
import { ArrowUpRight, BookOpen } from 'lucide-react';

interface MediumFeedProps {
  username: string;
}

export const MediumFeed: React.FC<MediumFeedProps> = ({ username }) => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadArticles = async () => {
      try {
        const data = await fetchMediumArticles(username);
        if (!mounted) return;

        if (data && data.items) {
          const validArticles = data.items
            .filter((item) => item.categories.length > 0)
            .slice(0, 3);
          setArticles(validArticles);
        } else {
          setError(true);
        }
      } catch (e) {
        if (mounted) setError(true);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadArticles();

    return () => {
      mounted = false;
    };
  }, [username]);

  const createSnippet = (html: string): string => {
    try {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const text = doc.body.textContent || '';
      const cleanText = text.replace(/[\n\r]+/g, ' ').trim();
      return cleanText.length > 120
        ? `${cleanText.substring(0, 120)}...`
        : cleanText;
    } catch (e) {
      return '';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-3">
            Writing
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
            Latest Articles
          </h3>
        </div>
        <a
          href={`https://medium.com/@${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          Read more on Medium
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="animate-pulse flex flex-col h-full bg-slate-900 rounded-3xl p-6 border border-slate-800"
            >
              <div className="h-4 w-24 bg-slate-800 rounded mb-4" />
              <div className="h-6 bg-slate-800 rounded w-full mb-2" />
              <div className="h-6 bg-slate-800 rounded w-2/3 mb-4" />
              <div className="flex-grow" />
              <div className="h-4 bg-slate-800 rounded w-full mb-2" />
              <div className="h-4 bg-slate-800 rounded w-full" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-16 bg-slate-900/50 rounded-3xl border border-slate-800">
          <BookOpen className="mx-auto h-12 w-12 text-slate-700 mb-4" />
          <p className="text-gray-500 mb-4">Unable to load feed directly</p>
          <a
            href={`https://medium.com/@${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline"
          >
            Visit Medium Profile
          </a>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-xs font-mono text-gray-500 mb-4">
                {formatDate(article.pubDate)}
              </div>

              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors leading-tight">
                {article.title}
              </h4>

              <div className="flex flex-wrap gap-2 mb-6">
                {article.categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] uppercase tracking-wider font-semibold text-gray-500"
                  >
                    #{cat}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-6 flex-grow">
                {createSnippet(article.description)}
              </p>

              <div className="flex items-center text-white text-sm font-semibold mt-auto group-hover:translate-x-1 transition-transform">
                Read Article{' '}
                <ArrowUpRight
                  size={14}
                  className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};