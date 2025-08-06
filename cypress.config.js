import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: false,
  viewportWidth: 1500,
  viewportHeight: 900,
  e2e: {
    setupNodeEvents(on, config) {},
    env: {
      hideXhr: true
    }
  },
});