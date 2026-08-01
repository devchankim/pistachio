import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import "../globals.css";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  business,
  localeMeta,
  locales,
  site,
  type Locale,
} from "@/content/config";
import { getDictionary, isLocale } from "@/content/dictionaries";

/** locales에 없는 경로는 404 처리 (예: /foo) */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.title,
      template: `%s — ${site.name}`,
    },
    description: dict.meta.description,
    applicationName: site.name,
    alternates: {
      canonical: `/${lang}`,
      // 검색엔진에 언어별 대체 페이지를 알려 줍니다.
      languages: {
        ko: "/ko",
        en: "/en",
        "x-default": "/ko",
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: localeMeta[lang].ogLocale,
      url: `${site.url}/${lang}`,
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#faf7f0",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale: Locale = lang;
  const dict = getDictionary(locale);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    description: dict.meta.description,
    foundingDate: String(business.foundingYear),
  };

  return (
    <html lang={localeMeta[locale].htmlLang}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          // 정적으로 만든 객체만 직렬화하므로 사용자 입력이 섞이지 않습니다.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-pistachio focus:px-5 focus:py-2 focus:text-sm focus:font-bold focus:text-pistachio-ink"
        >
          {dict.a11y.skipToContent}
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader lang={locale} dict={dict} />
          <div className="flex-1">{children}</div>
          <SiteFooter dict={dict} />
        </div>
      </body>
    </html>
  );
}
