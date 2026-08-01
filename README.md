# Pistachio 웹사이트

소프트웨어 개발 스튜디오 피스타치오의 공식 사이트입니다.
`pistachio.ai.kr` 에 Vercel로 배포합니다.

## 게재 중인 제품

| 제품          | 상태     | 원본 저장소                  |
| ------------- | -------- | ---------------------------- |
| Daily5Verses  | 서비스 중 | `../daily5verses` (Flutter)  |
| Markeon       | 준비 중   | `../markeon` (Next.js)       |
| Colorling     | 준비 중   | `../colorling` (SwiftUI/iPad)|
| 사주팅        | 준비 중   | `../inyon` (Expo RN)         |
| Mantlepiece   | 준비 중   | `../mantlepiece` (SwiftUI/iPad) |

> Daily5Verses의 스토어 링크는 아직 확정 값이 없어 비워 두었습니다. `site.ts` 의 해당 항목에 `href` 를 넣으면 카드 전체가 링크로 동작합니다.

## 기술 스택

| 항목      | 선택                          | 이유                                            |
| --------- | ----------------------------- | ----------------------------------------------- |
| 프레임워크 | Next.js 15 (App Router)       | Vercel 네이티브, 페이지 추가가 파일 추가로 끝남 |
| 언어      | TypeScript                    | 콘텐츠 스키마를 타입으로 강제                    |
| 스타일    | Tailwind CSS v4               | 디자인 토큰을 `@theme` 한 곳에서 관리            |
| 폰트      | Pretendard Variable (CDN)     | 한글 가변 폰트, 동적 서브셋                      |
| 다국어    | App Router `[lang]` 세그먼트  | 라이브러리 없이 KO/EN 정적 생성                  |

## 실행

```bash
npm install
npm run dev
```

http://localhost:3000

```bash
npm run build      # 프로덕션 빌드
npm run typecheck  # 타입 검사
npm run lint       # ESLint
```

## 구조

```
src/
├─ app/
│  ├─ [lang]/                    언어별 라우트 (/ko, /en)
│  │  ├─ layout.tsx              루트 레이아웃 · 메타데이터 · hreflang · JSON-LD
│  │  ├─ page.tsx                홈 (Hero / About / Products / Contact)
│  │  ├─ not-found.tsx           404
│  │  └─ opengraph-image.tsx     OG 이미지 (언어별 사전 생성)
│  ├─ globals.css                디자인 토큰(@theme) · 전역 스타일
│  ├─ icon.tsx                   파비콘 (런타임 생성)
│  ├─ sitemap.ts                 sitemap.xml (hreflang 포함)
│  └─ robots.ts                  robots.txt
├─ components/                   재사용 UI
│  ├─ Container.tsx              전역 가로 폭(1040px)
│  ├─ Section.tsx                섹션 껍데기(구분선·라벨·여백)
│  ├─ SiteHeader.tsx             sticky 헤더
│  ├─ SiteFooter.tsx             사업자 정보 푸터
│  ├─ LanguageSwitcher.tsx       KO / EN 전환
│  ├─ ProductCard.tsx            제품 카드
│  └─ PistachioMark.tsx          브랜드 마크
└─ content/
   ├─ config.ts                  ★ 언어 무관 설정 (도메인·제품 slug·상태)
   └─ dictionaries/
      ├─ types.ts                번역 스키마 (누락 키를 컴파일 타임에 차단)
      ├─ ko.ts                   ★ 한국어 문구
      ├─ en.ts                   ★ 영어 문구
      └─ index.ts                getDictionary()
```

## 다국어 (KO / EN)

| 경로 | 내용 |
| ---- | ---- |
| `/` | `/ko` 로 리다이렉트 (307) |
| `/ko` | 한국어 (기본) |
| `/en` | 영어 |
| `/foo` | 404 (`dynamicParams = false`) |

- 두 언어 모두 빌드 시 정적 생성됩니다 (SSG).
- `<html lang>`, canonical, `hreflang` 대체 링크, OG locale, sitemap이 언어별로 자동 설정됩니다.
- **문구 수정은 `dictionaries/ko.ts` · `en.ts` 두 파일에서만** 합니다.

### 언어 추가하기

1. `config.ts` 의 `locales` 에 코드 추가 + `localeMeta` 에 항목 추가
2. `dictionaries/<코드>.ts` 작성
3. `dictionaries/index.ts` 의 `dictionaries` 에 등록

