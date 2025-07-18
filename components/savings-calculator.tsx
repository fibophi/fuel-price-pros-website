"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calculator, TrendingUp, ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

interface SavingsCalculatorProps {
  isOpen: boolean
  onClose: () => void
}

export function SavingsCalculator({ isOpen, onClose }: SavingsCalculatorProps) {
  const [formData, setFormData] = useState({
    fleetSize: "",
    milesPerMonth: "",
    currentMPG: "",
    currentFuelPrice: "",
    country: "",
  })

  const [results, setResults] = useState<{
    monthlyGallons: number
    discountAmount: number
    discountUnit: string
    monthlySavings: number
    annualSavings: number
    fleetMonthlySavings: number
    fleetAnnualSavings: number
    currency: string
  } | null>(null)

  // Discount calculation based on fleet size and country
  const getDiscount = (fleetSize: number, country: string) => {
    if (country === "canada") {
      // Canada discounts in cents per litre
      if (fleetSize === 1) return 3
      if (fleetSize <= 3) return 5
      if (fleetSize <= 5) return 7
      if (fleetSize <= 10) return 9
      if (fleetSize <= 15) return 11
      if (fleetSize <= 20) return 12
      return 14 // 25+ trucks
    } else {
      // USA discounts in cents per gallon
      if (fleetSize === 1) return 10
      if (fleetSize <= 3) return 18
      if (fleetSize <= 5) return 25
      if (fleetSize <= 10) return 35
      if (fleetSize <= 15) return 45
      if (fleetSize <= 20) return 55
      return 65 // 25+ trucks
    }
  }

  const calculateSavings = () => {
    const fleetSize = Number.parseInt(formData.fleetSize) || 1
    const miles = Number.parseInt(formData.milesPerMonth) || 0
    const mpg = Number.parseFloat(formData.currentMPG) || 6
    const currentPrice = Number.parseFloat(formData.currentFuelPrice) || (formData.country === "canada" ? 1.45 : 4.25)
    const country = formData.country

    // Calculate gallons per month per truck
    const monthlyGallons = miles / mpg

    // Get discount based on fleet size and country
    const discountCents = getDiscount(fleetSize, country)
    const discountAmount = discountCents / 100 // Convert cents to dollars

    let monthlySavingsPerTruck: number
    let currency: string
    let discountUnit: string

    if (country === "canada") {
      // Canada: discount is per litre, need to convert gallons to litres
      const monthlyLitres = monthlyGallons * 3.78541 // 1 gallon = 3.78541 litres
      monthlySavingsPerTruck = monthlyLitres * discountAmount
      currency = "CAD"
      discountUnit = "per litre"
    } else {
      // USA: discount is per gallon
      monthlySavingsPerTruck = monthlyGallons * discountAmount
      currency = "USD"
      discountUnit = "per gallon"
    }

    const annualSavingsPerTruck = monthlySavingsPerTruck * 12
    const fleetMonthlySavings = monthlySavingsPerTruck * fleetSize
    const fleetAnnualSavings = annualSavingsPerTruck * fleetSize

    setResults({
      monthlyGallons,
      discountAmount: discountCents,
      discountUnit,
      monthlySavings: monthlySavingsPerTruck,
      annualSavings: annualSavingsPerTruck,
      fleetMonthlySavings,
      fleetAnnualSavings,
      currency,
    })
  }

  const resetCalculator = () => {
    setFormData({
      fleetSize: "",
      milesPerMonth: "",
      currentMPG: "",
      currentFuelPrice: "",
      country: "",
    })
    setResults(null)
  }

  const getFleetSizeLabel = (size: string) => {
    const sizeNum = Number.parseInt(size)
    if (sizeNum === 1) return "1 truck"
    if (sizeNum <= 25) return `${size} trucks`
    return "25+ trucks"
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-navy flex items-center">
            <Calculator className="h-6 w-6 mr-2 text-orange" />
            Fuel Savings Calculator
          </DialogTitle>
          <DialogDescription>See how much you could save with our fuel card program</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {!results ? (
            // Calculator Form
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="country" className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-orange" />
                  Primary Fueling Location
                </Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, country: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary fueling location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">🇺🇸 United States</SelectItem>
                    <SelectItem value="canada">🇨🇦 Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fleetSize">Number of Trucks</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, fleetSize: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fleet size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 truck</SelectItem>
                      <SelectItem value="2">2 trucks</SelectItem>
                      <SelectItem value="3">3 trucks</SelectItem>
                      <SelectItem value="4">4 trucks</SelectItem>
                      <SelectItem value="5">5 trucks</SelectItem>
                      <SelectItem value="10">10 trucks</SelectItem>
                      <SelectItem value="15">15 trucks</SelectItem>
                      <SelectItem value="20">20 trucks</SelectItem>
                      <SelectItem value="25">25+ trucks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="milesPerMonth">Miles per Month (per truck)</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, milesPerMonth: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select monthly miles" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5000">5,000 miles</SelectItem>
                      <SelectItem value="7500">7,500 miles</SelectItem>
                      <SelectItem value="10000">10,000 miles</SelectItem>
                      <SelectItem value="12500">12,500 miles</SelectItem>
                      <SelectItem value="15000">15,000 miles</SelectItem>
                      <SelectItem value="20000">20,000+ miles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentMPG">Current MPG</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, currentMPG: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select MPG" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 MPG</SelectItem>
                      <SelectItem value="5.5">5.5 MPG</SelectItem>
                      <SelectItem value="6">6 MPG</SelectItem>
                      <SelectItem value="6.5">6.5 MPG</SelectItem>
                      <SelectItem value="7">7 MPG</SelectItem>
                      <SelectItem value="7.5">7.5 MPG</SelectItem>
                      <SelectItem value="8">8+ MPG</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentFuelPrice">
                    Current Fuel Price ({formData.country === "canada" ? "$/litre" : "$/gallon"})
                  </Label>
                  <Input
                    id="currentFuelPrice"
                    type="number"
                    step="0.01"
                    placeholder={formData.country === "canada" ? "1.45" : "4.25"}
                    value={formData.currentFuelPrice}
                    onChange={(e) => setFormData((prev) => ({ ...prev, currentFuelPrice: e.target.value }))}
                  />
                </div>
              </div>

              {/* Show discount preview */}
              {formData.fleetSize && formData.country && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-800">
                      Your {getFleetSizeLabel(formData.fleetSize)} fleet qualifies for{" "}
                      <strong>
                        up to {getDiscount(Number.parseInt(formData.fleetSize), formData.country)}¢ discount
                      </strong>{" "}
                      {formData.country === "canada" ? "per litre" : "per gallon"}
                    </span>
                  </div>
                </div>
              )}

              <Button
                onClick={calculateSavings}
                className="w-full bg-orange hover:bg-orange/90 text-lg py-3"
                disabled={!formData.fleetSize || !formData.milesPerMonth || !formData.currentMPG || !formData.country}
              >
                Calculate My Savings
                <Calculator className="ml-2 h-5 w-5" />
              </Button>
            </div>
          ) : (
            // Results Display
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-navy mb-2">Your Potential Savings</h3>
                <p className="text-gray-600">
                  Based on up to {results.discountAmount}¢ {results.discountUnit} discount for your{" "}
                  {getFleetSizeLabel(formData.fleetSize)} fleet
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-2 border-orange">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-lg text-navy">Per Truck Savings</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2">
                      <div>
                        <div className="text-2xl font-bold text-orange">
                          ${results.monthlySavings.toFixed(0)} {results.currency}
                        </div>
                        <div className="text-sm text-gray-600">per month</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-green-600">
                          ${results.annualSavings.toFixed(0)} {results.currency}
                        </div>
                        <div className="text-sm text-gray-600">per year</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-500 bg-green-50">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-lg text-navy">Total Fleet Savings</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2">
                      <div>
                        <div className="text-3xl font-bold text-green-600">
                          ${results.fleetMonthlySavings.toFixed(0)} {results.currency}
                        </div>
                        <div className="text-sm text-gray-600">per month</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-700">
                          ${results.fleetAnnualSavings.toFixed(0)} {results.currency}
                        </div>
                        <div className="text-sm text-gray-600">per year</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-blue-600 mt-1" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">These are potential fuel card savings!</p>
                    <p>Actual savings depend on qualification and may include:</p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>Route optimization consulting</li>
                      <li>Driver training programs</li>
                      <li>Aerodynamic equipment upgrades</li>
                    </ul>
                  </div>
                </div>
              </div>

              {formData.country === "canada" && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-orange mt-1" />
                    <div className="text-sm text-orange-800">
                      <p className="font-semibold mb-1">🇨🇦 Canada Calculation Note:</p>
                      <p>
                        Your discount is {results.discountAmount}¢ per litre. We've converted your fuel consumption from
                        gallons to litres for accurate Canadian savings calculations.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="text-xs text-gray-600 text-center">
                  <strong>Disclaimer:</strong> Savings estimates are based on maximum available discounts. Actual
                  discounts subject to credit approval and program qualification. Individual results may vary based on
                  routes, fuel usage, and program terms.
                </p>
              </div>

              <div className="flex gap-3">
                <Button onClick={resetCalculator} variant="outline" className="flex-1 bg-transparent">
                  Calculate Again
                </Button>
                <Button className="flex-1 bg-orange hover:bg-orange/90" asChild onClick={onClose}>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
