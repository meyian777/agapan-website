import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "API temporarily disabled" });
}

export async function POST() {
  return NextResponse.json({ message: "API temporarily disabled" });
}
