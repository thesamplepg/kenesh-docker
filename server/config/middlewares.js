module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  {
    name: "strapi::cors",
    config: {
      origin: [
        process.env.CLIENT_ORIGIN || "http://localhost:3000",
        process.env.SERVER_ORIGIN || "http://127.0.0.1:1337",
      ],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
