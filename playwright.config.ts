import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  // 전체 테스트 세션 타임아웃은 서버 기동을 고려해 15초 유지
  timeout: 15 * 1000,
  use: {
    baseURL: 'http://localhost:3000',
    // 유저 액션 및 내비게이션이 1초를 넘으면 즉시 실패
    actionTimeout: 1000,
    navigationTimeout: 1000,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npx serve out -p 3000 --config ../serve.json',
    port: 3000,
    reuseExistingServer: !process.env.CI,
    timeout: 10 * 1000,
  },
});