`Dictionary` 타입이 누락된 키를 잡아 주므로, 번역을 빠뜨리면 빌드가 실패합니다. 제품을 빠뜨린 경우에도 어떤 slug가 없는지 에러 메시지에 나옵니다.

> 지금은 `/` 를 기본 언어로 고정 리다이렉트합니다. 브라우저 언어 자동 감지가 필요해지면 `Accept-Language` 를 읽는 `middleware.ts` 로 교체하세요 (`next.config.ts` 의 `redirects` 제거).

## 앞으로 키울 때

**언어 무관 데이터는 `config.ts`, 문구는 `dictionaries/`.** 컴포넌트는 데이터를 렌더링만 합니다.

- **제품 추가** — `config.ts` 의 `products` 에 `{ slug, status }` 추가 → 각 사전의 `products.items` 에 이름·설명 추가. 그리드가 `auto-fit`이라 개수가 늘어도 레이아웃이 알아서 맞춰집니다.
  - `status: "live"` — 실선 카드 + 초록 「서비스 중 / Available」 배지
  - `status: "upcoming"` — 점선 카드 + 회색 「준비 중 / In progress」 배지
  - 제품이 출시되면 `status` 만 `"live"` 로 바꾸면 됩니다.
- **제품 상세 페이지** — `src/app/[lang]/products/[slug]/page.tsx` 를 만들고, 해당 제품에 `href` 를 넣으면 카드 전체가 링크가 됩니다 (`ProductCard`가 이미 분기 처리해 둠).
- **새 섹션** — `<Section id="..." eyebrow="...">` 로 감싸면 구분선·라벨·여백이 자동 적용됩니다. `config.ts` 의 `nav` 에 항목을 추가하고 각 사전의 `nav` 에 라벨을 넣으면 헤더 메뉴에도 나타납니다.
- **새 페이지** — `src/app/[lang]/<경로>/page.tsx` 추가 후 `sitemap.ts` 의 `routes` 배열에 경로 추가 (모든 언어에 대해 자동으로 항목이 생성됩니다).
- **블로그** — `@next/mdx` 를 붙이고 `src/app/[lang]/blog/[slug]` 라우트를 추가하는 게 가장 짧은 경로입니다.
- **디자인 토큰 변경** — `globals.css` 의 `@theme` 블록만 수정하면 전체에 반영됩니다.

## 배포

### 1. GitHub 푸시

```bash
git add -A && git commit -m "feat: 사이트 초기 구축" && git push -u origin main
```

### 2. Vercel 연결

[vercel.com/new](https://vercel.com/new) → `devchankim/pistachio` import → 설정 그대로 두고 Deploy.
Next.js는 자동 감지되며 별도 빌드 설정이 필요 없습니다. 이후 `main` 푸시마다 자동 배포됩니다.

`vercel.json` 에서 서버리스 리전을 서울(`icn1`)로 지정해 두었습니다.

### 3. 도메인 연결 (pistachio.ai.kr)

Vercel 프로젝트 → **Settings → Domains** 에서 `pistachio.ai.kr` 과 `www.pistachio.ai.kr` 을 추가합니다.

Vercel이 **화면에 정확한 DNS 레코드 값을 표시**하므로, 그 값을 그대로 도메인을 구매한 등록기관(가비아 등) DNS 관리에 입력하세요. 일반적으로 아래 두 개입니다.

| 타입  | 호스트 | 값                        |
| ----- | ------ | ------------------------- |
| A     | `@`    | Vercel이 안내하는 IP      |
| CNAME | `www`  | Vercel이 안내하는 도메인  |

> Vercel의 apex IP는 과거에 변경된 적이 있으니, 문서에 적힌 값이 아니라 **대시보드에 표시된 값**을 사용하세요.

DNS 전파(보통 수 분 ~ 수 시간) 후 SSL 인증서가 자동 발급됩니다.
`www` → apex 리다이렉트는 Domains 화면에서 apex를 Primary로 지정하면 자동 처리됩니다.

### 4. 도메인 연결 후 확인

- `src/content/site.ts` 의 `site.url` 이 실제 도메인과 일치하는지 (OG/canonical/sitemap 기준값)
- https://pistachio.ai.kr/sitemap.xml , /robots.txt 응답 확인
- Google Search Console에 사이트맵 등록
