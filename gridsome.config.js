module.exports = {
  siteName: "Fishing.Life",
  siteDescription:
    "The longest fishing story ever told. A blog of my fishing trips, and my planning for fishing trips.",
  siteUrl: "https://gridsome-starter-bootstrap.loke.dev",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "BlogPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-72659574-10",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000,
      },
    },
  ],
  css: {
    loaderOptions: {
      scss: {},
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
};
