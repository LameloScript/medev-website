"use client"

export default function Menu() {

    const footerItems = [
        {
            label: "Projects", href: "#"
        },

        {
            label: "Qui sommes nous ?", href: "#"
        },

        {
            label: "Blog", href: "#"
        },

        {
            label: "Ventures", href: "#"
        },

        {
            label: "Nous contacter", href: "#"
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
