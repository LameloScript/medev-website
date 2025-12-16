export default function services() {
    return (
        <div className="bg-black min-h-screen flex flex-col gap-24 py-22 px-4 lg:px-20">
            <div className="flex flex-col items-center justify-center">
                <span className="text-white text-xs lg:text-sm text-center">[NOS SERVICES]</span>
                <h2 className="text-white font-bangers lg:text-5xl text-3xl mt-6 text-center lg:leading-14">
                    Grâce à notre équipe interne, nous offrons  <span className="text-secondary"> des services personnalisés </span>
                </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-[#FBFBFB] p-6 lg:flex rounded-2xl items-start justify-between">
                    <span className="font-bangers lg:text-4xl text-2xl">
                        Developpement Web
                    </span>
                    <div>
                        <img src="/assets/service-1.png" alt="" />
                    </div>
                </div>
                <div className="bg-[#FFE6D5] p-6 lg:flex rounded-2xl items-start justify-between">
                    <span className="font-bangers lg:text-4xl text-2xl">
                        Developpement Mobile
                    </span>
                    <div>
                        <img src="/assets/service-2.png" alt="" />
                    </div>
                </div>
                <div className="bg-[#FFE6D5] p-6 lg:flex rounded-2xl items-start justify-between">
                    <span className="font-bangers lg:text-4xl text-2xl">
                        internet <br />des objets (IOT)
                    </span>
                    <div>
                        <img src="/assets/service-3.png" alt="" />
                    </div>
                </div>
                <div className="bg-[#FBFBFB] p-6 lg:flex rounded-2xl items-start justify-between">
                    <span className="font-bangers lg:text-4xl text-2xl">
                        GEOSPATIALe
                    </span>
                    <div>
                        <img src="/assets/service-4.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-secondary flex items-center gap-2 px-4 py-2 rounded-full text-white text-base font-bangers w-fit opacity-0 animate-fade-in-up [animation-delay:0.4s]">
                    <div className="rounded-full bg-gray-100 p-1">
                        <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
                    </div>
                    Donner vie à votre projet
                </button>
            </div>
        </div>
    )
}



