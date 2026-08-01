import { Container } from "@/components/Container";
import { business, site } from "@/content/config";
import type { Dictionary } from "@/content/dictionaries";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-shell">
      <Container className="flex flex-wrap gap-x-8 gap-y-2.5 pt-9 pb-11 text-[13px] leading-[1.8] text-muted-soft">
        <span>
          {dict.footer.businessNameLabel}: {dict.footer.businessNameValue}
        </span>
        <span>
          {dict.footer.registrationNumberLabel}: {business.registrationNumber}
        </span>
        <span>
          {dict.footer.emailLabel}:{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-muted transition-colors hover:text-ink"
          >
            {site.email}
          </a>
        </span>
        <span className="basis-full text-muted-faint">
          © {year} {site.name}. {dict.footer.rights}
        </span>
      </Container>
    </footer>
  );
}
