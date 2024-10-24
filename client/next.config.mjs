import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        hostname: "127.0.0.1",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
