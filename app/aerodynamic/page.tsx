import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, DollarSign, TrendingUp, CheckCircle } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function AerodynamicPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy/90 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Aerodynamic Add-Ons That Pay for Themselves</h1>
          <p className="text-xl text-blue-100 mb-8">
            Proven equipment that delivers measurable MPG improvements and real ROI
          </p>
          <div className="bg-orange/20 border border-orange/30 rounded-lg p-4 inline-block">
            <p className="text-lg font-semibold">Average payback period: 6-12 months</p>
          </div>
        </div>
      </section>

      {/* The Science Behind Aerodynamics */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">The Science Behind the Savings</h2>
            <p className="text-xl text-gray-600">
              Computational fluid dynamics shows exactly how aerodynamic improvements reduce drag
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-navy mb-3">What You're Looking At:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong className="text-blue-600">Top truck:</strong> Standard configuration with maximum drag
                  </li>
                  <li>
                    • <strong className="text-green-600">Middle truck:</strong> Partial aerodynamic improvements
                  </li>
                  <li>
                    • <strong className="text-green-700">Bottom truck:</strong> Full aerodynamic package with minimal
                    drag
                  </li>
                  <li>
                    • <strong className="text-red-600">Red/orange areas:</strong> Wasted fuel from air turbulence
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-navy mb-3">The Bottom Line:</h3>
                <p className="text-gray-700">
                  Every red zone behind your truck is wasted fuel. Our aerodynamic equipment converts those high-drag
                  areas into smooth, fuel-saving airflow.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-navy mb-3">Real-World Impact:</h3>
                <p className="text-gray-700">
                  <strong>5-11% MPG improvement</strong> translates to <strong>$3,500-8,000+ annual savings</strong> per
                  truck.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/aerodynami-improvements-graphic.png"
                alt="Aerodynamic comparison showing three truck configurations: standard truck with high drag, partially improved truck, and fully optimized truck with minimal drag"
                width={600}
                height={700}
                className="rounded-lg shadow-lg border border-gray-200"
              />
              <div className="absolute -bottom-4 -right-4 bg-navy text-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">CFD Analysis</div>
                <div className="text-xs text-blue-200">Progressive Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Supply */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">What We Supply</h2>
            <p className="text-xl text-gray-600">Professional-grade aerodynamic equipment with proven results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 hover:border-orange transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-navy">Trailer Skirts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Reduce drag underneath trailers</p>
                <Badge className="bg-green-600">3-7% MPG gain</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-orange transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-navy">Vortex Generators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Improve airflow over trailer surfaces</p>
                <Badge className="bg-green-600">2-4% MPG gain</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-orange transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-navy">Wheel Covers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Smooth airflow around wheels</p>
                <Badge className="bg-green-600">1-3% MPG gain</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-orange transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-navy">Aero Mudflaps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Reduce rear turbulence</p>
                <Badge className="bg-green-600">1-2% MPG gain</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 italic">More aerodynamic solutions coming soon!</p>
          </div>
        </div>
      </section>

      {/* Savings Table */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">MPG Improvements & Savings</h2>
            <p className="text-xl text-gray-600">Real numbers based on actual installations</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Aerodynamic Add-On</th>
                  <th className="px-6 py-4 text-center">MPG Improvement</th>
                  <th className="px-6 py-4 text-center">Monthly Savings*</th>
                  <th className="px-6 py-4 text-center">Annual Savings*</th>
                  <th className="px-6 py-4 text-center">Payback Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Trailer Skirts</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">1.5-3%</td>
                  <td className="px-6 py-4 text-center">$89-177</td>
                  <td className="px-6 py-4 text-center">$1,068-2,124</td>
                  <td className="px-6 py-4 text-center text-orange font-semibold">12-18 months</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Vortex Generators</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">2-6%</td>
                  <td className="px-6 py-4 text-center">$118-354</td>
                  <td className="px-6 py-4 text-center">$1,416-4,248</td>
                  <td className="px-6 py-4 text-center text-orange font-semibold">3-9 months</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Wheel Covers (Set)</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">1-1.5%</td>
                  <td className="px-6 py-4 text-center">$59-89</td>
                  <td className="px-6 py-4 text-center">$708-1,068</td>
                  <td className="px-6 py-4 text-center text-orange font-semibold">6-9 months</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Aero Mudflaps</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">0.5-1%</td>
                  <td className="px-6 py-4 text-center">$30-59</td>
                  <td className="px-6 py-4 text-center">$360-708</td>
                  <td className="px-6 py-4 text-center text-orange font-semibold">4-8 months</td>
                </tr>
                <tr className="bg-orange-50 font-semibold">
                  <td className="px-6 py-4">Complete Package</td>
                  <td className="px-6 py-4 text-center text-green-700">5-11.5%</td>
                  <td className="px-6 py-4 text-center">$295-679</td>
                  <td className="px-6 py-4 text-center">$3,540-8,148</td>
                  <td className="px-6 py-4 text-center text-orange">12-24 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              *Based on 10,000 miles/month, 6 MPG baseline, $4.25/gallon fuel cost
            </p>
          </div>
        </div>
      </section>

      {/* Installation & Support */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Professional Installation & Support</h2>
            <p className="text-xl text-gray-600">We handle everything from quote to installation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-navy">Free Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We evaluate your trucks and recommend the best aerodynamic solutions for maximum ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-orange" />
                </div>
                <CardTitle className="text-navy">Expert Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Certified technicians install all equipment to manufacturer specifications with minimal downtime.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-navy">Performance Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We help you monitor and measure the actual MPG improvements and savings achieved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real Results</h2>
          </div>
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <blockquote className="text-xl lg:text-2xl italic mb-6 text-center text-orange">
                "We installed trailer skirts and vortex generators on our 15-truck fleet. The equipment paid for itself
                in 9 months, and we're now saving over $4,000 monthly on fuel costs."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-lg text-blue-200">Robert Chen</div>
                <div className="text-blue-200">Fleet Owner, Regional Freight Company</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange to-orange/90 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Improve Your MPG?</h2>
          <p className="text-xl mb-8">
            Get a free assessment and see which aerodynamic upgrades are right for your fleet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange px-8 py-4 text-lg font-semibold bg-transparent"
              asChild
            >
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
