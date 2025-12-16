'use client'

import { usePathname } from 'next/navigation'
import Header from './header'

export default function HeaderWrapper() {
    const pathname = usePathname()

    // Ne pas afficher le header sur la page d'accueil (home)
    // Les routes home sont: /fr, /en, /fr/, /en/, etc.
    const isHomePage = pathname === '/' || /^\/[a-z]{2}\/?$/.test(pathname)

    if (isHomePage) {
        return null
    }

    return <Header />
}
