/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      providers: {
        aws: {
          profile: input.stage === "main" ? "macknolan-prod" : "macknolan-dev",
        },
      },
      name: "www",
      removal: input?.stage === "main" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Astro("www", {
      domain: {
        name:
          $app.stage === "main"
            ? "macknolan.com"
            : `${$app.stage}.preview.macknolan.com`,
        // redirects: $app.stage === 'main' ? ['macknolan.dev', 'www.macknolan.dev'] : []
      },
    });
  },
});
