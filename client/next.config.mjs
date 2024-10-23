import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.HOSTNAME || "127.0.0.1",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
