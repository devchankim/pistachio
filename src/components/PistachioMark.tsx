/**
 * 브랜드 마크: 한쪽 모서리만 각진 원.
 * 로고와 제품 카드 아이콘에서 크기/색만 바꿔 재사용합니다.
 */
export function PistachioMark({
  size = 13,
  color = "var(--color-pistachio)",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        // 좌하단만 살짝 각진 씨앗 모양
        borderRadius: `50% 50% 50% ${Math.max(2, Math.round(size * 0.15))}px`,
      }}
    />
  );
}
