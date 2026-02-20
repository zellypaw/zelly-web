import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

let isInitialized = false;

// Initialize Mixpanel only if token is present and we're in a browser environment
export const initMixpanel = () => {
  if (isInitialized) return true;
  
  if (MIXPANEL_TOKEN && typeof window !== 'undefined') {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV === 'development',
      track_pageview: false, // We'll handle this manually for more control
      persistence: 'localStorage',
    });
    isInitialized = true;
    return true;
  }
  return false;
};

export const trackEvent = (eventName: string, props?: Record<string, unknown>) => {
  if (initMixpanel()) {
    mixpanel.track(eventName, {
      ...props,
      platform: 'web',
    });
  }
};

export const setPeopleProperties = (props: Record<string, unknown>) => {
  if (initMixpanel()) {
    mixpanel.people.set(props);
  }
};

export const identifyUser = (id: string) => {
  if (initMixpanel()) {
    mixpanel.identify(id);
  }
};

export default mixpanel;
