export default function Team() {
    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 min-h-screen">
            <div className="lg:w-140 gap-2 flex flex-col">
                <span>[TEAM]</span>
                <div className="lg:w-2/3 gap-2 flex flex-col">
                    <h2 className="font-bebas text-5xl lg:text-7xl">L'EQUIPE DERRIÈRE LES PROJETS</h2>
                    <p className="text-sm lg:text-base">
                        Découvrez les esprits créatifs qui donnent vie à votre vision. Notre équipe allie créativité, stratégie et passion pour transformer vos idées en designs percutants. Ensemble, nous concrétisons votre vision, pixel par pixel.                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-min gap-4 lg:gap-6 w-full h-min p-0 flex-[1_0_0] relative">
                <div className="bg-black aspect-square rounded-xl p-8 flex items-end text-white">
                    text
                </div>
                <div className="bg-black aspect-square rounded-xl p-8 flex items-end text-white">
                    text
                </div>
                <div className="bg-black aspect-square rounded-xl p-8 flex items-end text-white">
                    text
                </div>
                <div className="bg-black aspect-square rounded-xl p-8 flex items-end text-white">
                    text
                </div>
                <div className="bg-black aspect-square rounded-xl p-8 flex items-end text-white">
                    text
                </div>
                <div className="bg-black aspect-square rounded-xl p-8 flex items-end text-white">
                    text
                </div>


            </div>
        </div>
    )
}