/**
 * 사이트의 모든 텍스트/데이터는 이 파일에 모여 있습니다.
 * 컴포넌트는 이 데이터를 렌더링만 하므로, 내용 변경은 대부분 여기만 고치면 됩니다.
 */

export const site = {
  name: "Pistachio",
  nameKo: "피스타치오",
  /** 배포 도메인. OG/canonical/sitemap의 절대 URL 기준이 됩니다. */
  url: "https://pistachio.ai.kr",
  title: "Pistachio — 소프트웨어 개발 스튜디오",
  description:
    "소프트웨어 개발 스튜디오 피스타치오. 크리에이터와 사업자를 위한 도구를 만듭니다.",
  email: "contact@pistachio.ai.kr",
  locale: "ko_KR",
  lang: "ko",
} as const;

export const business = {
  /** 상호 */
  name: "피스타치오 (Pistachio)",
  /** 사업자등록번호 */
  registrationNumber: "227-17-38676",
  foundingYear: 2026,
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const nav: readonly NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Software Studio",
  /** 줄바꿈 위치를 디자인대로 고정하기 위해 배열로 관리합니다. */
  headline: ["작지만 단단한", "소프트웨어를 만듭니다"],
  subhead: "Software studio Pistachio",
  cta: { label: "문의하기", href: "#contact" },
} as const;

export const about = {
  eyebrow: "About",
  body: "피스타치오는 소프트웨어 개발과 컨설팅을 하는 작은 스튜디오입니다. 크리에이터와 사업자가 매일 쓰는 도구를 직접 만들고, 오래 쓸 수 있도록 다듬습니다. 화려한 기능보다 실제로 일이 되는 제품을 지향합니다.",
} as const;

/** live = 실제 상용 배포됨, upcoming = 출시 준비 중 */
export type ProductStatus = "live" | "upcoming";

export const productStatusLabel: Record<ProductStatus, string> = {
  live: "서비스 중",
  upcoming: "준비 중",
};

export type Product = {
  /** 카드 key 및 향후 /products/[slug] 라우트용 식별자 */
  slug: string;
  name: string;
  description: string;
  status: ProductStatus;
  /** 외부 서비스 링크 또는 내부 상세 페이지. 없으면 카드는 링크가 아닌 정적 블록으로 렌더링됩니다. */
  href?: string;
};

/**
 * 제품을 추가하려면 이 배열에 객체 하나만 넣으면 됩니다.
 * 그리드는 auto-fit이라 개수가 늘어도 레이아웃이 알아서 맞춰집니다.
 * 출시된 제품(live)을 먼저 두는 것을 권장합니다.
 */
export const products: readonly Product[] = [
  {
    slug: "daily5verses",
    name: "하루5절 (Daily5Verses)",
    description: "매일 다섯 절의 말씀과 묵상 기록",
    status: "live",
    // 스토어 출시 링크가 확정되면 추가하세요. 그러면 카드 전체가 링크가 됩니다.
    // href: "https://apps.apple.com/app/id...",
  },
  {
    slug: "markeon",
    name: "Markeon",
    description: "크리에이터를 위한 콘텐츠 제작 도구",
    status: "upcoming",
  },
  {
    slug: "colorling",
    name: "Colorling",
    description: "아이를 위한 iPad 색칠 놀이",
    status: "upcoming",
  },
  {
    slug: "sajuting",
    name: "사주팅",
    description: "이름과 생년월일로 보는 궁합, 그리고 사주 코치",
    status: "upcoming",
  },
  {
    slug: "mantlepiece",
    name: "Mantlepiece",
    description: "iPad를 액자로 바꾸는 디지털 포토 프레임",
    status: "upcoming",
  },
];

export const contact = {
  eyebrow: "Contact",
  email: site.email,
  note: "제휴, 개발 문의는 메일로 보내주세요.",
} as const;
