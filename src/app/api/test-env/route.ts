import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    hasApiUrl: !!process.env.STRAPI_API_URL,
    hasApiToken: !!process.env.STRAPI_API_TOKEN,
    apiUrl: process.env.STRAPI_API_URL || 'NOT_SET',
    tokenLength: process.env.STRAPI_API_TOKEN?.length || 0
  })
}
