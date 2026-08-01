import Link from "next/link";

import { Container } from "@/components/Container";
import { defaultLocale } from "@/content/config";
import { getDictionary } from "@/content/dictionaries";

/**
 * not-found.tsx는 params를 받을 수 없어 기본 언어(ko)로 표시합니다.
 * 잘못된 언어 코드(/foo)로 들어온 경우이므로 기본 언어가 합리적입니다.
 */
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <main>
      <Container>
        <section className="py-[clamp(96px,18vw,200px)]">
          <p className="mb-[22px] text-[14px] font-semibold tracking-[0.1em] text-pistachio uppercase">
            404
          </p>
          <h1 className="text-[clamp(30px,5.2vw,48px)] leading-[1.2] font-extrabold tracking-[-0.03em]">
            {dict.notFound.title}
          </h1>
          <p className="mt-6 text-[17px] text-muted-soft">{dict.notFound.body}</p>
          <Link
            href={`/${defaultLocale}`}
            className="mt-11 inline-flex items-center rounded-full bg-pistachio px-[30px] py-[15px] text-[16px] font-bold tracking-[-0.01em] text-pistachio-ink transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-pistachio-deep"
          >
            {dict.notFound.cta}
          </Link>
        </section>
      </Container>
    </main>
  );
}
