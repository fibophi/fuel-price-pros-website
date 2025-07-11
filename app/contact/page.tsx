"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"
import { StarterKitPopup } from "@/components/starter-kit-popup"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    fleetSize: "",
    phone: "",
    email: "",
    operation: "",
    interests: [] as string[],
    message: "",
  })
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [errorDetails, setErrorDetails] = useState("")
  const [showStarterKitPopup, setShowStarterKitPopup] = useState(false)

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, interest],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((i) => i !== interest),
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!recaptchaToken) {
      setSubmitMessage("Please complete the reCAPTCHA")
      setErrorDetails("")
      return
    }

    setIsSubmitting(true)
    setSubmitMessage("")
    setErrorDetails("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage("Thank you for your inquiry! We'll be in touch within 24 hours.")
        setFormData({
          name: "",
          company: "",
          fleetSize: "",
          phone: "",
          email: "",
          operation: "",
          interests: [],
          message: "",
        })
        setRecaptchaToken(null)
      } else {
        setSubmitMessage(data.error || "Failed to send message. Please try again or call us directly.")
        setErrorDetails(data.details || data.fullError || "")
        console.error("Server error:", data)
      }
    } catch (error) {
      setSubmitMessage("Network error. Please check your connection and try again.")
      setErrorDetails(error instanceof Error ? error.message : String(error))
      console.error("Network error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy/90 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Let's Start Saving Your Fleet Money</h1>
          <p className="text-xl text-blue-100">
            Get a free analysis and see how much you could be saving on fuel costs
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Get Your Free Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll provide a customized savings analysis for your fleet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fleetSize">Fleet Size *</Label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, fleetSize: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your fleet size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 truck</SelectItem>
                        <SelectItem value="2-5">2-5 trucks</SelectItem>
                        <SelectItem value="6-15">6-15 trucks</SelectItem>
                        <SelectItem value="16+">16+ trucks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="operation">Area of Operation *</Label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, operation: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area of operation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Main Interest (check all that apply)</Label>
                    <div className="space-y-2">
                      {[
                        "Fuel Card",
                        "Consulting",
                        "Aerodynamic Equipment",
                        "Driver Training",
                        "Route Optimization",
                      ].map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                          />
                          <Label htmlFor={interest} className="text-sm font-normal">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message or Questions</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your current fuel costs, routes, or any specific challenges you're facing..."
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      rows={4}
                    />
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                      onChange={setRecaptchaToken}
                    />
                  </div>

                  {submitMessage && (
                    <div className="space-y-2">
                      <div
                        className={`text-center text-sm ${submitMessage.includes("Thank you") ? "text-green-600" : "text-red-600"}`}
                      >
                        {submitMessage}
                      </div>
                      {errorDetails && (
                        <div className="text-xs text-gray-500 text-center bg-gray-50 p-2 rounded">
                          <strong>Technical details:</strong> {errorDetails}
                        </div>
                      )}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || !recaptchaToken}
                    className="w-full bg-orange hover:bg-orange/90 text-lg py-3"
                  >
                    {isSubmitting ? "Sending..." : "Get Started"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-navy">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-600">647-362-6649</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@fuelprice.pro</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange" />
                    <div>
                      <div className="font-semibold">Service Area</div>
                      <div className="text-gray-600">United States & Canada</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange" />
                    <div>
                      <div className="font-semibold">Response Time</div>
                      <div className="text-gray-600">Within 24 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-navy to-navy/90 text-white">
                <CardHeader>
                  <CardTitle>Fuel Savings Starter Kit</CardTitle>
                  <CardDescription className="text-blue-100">
                    Download our comprehensive guide to reducing fuel costs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-100 mb-4">
                    <li>• 10 proven strategies to cut fuel costs</li>
                    <li>• Driver training checklist</li>
                    <li>• Route optimization worksheet</li>
                    <li>• Fuel card comparison guide</li>
                  </ul>
                  <Button className="w-full bg-orange hover:bg-orange/90" onClick={() => setShowStarterKitPopup(true)}>
                    Click here to get the kit!
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-orange border-2">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy mb-2">Average Fleet Savings</div>
                    <div className="text-4xl font-bold text-orange mb-2">$2,100</div>
                    <div className="text-gray-600">per truck per year</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <StarterKitPopup isOpen={showStarterKitPopup} onClose={() => setShowStarterKitPopup(false)} />
    </div>
  )
}
