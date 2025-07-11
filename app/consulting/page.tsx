import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, FileText, ArrowRight, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy/90 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Fleet Consulting & Savings Strategy</h1>
          <p className="text-xl text-blue-100 mb-8">
            Expert guidance to optimize your fleet operations and maximize fuel savings
          </p>
          <div className="bg-orange/20 border border-orange/30 rounded-lg p-4 inline-block">
            <p className="text-lg font-semibold">Even saving 3% on fuel means thousands per year</p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Why Fleet Consulting Matters</h2>
            <p className="text-xl text-gray-600">Small improvements compound into massive savings</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-orange" />
                </div>
                <CardTitle className="text-navy">3% Fuel Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange mb-2">$1,800/year</div>
                <p className="text-gray-600">per truck with basic optimization</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-navy">7% Fuel Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">$4,200/year</div>
                <p className="text-gray-600">per truck with comprehensive strategy</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-navy">10+ Truck Fleet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">$42,000+/year</div>
                <p className="text-gray-600">total potential savings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions tailored to your fleet size and needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Driver Training Programs</h3>
                  <p className="text-gray-600">
                    Virtual and in-person training sessions covering fuel-efficient driving techniques, route planning,
                    and maintenance best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Route Analysis & Optimization</h3>
                  <p className="text-gray-600">
                    Detailed analysis of your current routes with recommendations for fuel-efficient alternatives and
                    strategic fuel stops.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Self-Audit White Papers</h3>
                  <p className="text-gray-600">
                    Comprehensive guides and checklists that allow you to identify savings opportunities within your own
                    operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Fleet consulting and route analysis"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Consulting Packages</h2>
            <p className="text-xl text-gray-600">Choose the level of support that fits your fleet</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange transition-colors">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto bg-blue-600">Starter</Badge>
                <CardTitle className="text-2xl text-navy mt-4">Quick Assessment</CardTitle>
                <CardDescription>Perfect for small fleets getting started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy">1 Hour</div>
                  <div className="text-gray-600">Consultation Call</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Current operations review
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Quick wins identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Fuel card recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Basic savings estimate
                  </li>
                </ul>
                <Button className="w-full bg-navy hover:bg-navy/90" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange shadow-lg transform scale-105">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto bg-orange">Pro</Badge>
                <CardTitle className="text-2xl text-navy mt-4">Comprehensive Review</CardTitle>
                <CardDescription>Most popular for growing fleets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy">30 Days</div>
                  <div className="text-gray-600">Fleet Analysis</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Complete fleet audit
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Route optimization analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Driver training program
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Detailed savings report
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Implementation roadmap
                  </li>
                </ul>
                <Button className="w-full bg-orange hover:bg-orange/90" asChild>
                  <Link href="/contact">Most Popular</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange transition-colors">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto bg-purple-600">Custom</Badge>
                <CardTitle className="text-2xl text-navy mt-4">Enterprise Solution</CardTitle>
                <CardDescription>For fleets with 10+ trucks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy">Custom</div>
                  <div className="text-gray-600">Tailored Program</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Everything in Pro package
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Ongoing support & monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Quarterly reviews
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Custom reporting
                  </li>
                </ul>
                <Button className="w-full bg-navy hover:bg-navy/90" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
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
                "After the 30-day fleet review, we implemented their driver training program and route optimizations.
                Our fuel costs dropped by 8% in the first quarter, saving us over $15,000."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-lg">Jennifer Martinez</div>
                <div className="text-blue-200">Fleet Operations Manager, 18-truck fleet</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange to-orange/90 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Optimize Your Fleet?</h2>
          <p className="text-xl mb-8">Book a consultation and discover your savings potential</p>
          <Button size="lg" className="bg-white text-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
            <Link href="/contact">
              Book a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
