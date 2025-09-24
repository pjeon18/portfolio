import { NextResponse } from "next/server";

export async function POST() {
  // Mock success; plug real email/service later
  return NextResponse.json({ ok: true });
}


