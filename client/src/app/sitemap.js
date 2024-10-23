const routes = [
  "",
  "/news",
  "/fractions",
  "/deputies",
  "/chairmans",
  "/pages",
  "/bills",
];

export default function sitemap() {
  const sitemap = [];

  routes.forEach((route) => {
    const routeMapKg = {
      url: process.env.URL + "/ky" + route,
      lastModified: new Date(),
      changeFrequency: "montly",
      priority: 1,
    };

    const routeMapRu = {
      url: process.env.URL + "/ru" + route,
      lastModified: new Date(),
      changeFrequency: "montly",
      priority: 1,
    };

    sitemap.push(routeMapKg);
    sitemap.push(routeMapRu);
  });

  return sitemap;
}
