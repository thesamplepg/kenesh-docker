export const withoutLocale = (pathname) => {
  let path = pathname
    .split("/")
    .filter((path) => path !== "ru" && path !== "ky")
    .join("/");

  path = path.length ? path : "/";

  return path;
};

export const getImage = () =>
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  process.env.NEXT_PUBLIC_STRAPI_API_URL;
