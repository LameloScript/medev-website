"use client"

export default function Menu() {

    const footerItems = [

        {
            label: "QUI SOMMES NOUS ?", href: "/fr/A-propos"
        },

        {
            label: "NOUS CONTACTER", href: "/fr/Contact"
        },

        {
            label: "VENTURES", href: "/fr/ventures"
        },

        {
            label: "PROJETS", href: "/fr/projects"
        },

        {
            label: "BLOG", href: "/fr/Blog"
        },









    ]
    return (
        <div className="flex flex-col gap-3 lg:gap-4" >
            {
                footerItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="flex flex-col items-center font-bangers font-bold text-3xl sm:text-4xl lg:text-5xl transition-all duration-300 hover:scale-110 hover:text-secondary"

                    >
                        {item.label}
                    </a>
                )
                )
            }
        </div>
    )
}
