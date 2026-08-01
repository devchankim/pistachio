import type { ReactNode } from "react";

/** 사이트 전역 가로 폭(1040px)과 좌우 여백을 한 곳에서 관리합니다. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1040px] px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}
