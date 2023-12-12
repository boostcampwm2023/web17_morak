import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // ACCESS_TOKEN을 넣은 채로 커밋하지 않도록 주의
    ACCESS_TOKEN: '',
  },
});
