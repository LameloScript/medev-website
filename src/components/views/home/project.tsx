"use client"

import { Button } from "@/components/ui/button"
import { Calendar, BookmarkIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle"
import { useState } from "react";


export default function project() {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const bckImgg = {
        width: "100%",
        minHeight: "100%",
        backgroundImage: "url(/assets/background-medev.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "3rem 2rem"

    };

    return (
        <div>
            <div className="flex flex-col items-center gap-4 pb-8">
                <span className="text-center">[PROJETS]</span>
                <div className="lg:w-2/3 gap-2 flex flex-col">
                    <h2 className="font-bebas text-5xl lg:text-7xl text-center">PARLONS DE VOTRE PROJET</h2>
                    <p className="text-sm lg:text-base text-center">
                        Découvrez les esprits créatifs qui donnent vie à votre vision. Notre équipe allie créativité, stratégie et passion pour transformer vos idées en designs percutants. Ensemble, nous concrétisons votre vision, pixel par pixel.                    </p>
                </div>
            </div>
            <div className="relative w-full bg-black flex flex-col rounded-2xl lg:flex-row gap-4 lg:gap-2 h-170 overflow-hidden">
                {/* Image de fond */}
                <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        backgroundImage: 'url(/assets/bck.avif)',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat',
                        opacity: 0.1
                    }}
                />

                {/* Contenu par-dessus le background */}
                <div className="flex w-full  px-14 py-14">
                    <div className="flex flex-col justify-between w-1/2">
                        <div>
                            <h3 className="font-bebas text-6xl w-100 text-white">Prêts à discuter
                                de votre projet avec nous ?</h3>
                            <p className="text-white w-100">
                                Parlons de la façon dont nous pouvons concevoir une expérience utilisateur qui non seulement soit esthétiquement réussie, mais qui génère également une réelle croissance pour votre produit.

                            </p>
                        </div>
                        <div>
                            <Button variant="outline" className="text-black" size="sm">
                                Réservez un appel <Calendar />
                            </Button>
                        </div>
                    </div>
                    <div className="text-white w-1/2">
                        <span>
                            Liste des Industries
                        </span>
                        <div contextMenu="grid grid-row-1 lg:grid-row-3 auto-rows-min gap-4 lg:gap-6 w-full h-min p-0 flex-[1_0_0] relative">
                            <div>
                                <Toggle
                                    aria-label="Toggle bookmark"
                                    size="sm"
                                    variant="outline"
                                    pressed={isBookmarked}
                                    onPressedChange={setIsBookmarked}
                                    className="data-[state=on]:bg-white data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                                >
                                    <BookmarkIcon />
                                    Bookmark
                                </Toggle>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

