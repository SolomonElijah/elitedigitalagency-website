import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Elite Digital Agency, software development company in Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "linear-gradient(135deg, #0d1b6e, #1a3fcc 63%, #0a1635)", color: "#fff", padding: 75, flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, fontWeight: 700, marginBottom: 35 }}>
          <svg width="54" height="32" viewBox="0 0 64 38" aria-hidden="true">
            <path fill="#fff" d="M12 4h52v5H12zM0 12h64v5H0zM12 21h45v5H12zM0 29h64v5H0z" />
          </svg>
          Elite Digital Agency
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 78, lineHeight: 1.04, fontWeight: 800, letterSpacing: "-.05em" }}>
          <div>We build the software</div>
          <div style={{ color: "#d5e1ff" }}>your business runs on.</div>
        </div>
        <div style={{ display: "flex", fontSize: 27, marginTop: 35, color: "#e0e9ff" }}>Software engineering &amp; digital services · Nigeria</div>
      </div>
    ),
    size,
  );
}
