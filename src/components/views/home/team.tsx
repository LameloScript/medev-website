import { useState } from 'react'
import ApplyDialog from '@/src/components/views/recruitment/apply-dialog'

export default function Team() {
    const [applyOpen, setApplyOpen] = useState(false)
    return (
        <div className="container-fixed lg:py-22 px-4 lg:px-20 relative z-10">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start justify-between">
                <div className="flex flex-col gap-2 lg:w-1/2">
                    <span className="text-black text-xs lg:text-sm">[TEAM]</span>
                    <h2 className="text-black font-bangers text-3xl md:text-4xl lg:text-5xl mt-2 lg:leading-14 leading-tight">
                        L'EQUIPE DERRIÈRE <span className="text-secondary">LES PROJETS</span>
                    </h2>
                </div>
                <div className="lg:w-1/2">
                    <p className="text-gray-600 font-nunito text-sm md:text-base lg:text-lg leading-relaxed">
                        Découvrez les esprits créatifs qui donnent vie à votre vision. Notre équipe allie créativité, stratégie et passion pour transformer vos idées en designs percutants. Ensemble, nous concrétisons votre vision, pixel par pixel.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-min gap-4 lg:gap-6 w-full h-min p-0 flex-[1_0_0] mt-6 lg:mt-12 relative">
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
                <div className="bg-secondary aspect-square rounded-xl p-8 flex flex-col items-center justify-center text-white gap-6 group hover:bg-secondary/90 transition-all duration-300 cursor-pointer hover:scale-105">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <h3 className="font-bangers text-2xl lg:text-3xl text-center">
                            Rejoignez notre équipe
                        </h3>
                    </div>
                    <p className="text-center text-sm lg:text-base font-nunito">
                        Vous êtes passionné par le digital ? Venez créer l'avenir avec nous !
                    </p>
                    <button onClick={() => setApplyOpen(true)} className="bg-white text-secondary px-6 py-2 rounded-full font-bold text-sm lg:text-base hover:bg-gray-100 transition-colors duration-300">
                        Postuler
                    </button>
                </div>
            </div>
            <ApplyDialog open={applyOpen} onOpenChange={setApplyOpen} />
        </div>
    )
}
