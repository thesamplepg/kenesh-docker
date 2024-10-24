import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "*",
        port: "1337",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
