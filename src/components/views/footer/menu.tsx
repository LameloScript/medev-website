"use client"

export default function Menu() {

    const footerItems = [
        {
            label: "Projects", href: "/fr/projects"
        },

        {
            label: "Qui sommes nous ?", href: "/fr/A-propos"
        },

        {
            label: "Blog", href: "/fr/Blog"
        },

        {
            label: "Ventures", href: "/fr/ventures"
        },

        {
            label: "Nous contacter", href: "/fr/Contact"
        },


    ]
    return (
        <div className="flex lg:gap-8 flex-col gap-4 items-start justify-center lg:flex-row " >
            {
                footerItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-xl "

                    >
                        {item.label}
                    </a>
                )
                )
            }
        </div>
    )
}

export function Menu1() {

    const footerItemss = [
        {
            label: "Politique de confidentialité", href: "#"
        },

        {
            label: "Conditions générales", href: "#"
        },

        {
            label: "Cookies", href: "#"
        },

        {
            label: "Mentions légales", href: "#"
        },

        


    ]
    return (
        <div className="pt-2 lg:pt-0 flex flex-wrap items-center justify-center gap-2 lg:flex-row lg:gap-4">
            {
                footerItemss.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-xs text-center lg:text-base"

                    >
                        {item.label}
                    </a>
                )
                )
            }
        </div>
    )
}
