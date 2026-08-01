import type { MetadataRoute } from "next";

import { locales, site } from "@/content/config";

/**
 * 페이지가 늘어나면 이 배열에 경로를 추가하세요.
 * 각 경로는 모든 언어에 대해 항목이 생성되고, hreflang 대체 링크도 함께 붙습니다.
 */
const routes = [""];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: new URL(`/${locale}${route}`, site.url).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [
            alt,
            new URL(`/${alt}${route}`, site.url).toString(),
          ]),
        ),
      },
    })),
  );
}
