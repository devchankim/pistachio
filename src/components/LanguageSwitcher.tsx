import Link from "next/link";

import { localeMeta, locales, type Locale } from "@/content/config";

/** KO / EN 토글. 언어를 추가하면 자동으로 항목이 늘어납니다. */
export function LanguageSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  return (
    <nav aria-label={label}>
      <ul className="flex items-center gap-1.5 text-[13px] font-semibold">
        {locales.map((locale, index) => {
          const isCurrent = locale === current;

          return (
            <li key={locale} className="flex items-center gap-1.5">
              {index > 0 && (
                <span aria-hidden="true" className="text-line-soft">
                  /
                </span>
              )}
              <Link
                href={`/${locale}`}
                hrefLang={localeMeta[locale].htmlLang}
                aria-current={isCurrent ? "true" : undefined}
                className={
                  isCurrent
                    ? "text-ink"
                    : "text-muted-faint transition-colors hover:text-ink"
                }
              >
                {locale.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
