"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import ReCAPTCHA from "react-google-recaptcha"

interface StarterKitPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function StarterKitPopup({ isOpen, onClose }: StarterKitPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  })
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!recaptchaToken) {
      setMessage("Please complete the reCAPTCHA")
      return
    }

    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/starter-kit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      })

      if (response.ok) {
        setMessage("Success! Check your email for the Fuel Savings Starter Kit.")
        setFormData({ name: "", company: "", email: "" })
        setRecaptchaToken(null)
        setTimeout(() => {
          onClose()
          setMessage("")
        }, 3000)
      } else {
        setMessage("Failed to send starter kit. Please try again.")
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md z-50">
        <DialogHeader>
          <DialogTitle className="text-navy">Get Your Fuel Savings Starter Kit</DialogTitle>
          <DialogDescription>
            Enter your details below to receive our comprehensive fuel savings guide via email.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="popup-name">Name *</Label>
            <Input
              id="popup-name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-company">Company Name *</Label>
            <Input
              id="popup-company"
              value={formData.company}
              onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-email">Email Address *</Label>
            <Input
              id="popup-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>

          <div className="flex justify-center">
            <div style={{ zIndex: 9999 }}>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={setRecaptchaToken}
                style={{ zIndex: 9999 }}
              />
            </div>
          </div>

          {message && (
            <div className={`text-center text-sm ${message.includes("Success") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </div>
          )}

          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !recaptchaToken}
              className="flex-1 bg-orange hover:bg-orange/90"
            >
              {isSubmitting ? "Sending..." : "Get Kit"}
            </Button>
          </div>
        </form>
      </DialogContent>

      {/* Add custom CSS to ensure reCAPTCHA appears on top */}
      <style jsx global>{`
        .grecaptcha-badge {
          z-index: 10000 !important;
        }
        
        iframe[src*="recaptcha"] {
          z-index: 10000 !important;
        }
        
        div[style*="z-index: 2000000000"] {
          z-index: 10000 !important;
        }
        
        div[style*="z-index: 2000000001"] {
          z-index: 10001 !important;
        }
        
        div[style*="z-index: 2000000002"] {
          z-index: 10002 !important;
        }
      `}</style>
    </Dialog>
  )
}
