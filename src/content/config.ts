/**
 * 언어와 무관한 설정값. 번역이 필요한 문구는 content/dictionaries/ 에 있습니다.
 */

export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ko";

/** <html lang> 및 OG locale 에 쓰이는 값 */
export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; label: string }> = {
  ko: { htmlLang: "ko", ogLocale: "ko_KR", label: "한국어" },
  en: { htmlLang: "en", ogLocale: "en_US", label: "English" },
};

export const site = {
  name: "Pistachio",
  /** 배포 도메인. OG/canonical/sitemap의 절대 URL 기준이 됩니다. */
  url: "https://pistachio.ai.kr",
  email: "contact@pistachio.ai.kr",
} as const;

export const business = {
  /** 사업자등록번호 (언어 무관) */
  registrationNumber: "227-17-38676",
  foundingYear: 2026,
} as const;

export type NavItem = { key: "about" | "products" | "contact"; href: string };

/** 같은 페이지 내 앵커라 언어와 무관합니다. 라벨은 사전에서 가져옵니다. */
export const nav: readonly NavItem[] = [
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "contact", href: "#contact" },
];

/** live = 실제 상용 배포됨, upcoming = 출시 준비 중 */
export type ProductStatus = "live" | "upcoming";

/**
 * 제품의 언어 무관 정보. 이름/설명은 각 사전의 products.items 에 있습니다.
 * `as const` 라서 slug 목록이 타입으로 추출되고,
 * 사전에서 제품 하나라도 빠뜨리면 컴파일 에러가 납니다.
 */
export const products = [
  { slug: "daily5verses", status: "live" },
  { slug: "markeon", status: "upcoming" },
  { slug: "colorling", status: "upcoming" },
  { slug: "sajuting", status: "upcoming" },
  { slug: "mantlepiece", status: "upcoming" },
] as const satisfies readonly {
  slug: string;
  status: ProductStatus;
  /** 외부 서비스 링크 또는 상세 페이지. 있으면 카드 전체가 링크가 됩니다. */
  href?: string;
}[];

export type ProductSlug = (typeof products)[number]["slug"];
