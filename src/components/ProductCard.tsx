import Link from "next/link";

import { PistachioMark } from "@/components/PistachioMark";
import { productStatusLabel, type Product } from "@/content/site";

/**
 * status에 따라 두 가지 형태로 렌더링됩니다.
 *  - live:     채워진 카드 (실선 테두리) + 초록 배지
 *  - upcoming: 점선 테두리 + 회색 배지. 이름은 읽을 수 있는 명도를 유지합니다.
 * href가 있으면 카드 전체가 링크가 됩니다.
 */
export function ProductCard({ product }: { product: Product }) {
  const isUpcoming = product.status === "upcoming";

  const shell = isUpcoming
    ? "border-dashed border-line-soft bg-transparent"
    : "border-solid border-line bg-card";

  const interactive = product.href
    ? "transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-sage"
    : "";

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <PistachioMark
          size={26}
          color={isUpcoming ? "var(--color-stone)" : "var(--color-sage)"}
        />
        <span
          className={`rounded-full px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap ${
            isUpcoming
              ? "border border-line-soft text-muted-faint"
              : "bg-pistachio/20 text-leaf"
          }`}
        >
          {productStatusLabel[product.status]}
        </span>
      </div>

      <span
        className={`mt-1.5 text-[22px] font-extrabold tracking-[-0.02em] ${
          isUpcoming ? "text-muted" : "text-ink"
        }`}
      >
        {product.name}
      </span>
      <span
        className={`text-[16px] leading-[1.65] ${
          isUpcoming ? "text-muted-soft" : "text-muted"
        }`}
      >
        {product.description}
      </span>
    </>
  );

  const className = `flex flex-col gap-3 rounded-[20px] border px-8 pt-[34px] pb-[30px] ${shell} ${interactive}`;

  if (product.href) {
    return (
      <Link href={product.href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
