export default function yproject() {
    return (
        <div className="min-h-screen flex flex-col lg:gap-24 lg:py-22 py-14 px-4 lg:px-20">
            <div className="lg:flex flex:flex-col gap-4 items-start ">
                <div className="flex flex-col lg:items-start items-center justify-center lg:w-1/3">
                    <span className="text-black lg:text-start text-xs lg:text-sm text-center" >[ NOS PROJETS RECENTS ]</span>
                    <h2 className="text-black font-bangers lg:text-5xl text-3xl mt-6 lg:text-start text-center lg:leading-14">
                        Là où les grandes idées se sont transformées en   <span className="text-secondary"> résultats </span> concrets
                    </h2>
                    <div className="flex items-center justify-center mt-6">
                        <button className="bg-secondary flex items-center gap-2 px-4 py-2 rounded-full text-white text-base font-bangers w-fit opacity-0 animate-fade-in-up [animation-delay:0.4s]">
                            <div className="rounded-full bg-gray-100 p-1">
                                <img src="/assets/Vector.png" alt="" className="w-5 h-5" />
                            </div>
                            Voir tous nos projets
                        </button>
                    </div>
                </div>
                <div className="lg:w-2/3 gap-20 flex  flex-col mt-6 ">
                    <div className="rounded-2xl relative h-80 lg:h-150 overflow-hidden">
                        <img src="/assets/projet-1.png" alt="" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 text-white font-bangers text-xl p-6 bg-black/40 backdrop-blur-xl">
                            afrikababba - plateforme de mise en relation B2B
                        </div>
                    </div>
                    <div className="rounded-2xl relative h-80 lg:h-150 overflow-hidden">
                        <img src="/assets/projet.png" alt="" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 text-white font-bangers text-xl p-6 bg-black/40 backdrop-blur-xl">
                            groupe galabi - cabinet de conseil stratégique
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}