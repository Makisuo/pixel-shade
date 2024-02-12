/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") || "PixelShade";

  const bgImage = await fetch(
    new URL("http://localhost:3000/images/ogbg.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: "white",
          textTransform: "uppercase",
          width: "100%",
          height: "100%",
          display: "flex",
          fontWeight: "900",
          justifyContent: "center",
          flexDirection: "column",
          paddingLeft: "72px",
        }}
      >
        <img
          style={{ position: "absolute" }}
          alt="blob background"
          // @ts-ignore
          src={bgImage}
          width={1200}
          height={630}
        />
        <div style={{ display: "flex", width: "100%", height: "40px" }}>
          <p style={{ fontSize: 26, marginTop: "0px", paddingLeft: "16px" }}>
            contact@pixelshade.dev
          </p>
        </div>
        <p style={{ marginTop: "48px", marginBottom: "96px" }}>{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};
