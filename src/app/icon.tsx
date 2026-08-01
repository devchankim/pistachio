import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** 브랜드 마크와 같은 씨앗 모양의 파비콘을 런타임에 생성합니다. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf7f0",
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            background: "#93c572",
            borderRadius: "50% 50% 50% 4px",
          }}
        />
      </div>
    ),
    size,
  );
}
