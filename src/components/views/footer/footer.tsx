import Menu from "@/src/components/views/footer/menu"
import { Menu1 } from "@/src/components/views/footer/menu"

export default function Footer() {
    return (
        <div className="w-full bg-black">
            <div className="container-fixed">
                <div className="lg:px-20">
                    <div className="bg-black lg:py-20 py-8 px-4 pt-12 lg:px-8 flex flex-col items-center justify-center gap-4 lg:gap-6">
                        <span className="lg:text-base text-xs font-medium font-poppins text-white">
                            Basé en Côte d'Ivoire, Abidjan, Cocody Faya
                        </span>
                        <span className="text-5xl flex text-center font-bangers lg:text-9xl font-medium text-white">
                            RÊVONS ENSEMBLE
                        </span>



                    </div>
                    <div className="text-white lg:py-20 py-8 px-4 pt-2 lg:px-8 flex flex-col  gap-4 lg:gap-6">
                        <Menu />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-9 py-4 px-4  bg-black">
                        <span className="text-xs lg:text-base text-center text-white">
                            © 2025 Medev Group Inc. Tous droits réservés.
                        </span>
                        <div className="text-white hidden lg:flex">
                            <Menu1 />
                        </div>
                    </div>
                    <div>
                        <img src="/assets/medev-footer.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}