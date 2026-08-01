import Link from "next/link";

import { Container } from "@/components/Container";

export const metadata = {
  title: "페이지를 찾을 수 없습니다",
};

export default function NotFound() {
  return (
    <main>
      <Container>
        <section className="py-[clamp(96px,18vw,200px)]">
          <p className="mb-[22px] text-[14px] font-semibold tracking-[0.1em] text-pistachio uppercase">
            404
          </p>
          <h1 className="text-[clamp(30px,5.2vw,48px)] leading-[1.2] font-extrabold tracking-[-0.03em]">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="mt-6 text-[17px] text-muted-soft">
            주소가 변경되었거나 삭제된 페이지일 수 있습니다.
          </p>
          <Link
            href="/"
            className="mt-11 inline-flex items-center rounded-full bg-pistachio px-[30px] py-[15px] text-[16px] font-bold tracking-[-0.01em] text-pistachio-ink transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-pistachio-deep"
          >
            홈으로 돌아가기
          </Link>
        </section>
      </Container>
    </main>
  );
}
