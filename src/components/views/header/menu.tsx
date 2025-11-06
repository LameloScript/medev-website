"use client"

export default function Menu() {

    const footerItems = [

        {
            label: "QUI SOMMES NOUS ?", href: "#"
        },

        {
            label: "NOUS CONTACTER", href: "#"
        },

        {
            label: "VENTURES", href: "#"
        },

        {
            label: "PROJECTS", href: "#"
        },

        {
            label: "BLOG", href: "#"
        },









    ]
    return (
        <div className="flex flex-col gap-3 lg:gap-4" >
            {
                footerItems.map((item, index) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="flex flex-col items-center font-bebas font-bold text-4xl lg:text-5xl "

                    >
                        {item.label}
                    </a>
                )
                )
            }
        </div>
    )
}
