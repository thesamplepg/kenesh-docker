export const withoutLocale = (pathname) => {
  let path = pathname
    .split("/")
    .filter((path) => path !== "ru" && path !== "ky")
    .join("/");

  path = path.length ? path : "/";

  return path;
};
