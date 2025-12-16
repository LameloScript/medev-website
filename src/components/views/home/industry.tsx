export default function industry() {
    return (
        <div className="min-h-screen flex flex-col lg:gap-24 lg:py-22 py-14 px-4 lg:px-20">
            <div className="flex items-center justify-center gap-4">
                <div className="hidden lg:flex">
                    <div className="flex flex-col gap-24 justify-center items-end">
                        <div className="bg-[#F8F8F8] rounded-full py-3 px-4 max-w-fit rotate-16">
                            <div className="flex items-center justify-between gap-2 rounded-full px-2 bg-white">
                                <img src="/assets/black.png" alt="" className="w-6" />
                                <span className="text-xl"> WEB </span>
                            </div>
                        </div>
                        <div className="bg-[#F8F8F8] rounded-full py-3 px-4 max-w-fit -rotate-10">
                            <div className="flex items-center justify-between gap-2 rounded-full px-2 bg-white">
                                <img src="/assets/orange.png" alt="" className="w-6" />
                                <span className="text-xl"> GEOSPATIAL  </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-black text-xs lg:text-sm text-center">[ QUI NOUS ACCOMPAGNONS ? ]</span>
                    <h2 className="text-black font-bangers lg:text-5xl text-3xl mt-6 lg:text-center text-center lg:leading-14">
                        Nous accompagnons les entreprises dans leur croissance digitale grâce à <span className="text-secondary"> des solutions web, mobiles et IoT </span> sur mesure, une identité technologique forte et des expériences utilisateurs performantes.
                    </h2>
                </div>
                <div className="hidden lg:flex">
                    <div className="flex flex-col items-start gap-24 justify-center">
                        <div className="bg-[#F8F8F8] rounded-full py-3 px-4 max-w-fit -rotate-10">
                            <div className="flex items-center justify-between gap-2 rounded-full px-2 bg-white">
                                <img src="/assets/orange.png" alt="" className="w-6" />
                                <span className="text-xl"> MOBILE </span>
                            </div>
                        </div>
                        <div className="bg-[#F8F8F8] rounded-full py-3 px-4 max-w-fit rotate-16">
                            <div className="flex items-center justify-between gap-2 rounded-full px-2 bg-white">
                                <img src="/assets/black.png" alt="" className="w-6" />
                                <span className="text-xl"> IOT </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}