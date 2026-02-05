import { describe, it, expect } from 'vitest';

describe('Environment Variables Validation', () => {
  it('NEXT_PUBLIC_API_BASE_URL should not be localhost in production environment', () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    
    // If we are running in CI or explicitly check for production-like settings
    if (process.env.NODE_ENV === 'production' || process.env.CI) {
      expect(apiUrl).toBeDefined();
      expect(apiUrl).not.toContain('localhost');
      expect(apiUrl).not.toContain('127.0.0.1');
      console.log('✅ API Base URL validated:', apiUrl);
    }
  });

  it('should have all required public environment variables', () => {
    const requiredVars = [
      'NEXT_PUBLIC_TURNSTILE_SITE_KEY',
      'NEXT_PUBLIC_API_BASE_URL',
      'NEXT_PUBLIC_NAVER_MAP_CLIENT_ID'
    ];

    requiredVars.forEach(varName => {
      expect(process.env[varName]).toBeDefined();
      expect(process.env[varName]).not.toBe('');
    });
  });
});
