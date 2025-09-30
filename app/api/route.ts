// app/api/route.ts
// 🚧 API temporalmente desactivada hasta configurar Resend y su API Key
// Mantengo el handler vacío para que el build de Vercel no falle

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "API temporarily disabled" });
}

export async function POST() {
  return NextResponse.json({ message: "API temporarily disabled" });
}