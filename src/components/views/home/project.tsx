"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Wallet, ShoppingCart, HeartPulse, GraduationCap, Cloud, Package, Home, Store, Hotel, Film, ArrowLeft, ArrowRight, Building2, User, FileText, Shield, Zap, Landmark, Globe, HandshakeIcon } from "lucide-react"
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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoadingCarousel } from "@/components/ui/loading-carousel"
import { Checkbox } from "@/components/ui/checkbox"

import { useState, useEffect } from "react";


export default function project() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;
    const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message?: string }>({ type: 'idle' })
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

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
        message: "",
        termsAccepted: false
    });

    // Check for pre-selected industry from sessionStorage
    useEffect(() => {
        const selectedIndustry = sessionStorage.getItem('selectedIndustry');
        if (selectedIndustry) {
            setFormData(prev => ({ ...prev, industry: selectedIndustry }));
            sessionStorage.removeItem('selectedIndustry');
        }
    }, []);

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
        const budgetOnlyNumbers = /^[0-9\s]+$/.test(formData.budget.trim());
        return (
            formData.budget.trim() !== "" &&
            budgetOnlyNumbers &&
            formData.solutions.length > 0 &&
            formData.message.trim() !== "" &&
            formData.termsAccepted
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

    const handleSubmit = async () => {
        if (!siteKey) {
            setStatus({ type: 'error', message: 'Une erreur technique s\'est produite. Veuillez rafraîchir la page et réessayer.' })
            return
        }

        setStatus({ type: 'loading', message: 'Nous vérifions et envoyons votre demande de projet. Veuillez patienter quelques instants...' })

        try {
            // Générer le token reCAPTCHA
            const token = await (window as any).grecaptcha.execute(siteKey, { action: 'project' })

            // Envoyer les données
            const res = await fetch('/api/project', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, form: formData })
            })

            if (!res.ok) {
                const errorData = await res.json()

                // Si la limite est atteinte (status 429)
                if (res.status === 429) {
                    setStatus({
                        type: 'error',
                        message: 'Vous avez atteint la limite de 2 demandes de projet avec cette adresse email. Pour poursuivre, contactez-nous directement à contacts@medev-group.com ou au +225 07 89 77 60 28.'
                    })
                } else {
                    setStatus({ type: 'error', message: errorData.error || 'L\'envoi a échoué. Vérifiez votre connexion internet et réessayez. Si le problème persiste, contactez-nous au +225 07 89 77 60 28.' })
                }
                return
            }

            // Succès
            setStatus({ type: 'success', message: 'Merci pour votre confiance ! Votre demande de projet a bien été reçue. Notre équipe l\'analysera et vous contactera dans les 24 à 48 heures pour discuter des prochaines étapes.' })

            // Réinitialiser le formulaire après 3 secondes
            setTimeout(() => {
                setFormData({
                    industry: "",
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    position: "",
                    budget: "",
                    solutions: [],
                    message: "",
                    termsAccepted: false
                })
                setCurrentStep(1)
                setStatus({ type: 'idle' })
            }, 3000)
        } catch (error) {
            setStatus({ type: 'error', message: 'Une erreur inattendue s\'est produite lors de l\'envoi. Veuillez réessayer ou nous contacter directement au +225 07 89 77 60 28.' })
        }
    };

    return (
        <>
        {/* Dialog Modal pour les messages */}
        <Dialog open={status.type !== 'idle'} onOpenChange={(open) => !open && status.type !== 'loading' && setStatus({ type: 'idle' })}>
            <DialogContent className="sm:max-w-md" showCloseButton={status.type !== 'loading'}>
                <DialogHeader className="flex flex-col items-center text-center gap-4">
                    {/* Icon */}
                    {status.type === 'success' && (
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    )}
                    {status.type === 'error' && (
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    )}
                    {status.type === 'loading' && (
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="animate-spin w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                        </div>
                    )}

                    <DialogTitle className="font-bangers text-2xl">
                        {status.type === 'success' && 'Demande envoyée !'}
                        {status.type === 'error' && 'Une erreur est survenue'}
                        {status.type === 'loading' && 'Traitement en cours'}
                    </DialogTitle>
                    <DialogDescription className="text-base">
                        {status.message}
                    </DialogDescription>
                </DialogHeader>

                {/* Close Button */}
                {status.type !== 'loading' && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setStatus({ type: 'idle' })}
                            className="bg-[#FF6300] hover:bg-[#ff7a33] text-white px-6 py-2 rounded-full font-bangers text-lg transition-colors"
                        >
                            Fermer
                        </button>
                    </div>
                )}
            </DialogContent>
        </Dialog>

        <div id="project-section">
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

            <div className="relative w-full bg-black flex flex-col  lg:flex-row gap-4 lg:gap-2 lg:h-170 overflow-hidden mt-40">
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
                <div className="relative z-10 flex flex-col  lg:flex-row w-full px-4 sm:px-8 lg:px-14 py-18 lg:py-14 gap-8 lg:gap-30">
                    <div className="flex flex-col justify-between w-full lg:w-1/3 gap-6 lg:gap-8">
                        <div className="space-y-4">
                            <h3 className="font-bangers text-2xl sm:text-5xl lg:text-6xl text-white leading-none">Prêts à discuter
                                de votre projet avec nous ?</h3>
                            <p className="text-white text-sm sm:text-base lg:flex hidden">
                                Parlons de la façon dont nous pouvons concevoir une expérience utilisateur qui non seulement soit esthétiquement réussie, mais qui génère également une réelle croissance pour votre produit.

                            </p>
                        </div>
                        <div className="lg:flex flex-col gap-4 hidden">

                            <div className="flex -space-x-3">
                                <Avatar className="ring-2 ring-background border-2 border-white bg-white">
                                    <AvatarImage src="/assets/logo-brand/logo-mtnd.png" alt="MTN" className="object-contain p-1" />
                                    <AvatarFallback className="bg-secondary text-white font-bold">MT</AvatarFallback>
                                </Avatar>
                                <Avatar className="ring-2 ring-background border-2 border-white bg-white">
                                    <AvatarImage src="/assets/logo-brand/logo-agl.png" alt="AGL" className="object-contain p-1" />
                                    <AvatarFallback className="bg-secondary text-white font-bold">AG</AvatarFallback>
                                </Avatar>
                                <Avatar className="ring-2 ring-background border-2 border-white bg-white">
                                    <AvatarImage src="/assets/logo-brand/logo-sitarail.png" alt="Sitarail" className="object-contain p-1" />
                                    <AvatarFallback className="bg-secondary text-white font-bold">SR</AvatarFallback>
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
                                        <ToggleGroupItem
                                            value="insurance"
                                            aria-label="Assurances"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <Shield className="w-3 h-3 lg:w-4 lg:h-4" />
                                            Assurances
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="energy"
                                            aria-label="Énergies"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <Zap className="w-3 h-3 lg:w-4 lg:h-4" />
                                            Énergies
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="government"
                                            aria-label="Gouvernement"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <Landmark className="w-3 h-3 lg:w-4 lg:h-4" />
                                            Gouvernement & Instituts publics
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="multinational"
                                            aria-label="Multinationales"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <Globe className="w-3 h-3 lg:w-4 lg:h-4" />
                                            Multinationales
                                        </ToggleGroupItem>
                                        <ToggleGroupItem
                                            value="ngo"
                                            aria-label="ONG"
                                            className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
                                        >
                                            <HandshakeIcon className="w-3 h-3 lg:w-4 lg:h-4" />
                                            ONG & Organisations internationales
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
                                        <Label htmlFor="budget" className="text-white text-sm lg:text-base">Quel est votre budget ? (chiffres uniquement)</Label>
                                        <div className="relative">
                                            <Input
                                                type="text"
                                                id="budget"
                                                placeholder="Ex: 5000000"
                                                value={formData.budget}
                                                onChange={(e) => {
                                                    // Retirer tout sauf les chiffres
                                                    const digitsOnly = e.target.value.replace(/[^0-9]/g, '');

                                                    // Formater avec des espaces tous les 3 chiffres
                                                    const formatted = digitsOnly.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

                                                    setFormData({ ...formData, budget: formatted });
                                                }}
                                                className={!formData.budget.trim() || /^[0-9\s]+$/.test(formData.budget.trim()) ? "" : "border-red-500"}
                                            />
                                            {formData.budget && (
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 text-sm pointer-events-none">
                                                    FCFA
                                                </span>
                                            )}
                                        </div>
                                        {formData.budget.trim() && !/^[0-9\s]+$/.test(formData.budget.trim()) && (
                                            <p className="text-red-500 text-xs mt-1">Le budget doit contenir uniquement des chiffres</p>
                                        )}
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
                                                    value="spatial"
                                                    aria-label="Ingénierie spatiale"
                                                    className="bg-white text-black hover:bg-[#FF6300] hover:text-white data-[state=on]:bg-[#FF6300] data-[state=on]:text-white transition-colors text-xs lg:text-sm px-3 py-2"
                                                >
                                                    Ingénierie spatiale
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
                                    <div className="flex items-start gap-3">
                                        <Checkbox
                                            id="terms"
                                            checked={formData.termsAccepted}
                                            onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: !!checked })}
                                        />
                                        <div className="grid gap-2">
                                            <Label htmlFor="terms" className="text-white text-sm lg:text-base">J’accepte les conditions générales</Label>
                                            <p className="text-muted-foreground text-sm">En cochant cette case, vous acceptez les conditions générales.</p>
                                        </div>
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
                                    onClick={currentStep === totalSteps ? handleSubmit : nextStep}
                                    disabled={(currentStep === totalSteps && status.type === 'loading') || !canProceed()}
                                    size="sm"
                                    className="bg-[#FF6300] text-white hover:bg-[#ff7a33] disabled:opacity-50 disabled:cursor-not-allowed text-xs lg:text-sm px-2 py-1 lg:px-4 lg:py-2"
                                >
                                    <span className="hidden sm:inline">
                                        {currentStep === totalSteps
                                            ? (status.type === 'loading' ? 'Envoi...' : 'Envoyer')
                                            : 'Suivant'}
                                    </span>
                                    <span className="sm:hidden">
                                        {currentStep === totalSteps
                                            ? (status.type === 'loading' ? 'Envoi...' : 'Envoyer')
                                            : 'Suivant'}
                                    </span>
                                    <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1 lg:ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
