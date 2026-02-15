export default {
  testDir: './tests',
  retries: 0,
  timeout: 30_000,
  use: {
    baseURL: 'http://localhost:3000',
    headless: true
  }
};
