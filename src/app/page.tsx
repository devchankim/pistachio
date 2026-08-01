import Link from "next/link";

import { Container } from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { about, contact, hero, products } from "@/content/site";

export default function HomePage() {
  return (
    <main id="top">
      <Container>
        {/* Hero */}
        <section className="max-w-[760px] pt-[clamp(80px,14vw,160px)] pb-[clamp(72px,12vw,140px)]">
          <p className="mb-[22px] text-[14px] font-semibold tracking-[0.1em] text-pistachio uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="text-[clamp(36px,6.4vw,62px)] leading-[1.18] font-extrabold tracking-[-0.03em] text-pretty">
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-[clamp(16px,2.2vw,19px)] tracking-[-0.01em] text-muted-soft">
            {hero.subhead}
          </p>
          <div className="mt-11 flex flex-wrap gap-3">
            <Link
              href={hero.cta.href}
              className="inline-flex items-center rounded-full bg-pistachio px-[30px] py-[15px] text-[16px] font-bold tracking-[-0.01em] text-pistachio-ink transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-pistachio-deep"
            >
              {hero.cta.label}
            </Link>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow={about.eyebrow}>
          <p className="max-w-[700px] text-[clamp(19px,2.8vw,26px)] leading-[1.7] font-medium tracking-[-0.02em] text-pretty">
            {about.body}
          </p>
        </Section>

        {/* Products */}
        <Section id="products" eyebrow="Products" labelClassName="mb-9">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          eyebrow={contact.eyebrow}
          className="pb-[clamp(72px,11vw,120px)]"
        >
          <a
            href={`mailto:${contact.email}`}
            className="inline-block border-b-[3px] border-pistachio pb-1 text-[clamp(24px,5vw,46px)] font-extrabold tracking-[-0.03em] break-all text-ink transition-colors hover:text-leaf"
          >
            {contact.email}
          </a>
          <p className="mt-6 text-[16px] text-muted-soft">{contact.note}</p>
        </Section>
      </Container>
    </main>
  );
}
