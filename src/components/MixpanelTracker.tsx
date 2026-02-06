'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initMixpanel, trackEvent, identifyUser, setPeopleProperties } from '@/lib/mixpanel';

export default function MixpanelTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Mixpanel
    initMixpanel();

    // Track initial page view with UTM parameters
    const utm_source = searchParams.get('utm_source');
    const utm_medium = searchParams.get('utm_medium');
    const utm_campaign = searchParams.get('utm_campaign');
    const utm_term = searchParams.get('utm_term');
    const utm_content = searchParams.get('utm_content');
    const email = searchParams.get('email');

    if (email) {
      identifyUser(email);
      setPeopleProperties({ $email: email });
    }

    trackEvent('Page View', {
      path: pathname,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      referrer: document.referrer,
    });

  }, [pathname, searchParams]);

  useEffect(() => {
    // Track scroll to Lead Form
    const leadForm = document.getElementById('lead-form');
    if (!leadForm) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent('Form Viewed', {
              section: 'lead-form',
              timestamp: new Date().toISOString(),
            });
            // Stop observing after firing once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Fire when 10% of the form is visible
    );

    observer.observe(leadForm);

    return () => observer.disconnect();
  }, []);

  return null;
}
