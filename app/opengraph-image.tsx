import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Velvex Labs — Design and engineering, one discipline";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "80px",
          backgroundColor: "#F2EDE4",
          backgroundImage:
            "linear-gradient(155deg, rgba(107,81,66,0.08) 0%, rgba(107,81,66,0.2) 100%)",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#646B54",
            marginBottom: 28,
          }}
        >
          Velvex Labs
        </div>
        <div
          style={{
            fontSize: 68,
            lineHeight: 1.08,
            color: "#1F1B16",
            maxWidth: 920,
          }}
        >
          Design and engineering, one discipline.
        </div>
      </div>
    ),
    { ...size }
  );
}
