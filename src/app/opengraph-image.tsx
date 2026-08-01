import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pistachio — Software Studio";

/**
 * OG 이미지는 ImageResponse 기본 폰트(라틴 전용)로 렌더링되므로
 * 한글을 넣지 않고 영문 카피만 사용합니다.
 * 한글이 필요해지면 Pretendard .ttf를 fonts 옵션으로 넘겨야 합니다.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#faf7f0",
          padding: "0 96px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: "#93c572",
              borderRadius: "50% 50% 50% 7px",
            }}
          />
          <div style={{ fontSize: 52, fontWeight: 700, color: "#3a3833" }}>
            Pistachio
          </div>
        </div>

        <div
          style={{
            marginTop: 44,
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#3a3833",
            lineHeight: 1.15,
          }}
        >
          Software Studio
        </div>

        <div style={{ marginTop: 28, fontSize: 34, color: "#8a857a" }}>
          Tools for creators and small businesses
        </div>

        <div
          style={{
            marginTop: 56,
            height: 6,
            width: 160,
            background: "#93c572",
            borderRadius: 999,
          }}
        />
      </div>
    ),
    size,
  );
}
