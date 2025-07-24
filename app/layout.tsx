"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BarChart3, Truck, ArrowRight, Star } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { SavingsCalculator } from "@/components/savings-calculator"
import Head from "next/head"

const testimonials = [
  {
    quote: "Cut our fuel cost by 15% in 6 weeks. The team knows their stuff and delivered exactly what they promised.",
    author: "Dave S.",
    title: "Fleet Owner",
    initials: "DS",
    savings: "$2,100/month saved",
  },
  {
    quote:
      "Switched from our old fuel card and immediately started saving $800 per month. Wish we had found them sooner!",
    author: "Maria Rodriguez",
    title: "Transportation Manager",
    initials: "MR",
    savings: "$800/month saved",
  },
  {
    quote:
      "The fuel card discounts are real. We're saving 52¢ per gallon consistently across our entire 8-truck fleet.",
    author: "Jim Thompson",
    title: "Owner-Operator",
    initials: "JT",
    savings: "$1,200/month saved",
  },
  {
    quote:
      "Best decision we made was switching fuel cards. The savings add up fast when you're running 25 trucks daily.",
    author: "Sarah Chen",
    title: "Fleet Operations Director",
    initials: "SC",
    savings: "$4,500/month saved",
  },
  {
    quote: "The aerodynamic audit improved our MPG by 12% across the fleet. The equipment paid for itself in 4 months.",
    author: "Mike Johnson",
    title: "Fleet Manager",
    initials: "MJ",
    savings: "12% MPG improvement",
  },
]

function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <>
      <h2 className="text-3xl lg:text-4xl font-bold text-navy text-center mb-12">What Our Clients Say</h2>

      <Card className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 min-h-[280px]">
        <CardContent className="p-8">
          <div className="flex items-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 italic min-h-[120px] flex items-center">
            "{currentTestimonial.quote}"
          </blockquote>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold mr-4">
                {currentTestimonial.initials}
              </div>
              <div>
                <div className="font-semibold text-navy">{currentTestimonial.author}</div>
                <div className="text-gray-600">{currentTestimonial.title}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-orange">{currentTestimonial.savings}</div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-navy" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default function HomePage() {
  const [showCalculator, setShowCalculator] = useState(false)

  return (
    <>
      <Head>
        <link rel="canonical" href="https://fuelprice.pro/" />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy to-navy/90 text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Big Fuel Discounts. Growing Fleet Power.
                  </h1>
                  <p className="text-xl lg:text-2xl text-blue-100">
                    Helping growing fleets and owner-operators access big fleet savings—with smart tactics and smarter
                    tech.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-orange hover:bg-orange/90 text-white px-8 py-4 text-lg"
                  onClick={() => setShowCalculator(true)}
                >
                  See How Much You Can Save
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/images/fuel-handle-orange-drops.png"
                  alt="Fuel nozzle with orange drops representing fuel savings and discounts"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange text-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-lg font-bold">DISCOUNTS</div>
                  <div className="text-sm">up to</div>
                  <div className="text-3xl font-bold">80¢</div>
                  <div className="text-lg font-bold">PER GALLON</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Box Quick Value Summary */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-2 hover:border-orange transition-colors">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-navy" />
                  </div>
                  <CardTitle className="text-navy">Fuel Cards With National Discounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Access wholesale pricing at thousands of locations across North America</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-orange transition-colors">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-navy" />
                  </div>
                  <CardTitle className="text-navy">Consulting to Cut Costs & Improve MPG</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Expert analysis and driver training to maximize your fuel efficiency</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-orange transition-colors">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-4">
                    <Truck className="h-8 w-8 text-navy" />
                  </div>
                  <CardTitle className="text-navy">Aerodynamic Upgrades That Pay for Themselves</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Proven equipment that delivers measurable MPG improvements</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories Preview */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl pb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Real Results from Real Fleets</h2>
              <p className="text-xl text-gray-600">See how we've helped fleets like yours save thousands</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardHeader>
                  <Badge className="w-fit bg-purple-600">Single Truck</Badge>
                  <CardTitle className="text-2xl text-navy">$600/month</CardTitle>
                  <CardDescription>saved by
