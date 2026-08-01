import type { ProductSlug, ProductStatus } from "@/content/config";

/**
 * 모든 언어가 만족해야 하는 번역 스키마.
 * 여기에 키를 추가하면 ko.ts / en.ts 양쪽 모두에서 컴파일 에러가 나므로
 * 한쪽 언어만 갱신하고 넘어가는 실수를 막아 줍니다.
 */
export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: Record<"about" | "products" | "contact", string>;
  a11y: {
    skipToContent: string;
    mainMenu: string;
    languageSwitcher: string;
  };
  hero: {
    eyebrow: string;
    /** 줄바꿈 위치를 고정하기 위해 배열로 관리합니다. */
    headline: readonly string[];
    subhead: string;
    cta: string;
  };
  about: {
    eyebrow: string;
    body: string;
  };
  products: {
    eyebrow: string;
    status: Record<ProductStatus, string>;
    /** 제품을 추가하면 모든 언어에서 이 항목을 채우도록 타입이 강제합니다. */
    items: Record<ProductSlug, { name: string; description: string }>;
  };
  contact: {
    eyebrow: string;
    note: string;
  };
  footer: {
    businessNameLabel: string;
    businessNameValue: string;
    registrationNumberLabel: string;
    emailLabel: string;
    rights: string;
  };
  notFound: {
    title: string;
    body: string;
    cta: string;
  };
};
