import { NextResponse } from "next/server"
import { R2_PUBLIC_BASE, assetFromKey, catalogAssets } from "@/lib/certifications"

export const revalidate = 120

export async function GET() {
  return NextResponse.json({
    source: "catalog",
    base: R2_PUBLIC_BASE,
    items: catalogAssets().map((item) => assetFromKey(item.key, item.issuer)),
  })
}
