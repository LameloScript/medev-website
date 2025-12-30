import React from "react"

interface CtaButtonProps {
  label: string
  href?: string
  className?: string
}

export default function CtaButton({ label, href, className }: CtaButtonProps) {
  const content = (
    <button className={`bg-secondary hover:bg-black transition-colors duration-200 group flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white text-sm sm:text-base lg:text-lg font-bangers w-fit ${className || ""}`}>
      <div className="rounded-full bg-gray-100 p-1 sm:p-1.5 transition-transform duration-300 group-hover:-translate-x-1 group-active:-translate-x-2">
        <img src="/assets/Vector.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      {label}
    </button>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }
  return content
}

