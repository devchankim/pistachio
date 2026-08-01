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
│  ├─ layout.tsx            루트 레이아웃 · 메타데이터 · JSON-LD
│  ├─ page.tsx              홈 (Hero / About / Products / Contact)
│  ├─ globals.css           디자인 토큰(@theme) · 전역 스타일
│  ├─ not-found.tsx         404
│  ├─ icon.tsx              파비콘 (런타임 생성)
│  ├─ opengraph-image.tsx   OG 이미지 (런타임 생성)
│  ├─ sitemap.ts            sitemap.xml
│  └─ robots.ts             robots.txt
├─ components/              재사용 UI
│  ├─ Container.tsx         전역 가로 폭(1040px)
│  ├─ Section.tsx           섹션 껍데기(구분선·라벨·여백)
│  ├─ SiteHeader.tsx        sticky 헤더
│  ├─ SiteFooter.tsx        사업자 정보 푸터
│  ├─ ProductCard.tsx       제품 카드
│  └─ PistachioMark.tsx     브랜드 마크
└─ content/
   └─ site.ts               ★ 모든 텍스트/데이터
```

## 앞으로 키울 때

**모든 문구 수정은 `src/content/site.ts` 한 파일에서 끝납니다.** 컴포넌트는 데이터를 렌더링만 합니다.

- **제품 추가** — `products` 배열에 객체 하나 추가. 그리드가 `auto-fit`이라 개수가 늘어도 레이아웃이 알아서 맞춰집니다.
  - `status: "live"` — 실선 카드 + 초록 「서비스 중」 배지
  - `status: "upcoming"` — 점선 카드 + 회색 「준비 중」 배지
  - 제품이 출시되면 `status` 만 `"live"` 로 바꾸면 됩니다.
- **제품 상세 페이지** — `src/app/products/[slug]/page.tsx` 를 만들고, 해당 제품에 `href: "/products/markeon"` 을 넣으면 카드 전체가 링크가 됩니다 (`ProductCard`가 이미 분기 처리해 둠).
- **새 섹션** — `<Section id="..." eyebrow="...">` 로 감싸면 구분선·라벨·여백이 자동 적용됩니다. `nav` 배열에 항목을 추가하면 헤더 메뉴에도 나타납니다.
- **새 페이지** — `src/app/<경로>/page.tsx` 추가 후 `sitemap.ts` 의 `routes` 배열에 경로 추가.
- **블로그** — `@next/mdx` 를 붙이고 `src/app/blog/[slug]` 라우트를 추가하는 게 가장 짧은 경로입니다.
- **다국어** — `src/app/[lang]/` 로 옮기고 `site.ts` 를 `ko.ts` / `en.ts` 로 분리하면 됩니다. 지금 구조는 이 전환을 염두에 두고 텍스트를 전부 데이터로 빼두었습니다.
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
