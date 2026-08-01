import { Container } from "@/components/Container";
import { business, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-shell">
      <Container className="flex flex-wrap gap-x-8 gap-y-2.5 pt-9 pb-11 text-[13px] leading-[1.8] text-muted-soft">
        <span>상호: {business.name}</span>
        <span>사업자등록번호: {business.registrationNumber}</span>
        <span>
          이메일:{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-muted transition-colors hover:text-ink"
          >
            {site.email}
          </a>
        </span>
        <span className="basis-full text-muted-faint">
          © {year} {site.name}. All rights reserved.
        </span>
      </Container>
    </footer>
  );
}
