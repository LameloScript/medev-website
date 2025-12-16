"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Wallet, ShoppingCart, HeartPulse, GraduationCap, Cloud, Package, Home, Store, Hotel, Film, ArrowLeft, ArrowRight, Building2, User, FileText } from "lucide-react"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useState } from "react";


export default function project() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    // Form data state
    const [formData, setFormData] = useState({
        // Step 1
        industry: "",
        // Step 2
        name: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        // Step 3
        budget: "",
        solutions: [] as string[],
        message: ""
    });

    const steps = [
        { number: 1, title: "Choix de l'industrie", subtitle: "Sélectionnez votre secteur", icon: Building2 },
        { number: 2, title: "Informations personnelles", subtitle: "Vos coordonnées", icon: User },
        { number: 3, title: "Détails du projet", subtitle: "Budget et besoins", icon: FileText }
    ];

    // Validation functions for each step
    const isStep1Valid = () => {
        return formData.industry !== "";
    };

    const isStep2Valid = () => {
        return (
            formData.name.trim() !== "" &&
            formData.email.trim() !== "" &&
            formData.phone.trim() !== "" &&
            formData.company.trim() !== "" &&
            formData.position !== ""
        );
    };

    const isStep3Valid = () => {
        return (
            formData.budget.trim() !== "" &&
            formData.solutions.length > 0 &&
            formData.message.trim() !== ""
        );
    };

    const canProceed = () => {
        if (currentStep === 1) return isStep1Valid();
        if (currentStep === 2) return isStep2Valid();
        if (currentStep === 3) return isStep3Valid();
        return false;
    };

    const nextStep = () => {
        if (currentStep < totalSteps && canProceed()) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div>
            {/* 
            <div className="flex flex-col items-center gap-4 pb-8">
                <span className="text-center">[PROJETS]</span>
                <div className="lg:w-2/3 gap-2 flex flex-col">
                    <h2 className="font-bangers text-5xl lg:text-7xl text-center">PARLONS DE VOTRE PROJET</h2>
                    <p className="text-sm lg:text-base text-center">
                        Découvrez les esprits créatifs qui donnent vie à votre vision. Notre équipe allie créativité, stratégie et passion pour transformer vos idées en designs percutants. Ensemble, nous concrétisons votre vision, pixel par pixel.                    </p>
                </div>
            </div>
            
            */}

            <div className="relative w-full bg-black flex flex-col rounded-2xl lg:flex-row gap-4 lg:gap-2 lg:h-170 overflow-hidden">
                {/* Image de fond */}
                <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                        backgroundImage: 'url(/assets/bck.avif)',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat',
                        opacity: 0.1
                    }}
                />

                {/* Contenu par-dessus le background */}
                <div className="relative z-10 flex flex-col  lg:flex-row w-full px-4 sm:px-8 lg:px-14 py-8 lg:py-14 gap-8 lg:gap-30">
                    <div className="flex flex-col justify-between w-full lg:w-1/3 gap-6 lg:gap-8">
                        <div className="space-y-4">
                            <h3 className="font-bangers text-2xl sm:text-5xl lg:text-6xl text-white leading-none">Prêts à discuter
                                de votre projet avec nous ?</h3>
                            <p className="text-white text-sm sm:text-base lg:flex hidden">
                                Parlons de la façon dont nous pouvons concevoir une expérience utilisateur qui non seulement soit esthétiquement réussie, mais qui génère également une réelle croissance pour votre produit.

                            </p>
                        </div>
                        <div className="lg:flex flex-col gap-4 hidden">
                            
                            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage
                                        src="https://github.com/maxleiter.png"
                                        alt="@maxleiter"
                                    />
                                    <AvatarFallback>LR</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage
                                        src="https://github.com/evilrabbit.png"
                                        alt="@evilrabbit"
                                    />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </div>
                            <span className="text-white font-bangers text-xs lg:text-xl">+56 Entreprises nous ont fait confiance </span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/3 gap-6 relative pb-24 lg:pb-20">
                        {/* Step Indicators */}
                        <div className="flex items-center justify-between w-full mb-6">
                            {steps.map((step, index) => (
                                <div key={step.number} className="flex w-full items-center justify-between flex-1">
                                    <div className="flex gap-2 items-center ">
                                        <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${currentStep >= step.number
                                            ? 'bg-[#FF6300] border-[#FF6300] text-white'
                                            : 'bg-transparent border-gray-400 text-gray-400'
                                            }`}>
                                            <step.icon className="w-6 h-6" />
                                        </div>
                                        <div className="mt-2 text-left hidden lg:block">
                                            <p className={`text-base font-medium font-bangers ${currentStep >= step.number ? 'text-white' : 'text-gray-400'
                                                }`}>
                                                {step.title}
                                            </p>
                                            <p className="text-xs font-poppins text-gray-500">{step.subtitle}</p>
                                        </div>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className={`h-0.5 flex-1 mx-2 transition-all ${currentStep > step.number ? 'bg-[#FF6300]' : 'bg-gray-400'
                                            }`} />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Step 1: Industry Selection */}
                        {currentStep === 1 && (
                            <div className="text-white w-full">
                                <div className="mb-4 ">
                                    <h3 className="font-bangers text-2xl lg:text-3xl">Choississez votre industrie</h3>
                                    <p className="text-sm text-gray-300">Sélectionnez le secteur qui correspond à votre projet</p>
                                </div>
                                <div className="pt-5">
                                    <ToggleGroup
                                        type="single"
                                        variant="outline"
                                        className="flex-wrap w-full justify-start gap-3"
                                        spacing={3}
                                        size="sm"
                                        value={formData.industry}
                                        onValueChange={(value) => setFormData({ ...formData, industry: value })}
                                    >
                                        <ToggleGroupItem
                                            value="fintech"
                                            aria-label="Fintech"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <Wallet className="w-3 h-3 lg:w-4 lg:h-4" />
                                            Fintech
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="ecommerce"
                                            aria-label="E-commerce"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <ShoppingCart className="w-3 h-3 lg:w-4 lg:h-4" />
                                            E-commerce
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="healthcare"
                                            aria-label="Healthcare"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <HeartPulse className="w-3 h-3 lg:w-4 lg:h-4" />
                                            Healthcare
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="education"
                                            aria-label="Education"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <GraduationCap className="w-3 h-3 lg:w-4 lg:h-4" />
                                            Education
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="saas"
                                            aria-label="SaaS"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <Cloud className="w-3 h-3 lg:w-4 lg:h-4" />
                                            SaaS
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="logistics"
                                            aria-label="Logistique"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <Package className="w-3 h-3 lg:w-4 lg:h-4" />
                                            Logistique - Transport
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="real-estate"
                                            aria-label="Immobilier"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <Home className="w-3 h-3 lg:w-4 lg:h-4" />
                                            Immobilier
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="retail"
                                            aria-label="Retail"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <Store className="w-3 h-3 lg:w-4 lg:h-4" />
                                            Retail
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="hospitality"
                                            aria-label="Hôtellerie"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <Hotel className="w-3 h-3 lg:w-4 lg:h-4" />
                                            Hôtellerie
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="entertainment"
                                            aria-label="Divertissement"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <Film className="w-3 h-3 lg:w-4 lg:h-4" />
                                            Showbizz
                                        </ToggleGroupItem>
                                    </ToggleGroup>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Personal Information */}
                        {currentStep === 2 && (
                            <div className="text-white w-full">
                                <div className="mb-4">
                                    <h3 className="font-bangers text-2xl lg:text-3xl">Entrez vos informations</h3>
                                    <p className="text-sm text-gray-300">Partagez vos coordonnées avec nous</p>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                                    <div className="grid w-full items-center gap-2">
                                        <Label htmlFor="name" className="text-white text-sm lg:text-base">Nom & prénoms</Label>
                                        <Input
                                            type="text"
                                            id="name"
                                            placeholder="Nom & prénoms"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid w-full items-center gap-2">
                                        <Label htmlFor="email" className="text-white text-sm lg:text-base">Email</Label>
                                        <Input
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid w-full items-center gap-2">
                                        <Label htmlFor="phone" className="text-white text-sm lg:text-base">Téléphone</Label>
                                        <Input
                                            type="tel"
                                            id="phone"
                                            placeholder="Téléphone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid w-full items-center gap-2">
                                        <Label htmlFor="company" className="text-white text-sm lg:text-base">Entreprise</Label>
                                        <Input
                                            type="text"
                                            id="company"
                                            placeholder="Entreprise"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid w-full items-center gap-2">
                                        <Label htmlFor="position" className="text-white text-sm lg:text-base">Quel poste occupez-vous ?</Label>
                                        <Select
                                            value={formData.position}
                                            onValueChange={(value) => setFormData({ ...formData, position: value })}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Sélectionnez un poste" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ceo">CEO / Directeur Général</SelectItem>
                                                <SelectItem value="cto">CTO / Directeur Technique</SelectItem>
                                                <SelectItem value="manager">Manager / Chef de Projet</SelectItem>
                                                <SelectItem value="developer">Développeur</SelectItem>
                                                <SelectItem value="designer">Designer</SelectItem>
                                                <SelectItem value="marketing">Marketing / Communication</SelectItem>
                                                <SelectItem value="other">Autre</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Project Details */}
                        {currentStep === 3 && (
                            <div className="text-white w-full">
                                <div className="mb-4">
                                    <h3 className="font-bangers text-2xl lg:text-3xl">Détails du projet</h3>
                                    <p className="text-sm text-gray-300">Budget et solutions souhaitées</p>
                                </div>
                                <div className="grid grid-cols-1 gap-4 lg:gap-6">
                                    <div className="grid w-full items-center gap-2">
                                        <Label htmlFor="budget" className="text-white text-sm lg:text-base">Quel est votre budget ?</Label>
                                        <Input
                                            type="text"
                                            id="budget"
                                            placeholder="Ex: 5 000 000 - 30 000 000 FCFA"
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid w-full items-center gap-2">
                                        <Label className="text-white text-sm lg:text-base">
                                            Quelle solution voulez-vous ?
                                            <span className="text-xs text-gray-300 ml-2">(Vous pouvez sélectionner plusieurs solutions)</span>
                                        </Label>
                                        <div className="flex flex-wrap gap-3 pt-2">
                                            <ToggleGroup
                                                type="multiple"
                                                variant="outline"
                                                className="flex-wrap w-full justify-start gap-3"
                                                spacing={3}
                                                value={formData.solutions}
                                                onValueChange={(value) => setFormData({ ...formData, solutions: value })}
                                            >
                                                <ToggleGroupItem
                                                    value="mobile"
                                                    aria-label="Mobile"
                                                    className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-sm px-3 py-2"
                                                >
                                                    Mobile
                                                </ToggleGroupItem>
                                                <ToggleGroupItem
                                                    value="web"
                                                    aria-label="Web"
                                                    className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-sm px-3 py-2"
                                                >
                                                    Web
                                                </ToggleGroupItem>
                                                <ToggleGroupItem
                                                    value="iot"
                                                    aria-label="IoT"
                                                    className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-sm px-3 py-2"
                                                >
                                                    IoT
                                                </ToggleGroupItem>
                                                <ToggleGroupItem
                                                    value="geospatial"
                                                    aria-label="GeoSpacial"
                                                    className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-sm px-3 py-2"
                                                >
                                                    GeoSpacial
                                                </ToggleGroupItem>
                                                <ToggleGroupItem
                                                    value="other"
                                                    aria-label="Autres"
                                                    className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-sm px-3 py-2"
                                                >
                                                    Autres
                                                </ToggleGroupItem>
                                            </ToggleGroup>
                                        </div>
                                    </div>
                                    <div className="grid w-full items-center gap-2">
                                        <Label htmlFor="message" className="text-white text-sm lg:text-base">Message</Label>
                                        <Input
                                            type="text"
                                            id="message"
                                            placeholder="Parlez-nous de votre projet..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons - Fixed at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black  border-gray-700 lg:border-t-0">
                            <div className="flex justify-between items-center px-0 py-4">
                                <Button
                                    onClick={prevStep}
                                    disabled={currentStep === 1}
                                    variant="outline"
                                    size="sm"
                                    className="text-black border-white hover:bg-white hover:text-[#FF6300] disabled:opacity-50 disabled:cursor-not-allowed text-xs lg:text-sm px-2 py-1 lg:px-4 lg:py-2"
                                >
                                    <ArrowLeft className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                                    <span className="hidden sm:inline">Précédent</span>
                                </Button>
                                <div className="flex gap-1 lg:gap-2">
                                    {[1, 2, 3].map((step) => (
                                        <div
                                            key={step}
                                            className={`h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full transition-all ${currentStep >= step ? 'bg-[#FF6300]' : 'bg-gray-400'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <Button
                                    onClick={nextStep}
                                    disabled={currentStep === totalSteps || !canProceed()}
                                    size="sm"
                                    className="bg-[#FF6300] text-white hover:bg-[#ff7a33] disabled:opacity-50 disabled:cursor-not-allowed text-xs lg:text-sm px-2 py-1 lg:px-4 lg:py-2"
                                >
                                    <span className="hidden sm:inline">{currentStep === totalSteps ? 'Envoyer' : 'Suivant'}</span>
                                    <span className="sm:hidden">{currentStep === totalSteps ? 'Envoyer' : 'Suivant'}</span>
                                    <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1 lg:ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

