import Menu from "@/src/components/views/footer/menu"
import { Menu1 } from "@/src/components/views/footer/menu"

export default function Footer() {
    return (
        <div className=" w-full">
            <div className=" bg-neutral-100 lg:py-22 py-8 px-4 pt-12 lg:px-8 flex flex-col items-center justify-center gap-4 lg:gap-6">
                <span className="lg:text-base text-xs font-medium font-poppins">
                    Basé en Côte d'Ivoire, Abidjan, Cocody Faya
                </span>
                <span className="text-5xl flex text-center font-bebas lg:text-9xl font-medium">
                    RÊVONS ENSEMBLE
                </span>
                
                    <Menu />
                
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between lg:py-9 py-4 px-4 lg:px-8  bg-neutral-100">
                <span className="text-sm lg:text-base text-center">
                    © 2025 Medev Group Inc. Tous droits réservés.
                </span>
                <div className="">
                    <Menu1 />
                </div>
            </div>
        </div>
    )
}