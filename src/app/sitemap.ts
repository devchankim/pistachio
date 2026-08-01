import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/**
 * 페이지가 늘어나면 이 배열에 경로를 추가하세요.
 * (라우트가 많아지면 파일 시스템을 훑어 자동 생성하도록 바꾸면 됩니다.)
 */
const routes = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
