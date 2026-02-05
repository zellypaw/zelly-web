import { describe, it, expect } from 'vitest';
import { NOTICES } from '../notices';

describe('Notices Library', () => {
  it('should have a list of notices', () => {
    expect(NOTICES.length).toBeGreaterThan(0);
  });

  it('each notice should have required fields', () => {
    NOTICES.forEach(notice => {
      expect(notice.id).toBeDefined();
      expect(notice.title).toBeDefined();
      expect(notice.date).toBeDefined();
    });
  });
});
