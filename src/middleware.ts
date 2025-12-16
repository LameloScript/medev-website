import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only handle root path
  if (pathname === '/') {
    // Detect user's preferred language from Accept-Language header
    // Falls back to 'fr' as default
    const acceptLanguage = request.headers.get('accept-language') || ''
    const locale = acceptLanguage.toLowerCase().includes('en') ? 'en' : 'fr'

    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Match only the root path
  matcher: '/',
}
