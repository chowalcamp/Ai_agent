const nextConfig = {
  images: {
    domains: [
      "assets.nflxext.com",
      "occ-0-737-136.1.nflxso.net",
      "i.ytimg.com",
    ],
  },
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
  // src 디렉토리 설정
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      ignored: ["**/node_modules", "**/.next/**", "**/build/**"],
    };
    return config;
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
