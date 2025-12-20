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
                footerItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="flex flex-col items-center font-bangers font-bold text-4xl lg:text-5xl transition-all duration-300 hover:scale-110 hover:text-blue-600"

                    >
                        {item.label}
                    </a>
                )
                )
            }
        </div>
    )
}
