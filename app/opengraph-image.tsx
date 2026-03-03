import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Elite Digital Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #080810 0%, #111120 50%, #1a1a2e 100%)",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(245,245,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,240,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Glow top-right */}
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,92,250,0.25) 0%, transparent 65%)",
        }} />

        {/* Glow bottom-left */}
        <div style={{
          position: "absolute", bottom: -80, left: -80,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,176,0.18) 0%, transparent 65%)",
        }} />

        {/* Logo / Brand mark */}
        <div style={{
          position: "absolute", top: 64, left: 80,
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: "linear-gradient(135deg, #00e5b0, #7b5cfa)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ width: 20, height: 20, background: "#080810", borderRadius: 4 }} />
          </div>
          <span style={{ color: "#f5f5f0", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>
            Elite Digital Agency
          </span>
        </div>

        {/* Main content */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: 800 }}>
          {/* Badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            marginBottom: 24,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00e5b0" }} />
            <span style={{ color: "#00e5b0", fontSize: 14, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Trusted Digital Partner
            </span>
          </div>

          {/* Headline */}
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24 }}>
            <span style={{ color: "#f5f5f0" }}>We Build Digital</span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #00e5b0 0%, #7b5cfa 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}>
              Experiences
            </span>
            <span style={{ color: "rgba(245,245,240,0.35)", fontWeight: 300 }}> That Drive</span>
            <br />
            <span style={{ color: "rgba(245,245,240,0.35)", fontWeight: 300 }}>Growth.</span>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 40 }}>
            {[
              { num: "200+", label: "Projects" },
              { num: "98%", label: "Satisfaction" },
              { num: "8+", label: "Years" },
              { num: "50+", label: "Clients" },
            ].map(({ num, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#f5f5f0", fontSize: 28, fontWeight: 800, lineHeight: 1 }}>{num}</span>
                <span style={{ color: "rgba(245,245,240,0.4)", fontSize: 12, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* URL bottom right */}
        <div style={{
          position: "absolute", bottom: 64, right: 80,
          color: "rgba(245,245,240,0.25)", fontSize: 14, letterSpacing: "0.05em",
        }}>
          elitedigitalagency.net
        </div>
      </div>
    ),
    { ...size }
  );
}
