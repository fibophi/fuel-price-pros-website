"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/starter-kit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage("Success! You'll receive your Fuel Savings Starter Kit within 48 hours.")
        setFormData({ name: "", company: "", email: "" })
        setTimeout(() => {
          onClose()
          setMessage("")
        }, 3000)
      } else {
        setMessage("Failed to submit request. Please try again.")
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-navy">Get Your Fuel Savings Starter Kit</DialogTitle>
          <DialogDescription>
            Enter your details below and we'll send you our comprehensive fuel savings guide within 48 hours.
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

          {message && (
            <div className={`text-center text-sm ${message.includes("Success") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </div>
          )}

          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1 bg-orange hover:bg-orange/90">
              {isSubmitting ? "Submitting..." : "Request Kit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
