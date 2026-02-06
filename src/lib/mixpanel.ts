import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

// Initialize Mixpanel only if token is present and we're in a browser environment
export const initMixpanel = () => {
  if (MIXPANEL_TOKEN && typeof window !== 'undefined') {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV === 'development',
      track_pageview: false, // We'll handle this manually for more control
      persistence: 'localStorage',
    });
    return true;
  }
  return false;
};

export const trackEvent = (eventName: string, props?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && MIXPANEL_TOKEN) {
    mixpanel.track(eventName, props);
  }
};

export const setPeopleProperties = (props: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && MIXPANEL_TOKEN) {
    mixpanel.people.set(props);
  }
};


export const identifyUser = (id: string) => {
  if (typeof window !== 'undefined' && MIXPANEL_TOKEN) {
    mixpanel.identify(id);
  }
};

export default mixpanel;
