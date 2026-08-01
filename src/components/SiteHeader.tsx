import Link from "next/link";

import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { PistachioMark } from "@/components/PistachioMark";
import { nav, site, type Locale } from "@/content/config";
import type { Dictionary } from "@/content/dictionaries";

export function SiteHeader({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-cream/[0.86] backdrop-blur-[10px]">
      {/*
        아주 좁은 화면(~320px)에서는 로고 + 메뉴 + 언어 전환이 한 줄에 안 들어갑니다.
        flex-wrap으로 오른쪽 그룹을 다음 줄로 흘려보내 잘림 없이 처리합니다.
      */}
      <Container className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 py-3 sm:flex-nowrap sm:gap-x-4 sm:py-[18px]">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-[9px] text-[17px] font-extrabold tracking-[-0.02em] text-ink transition-opacity hover:opacity-70 sm:text-[19px]"
        >
          <PistachioMark size={13} />
          {site.name}
        </Link>

        <div className="ml-auto flex items-center gap-2.5 sm:gap-6">
          <nav aria-label={dict.a11y.mainMenu}>
            <ul className="flex items-center gap-3 text-[13px] font-medium sm:gap-7 sm:text-[15px]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    {dict.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span aria-hidden="true" className="hidden h-3.5 w-px bg-line sm:block" />

          <LanguageSwitcher
            current={lang}
            label={dict.a11y.languageSwitcher}
          />
        </div>
      </Container>
    </header>
  );
}
