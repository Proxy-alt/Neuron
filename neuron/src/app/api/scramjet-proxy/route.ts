import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "No url provided" }, { status: 400 });
    }

    // --- Scramjet SDK integration placeholder ---
    // Replace below with actual scramjet.cloud SDK/API call if available
    const proxiedRes = await fetch(url, {
      method: "GET",
      // Forward headers/body as needed for your application
    });
    const data = await proxiedRes.text();
    return new Response(data, {
      status: proxiedRes.status,
      headers: { "content-type": proxiedRes.headers.get("content-type") || "text/plain" },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal error" }, { status: 500 });
  }
}
