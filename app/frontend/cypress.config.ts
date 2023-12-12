import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
  },
  env: {
    // ACCESS_TOKEN을 넣은 채로 커밋하지 않도록 주의
    ACCESS_TOKEN: '',
  },
});
