'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

interface ApplyDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ApplyDialog({ open, onOpenChange }: ApplyDialogProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    portfolioUrl: '',
    message: '',
    acceptTerms: false,
  })
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message?: string }>({ type: 'idle' })
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const submit = async () => {
    if (!form.acceptTerms) {
      setStatus({ type: 'error', message: 'Veuillez accepter les CGU pour continuer.' })
      return
    }
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Veuillez remplir nom, email et votre message.' })
      return
    }
    if (!siteKey) {
      setStatus({ type: 'error', message: 'Une erreur technique s’est produite. Réessayez plus tard.' })
      return
    }
    try {
      setStatus({ type: 'loading', message: 'Envoi de votre candidature...' })
      const token = await (window as any).grecaptcha.execute(siteKey, { action: 'contact' })
      const fd = new FormData()
      fd.append('token', token)
      fd.append('name', form.name)
      fd.append('phone', form.phone)
      fd.append('email', form.email)
      fd.append('message', form.message)
      fd.append('contactReason', 'recrutement')
      fd.append('recruitmentType', '')
      fd.append('portfolioUrl', form.portfolioUrl)
      fd.append('acceptTerms', String(form.acceptTerms))
      if (cvFile) fd.append('cvFile', cvFile)

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: fd,
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus({ type: 'error', message: data.error || 'L’envoi a échoué. Vérifiez votre connexion et réessayez.' })
        return
      }
      setStatus({ type: 'success', message: 'Votre candidature a bien été envoyée. Nous vous répondrons sous 24-48h.' })
      setForm({ name: '', email: '', phone: '', portfolioUrl: '', message: '', acceptTerms: false })
      setCvFile(null)
      setTimeout(() => {
        setStatus({ type: 'idle' })
        onOpenChange(false)
      }, 2500)
    } catch (e) {
      setStatus({ type: 'error', message: 'Une erreur inattendue s’est produite. Réessayez plus tard.' })
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-bangers text-2xl">Postuler maintenant</DialogTitle>
          <DialogDescription className="font-nunito">
            Renseignez vos coordonnées, ajoutez votre CV et (optionnel) votre portfolio.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input id="name" name="name" value={form.name} onChange={onChange} placeholder="Votre nom" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="+225 ..." />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="vous@exemple.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvFile">CV (PDF, DOC)</Label>
            <Input id="cvFile" type="file" accept=".pdf,.doc,.docx" onChange={(e) => {
              const f = e.target.files?.[0] || null
              setCvFile(f)
            }} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="portfolioUrl">URL Portfolio (optionnel)</Label>
            <Input id="portfolioUrl" name="portfolioUrl" value={form.portfolioUrl} onChange={onChange} placeholder="https://..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" value={form.message} onChange={onChange} placeholder="Expliquez brièvement votre profil et vos motivations" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="acceptTerms" checked={form.acceptTerms} onCheckedChange={(v) => setForm(prev => ({ ...prev, acceptTerms: !!v }))} />
            <Label htmlFor="acceptTerms">J’accepte les CGU</Label>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Annuler</Button>
          <Button className="bg-secondary text-white" onClick={submit} disabled={status.type === 'loading'}>
            {status.type === 'loading' ? 'Envoi...' : 'Envoyer'}
          </Button>
        </div>

        {status.type !== 'idle' && (
          <div className={`mt-3 text-sm font-nunito ${status.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
            {status.message}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
