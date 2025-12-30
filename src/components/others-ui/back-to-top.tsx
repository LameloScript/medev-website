"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type BackToTopProps = {
  offset?: number
  smooth?: boolean
  className?: string
}

export default function BackToTopButton({
  offset = 300,
  smooth = true,
  className,
}: BackToTopProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > offset)
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [offset])

  const handleClick = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: smooth ? "smooth" : "auto",
      })
    } catch {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
        className
      )}
      aria-hidden={!visible}
    >
      <Button
        variant="secondary"
        size="icon-lg"
        onClick={handleClick}
        aria-label="Retour en haut"
        className="rounded-full shadow-lg hover:shadow-xl focus-visible:ring-ring/50"
      >
        <ArrowUp className="size-5" />
      </Button>
    </div>
  )
}

