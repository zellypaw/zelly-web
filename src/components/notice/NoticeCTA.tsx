'use client';

import React, { useEffect, useState } from 'react';

interface NoticeCTAProps {
  url: string;
  label: string;
}

export default function NoticeCTA({ url, label }: NoticeCTAProps) {
  const [finalUrl, setFinalUrl] = useState(url);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      // 1. Get or generate ID from localStorage
      let mid = localStorage.getItem('zelly_mixpanel_id');
      if (!mid) {
        // Create a unique ID: web_ + 8 chars random string
        const randomStr = Math.random().toString(36).substring(2, 10);
        mid = `web_${randomStr}`;
        localStorage.setItem('zelly_mixpanel_id', mid);
      }

      // 2. Replace placeholder in URL
      // If the URL contains {mixpanel_id}, replace it with the stored ID
      const updatedUrl = url.replace('{mixpanel_id}', mid);
      setFinalUrl(updatedUrl);
    } catch (error) {
      console.warn('Failed to access localStorage:', error);
      // Fallback: use original URL if localStorage is blocked
      setFinalUrl(url.replace('{mixpanel_id}', 'web_anonymous'));
    }
  }, [url]);

  return (
    <div className="mt-10 md:mt-14">
      <a 
        href={finalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-2xl hover:bg-zelly-pink transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-900/10 hover:shadow-zelly-pink/20"
      >
        {label}
      </a>
    </div>
  );
}
