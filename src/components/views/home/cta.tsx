import CtaButton from "@/src/components/others-ui/cta-button"

export default function cta() {
    return (
        <div className="flex flex-col gap-24 py-22 px-4 bg-cover bg-center items-center lg:mt-40 justify-center bg-no-repeat lg:bg-[url('/assets/cta-1.png')] bg-[url('/assets/cta-2.png')]">
            <div className="flex flex-col items-center justify-center lg:w-1/2">
                <span className="font-bangers lg:text-5xl text-2xl  lg:mt-6 text-center lg:leading-14 text-white lg:px-14">
                    Confiez vos projets à des experts et gagnez du temps dès aujourd’hui.
                </span>
                <div className="flex items-center justify-center mt-6">
                    <CtaButton href="/fr/Contact" label="réservez un call dès maintenant" className="opacity-0 animate-fade-in-up [animation-delay:0.4s]" />
                </div>
            </div>
            <div className="absolute right-0  lg:w-126 lg:flex hidden -translate-y-1">
                <img src="/assets/mask-3.png" alt="" />
            </div>
        </div>
    )
}
