import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    // custom support file location for component tests
    supportFile: "cypress/support/component/supportFile.tsx",
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: {
        module: {
          rules: [
            {
              test: /\.(ts|tsx)$/,
              loader: "ts-loader",
              options: { transpileOnly: true },
            },
          ],
        },
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
      },
    },
  },
});
