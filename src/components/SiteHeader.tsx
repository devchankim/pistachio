import Link from "next/link";

import { Container } from "@/components/Container";
import { PistachioMark } from "@/components/PistachioMark";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-cream/[0.86] backdrop-blur-[10px]">
      <Container className="flex items-center justify-between gap-4 py-4 sm:py-[18px]">
        <Link
          href="#top"
          className="flex items-center gap-[9px] text-[17px] font-extrabold tracking-[-0.02em] text-ink transition-opacity hover:opacity-70 sm:text-[19px]"
        >
          <PistachioMark size={13} />
          {site.name}
        </Link>

        <nav aria-label="주요 메뉴">
          <ul className="flex items-center gap-4 text-[14px] font-medium sm:gap-7 sm:text-[15px]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
