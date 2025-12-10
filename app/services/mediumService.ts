import { MediumResponse } from '../types';

const RSS2JSON_BASE = 'https://api.rss2json.com/v1/api.json';

export const fetchMediumArticles = async (username: string): Promise<MediumResponse | null> => {
  try {
    // Medium RSS feed URL
    const rssUrl = `https://medium.com/feed/@${username}`;

    // Using rss2json to convert RSS XML to JSON for frontend consumption without CORS issues
    const response = await fetch(`${RSS2JSON_BASE}?rss_url=${encodeURIComponent(rssUrl)}`);

    if (!response.ok) {
      throw new Error('Failed to fetch Medium articles');
    }

    const data: MediumResponse = await response.json();

    if (data.status !== 'ok') {
      console.warn('Medium feed status not ok:', data);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return null;
  }
};