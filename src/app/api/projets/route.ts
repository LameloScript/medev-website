import { NextResponse } from 'next/server'
import { fetchStrapi } from '@/lib/strapi'

export async function GET() {
  try {
    const data = await fetchStrapi('/api/projets?populate=*&pagination[pageSize]=100')
    return NextResponse.json(data, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Impossible de récupérer les projets', details: error?.message },
      { status: 500 }
    )
  }
}
