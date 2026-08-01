import type { ReactNode } from "react";

/**
 * About / Products / Contact가 공유하는 섹션 껍데기.
 * 새 섹션을 추가할 때 여백·구분선·라벨 스타일을 다시 쓰지 않아도 됩니다.
 */
export function Section({
  id,
  eyebrow,
  children,
  className = "",
  labelClassName = "mb-7",
}: {
  id: string;
  eyebrow: string;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-line py-[clamp(56px,9vw,96px)] ${className}`}
    >
      <h2
        id={headingId}
        className={`text-[15px] font-bold tracking-[0.08em] text-pistachio uppercase ${labelClassName}`}
      >
        {eyebrow}
      </h2>
      {children}
    </section>
  );
}
