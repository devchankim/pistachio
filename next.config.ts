import type { NextConfig } from "next";

import { defaultLocale } from "./src/content/config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        // 루트는 기본 언어로 보냅니다. 언어 자동 감지가 필요해지면
        // Accept-Language를 읽는 middleware.ts로 교체하면 됩니다.
        source: "/",
        destination: `/${defaultLocale}`,
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
