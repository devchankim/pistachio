import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { products, site } from "@/content/config";
import { getDictionary, isLocale } from "@/content/dictionaries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <main id="top">
      <Container>
        {/* Hero */}
        <section className="max-w-[760px] pt-[clamp(80px,14vw,160px)] pb-[clamp(72px,12vw,140px)]">
          <p className="mb-[22px] text-[14px] font-semibold tracking-[0.1em] text-pistachio uppercase">
            {dict.hero.eyebrow}
          </p>
          <h1 className="text-[clamp(36px,6.4vw,62px)] leading-[1.18] font-extrabold tracking-[-0.03em] text-pretty">
            {dict.hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-[clamp(16px,2.2vw,19px)] tracking-[-0.01em] text-muted-soft">
            {dict.hero.subhead}
          </p>
          <div className="mt-11 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-pistachio px-[30px] py-[15px] text-[16px] font-bold tracking-[-0.01em] text-pistachio-ink transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-pistachio-deep"
            >
              {dict.hero.cta}
            </Link>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow={dict.about.eyebrow}>
          <p className="max-w-[700px] text-[clamp(19px,2.8vw,26px)] leading-[1.7] font-medium tracking-[-0.02em] text-pretty">
            {dict.about.body}
          </p>
        </Section>

        {/* Products */}
        <Section
          id="products"
          eyebrow={dict.products.eyebrow}
          labelClassName="mb-9"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            {products.map((product) => {
              const copy = dict.products.items[product.slug];

              return (
                <ProductCard
                  key={product.slug}
                  name={copy.name}
                  description={copy.description}
                  status={product.status}
                  statusLabel={dict.products.status[product.status]}
                />
              );
            })}
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          eyebrow={dict.contact.eyebrow}
          className="pb-[clamp(72px,11vw,120px)]"
        >
          <a
            href={`mailto:${site.email}`}
            className="inline-block border-b-[3px] border-pistachio pb-1 text-[clamp(24px,5vw,46px)] font-extrabold tracking-[-0.03em] break-all text-ink transition-colors hover:text-leaf"
          >
            {site.email}
          </a>
          <p className="mt-6 text-[16px] text-muted-soft">{dict.contact.note}</p>
        </Section>
      </Container>
    </main>
  );
}
