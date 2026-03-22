import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "오늘숲 — 오늘의 감정이, 내일의 글이 됩니다";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF7F2",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #C8793A 0%, #7C5C3A 50%, #3A6B4A 100%)",
          }}
        />

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#3A6B4A",
            opacity: 0.06,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -60,
            bottom: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "#C8793A",
            opacity: 0.08,
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            padding: "0 80px",
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontSize: 28,
              color: "#7C5C3A",
              letterSpacing: "0.15em",
              fontWeight: 400,
            }}
          >
            오늘숲
          </div>

          {/* Main headline */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#1C1714",
              textAlign: "center",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            오늘의 감정이,
            <br />
            내일의 글이 됩니다
          </div>

          {/* Sub description */}
          <div
            style={{
              fontSize: 28,
              color: "#6B6058",
              textAlign: "center",
              lineHeight: 1.6,
              marginTop: 8,
            }}
          >
            오늘감으로 감정을 기록하고, 글숲에서 나만의 글로 피어납니다.
          </div>

          {/* Service badges */}
          <div
            style={{
              display: "flex",
              gap: 20,
              marginTop: 16,
            }}
          >
            <div
              style={{
                padding: "10px 28px",
                background: "#F0E0CC",
                borderRadius: 100,
                fontSize: 22,
                color: "#C8793A",
                fontWeight: 500,
              }}
            >
              🌱 오늘감
            </div>
            <div
              style={{
                padding: "10px 28px",
                background: "#D0E4D8",
                borderRadius: 100,
                fontSize: 22,
                color: "#3A6B4A",
                fontWeight: 500,
              }}
            >
              🌲 글숲
            </div>
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            fontSize: 20,
            color: "#A89B8E",
            letterSpacing: "0.05em",
          }}
        >
          oneulsoop.324.ing
        </div>
      </div>
    ),
    { ...size }
  );
}
