import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy/90 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Fuel Price Pros</h1>
          <p className="text-xl text-blue-100 mb-8">
            Leveling the playing field for growing fleets across North America
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-8">Our Mission</h2>
          <div className="bg-orange-50 border-l-4 border-orange p-8 rounded-r-lg">
            <p className="text-2xl lg:text-3xl font-semibold text-navy leading-relaxed">
              "To level the playing field for growing fleets. Period."
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Who We Are</h2>
            <p className="text-xl text-gray-600">Industry insiders with a passion for helping fleets succeed</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a team of trucking industry insiders with over{" "}
                <strong className="text-navy">3 decades of combined experience</strong> managing fuel and fleet
                expenses. We understand how margins work—and where they're wasted.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We've helped fleets from <strong className="text-orange">2 to 200 trucks</strong> optimize their
                operations, reduce costs, and improve profitability. Our team has worked inside major carriers, fuel
                companies, and logistics operations, giving us unique insights into where the real savings opportunities
                exist.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                What sets us apart is our commitment to transparency and results. We don't just sell products or
                services—we partner with you to achieve measurable improvements in your bottom line.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="FleetSaver team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Experience */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Our Experience</h2>
            <p className="text-xl text-gray-600">Decades of industry knowledge working for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-navy">30+ Years</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Combined industry experience across fuel, logistics, and fleet management
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-navy">500+ Fleets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Successfully helped optimize operations and reduce costs</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-orange" />
                </div>
                <CardTitle className="text-navy">$2.5M+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">In documented annual savings achieved for our clients</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-navy">2-200 Trucks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fleet size range we've successfully worked with</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600">How we help growing fleets compete with the big guys</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange transition-colors">
              <CardHeader>
                <Badge className="w-fit bg-blue-600 mb-4">Step 1</Badge>
                <CardTitle className="text-navy">Analyze</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We dive deep into your current operations, routes, fuel usage, and costs to identify hidden
                  opportunities for savings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange transition-colors">
              <CardHeader>
                <Badge className="w-fit bg-orange mb-4">Step 2</Badge>
                <CardTitle className="text-navy">Optimize</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We implement proven strategies including fuel card programs, route optimization, driver training, and
                  aerodynamic upgrades.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange transition-colors">
              <CardHeader>
                <Badge className="w-fit bg-green-600 mb-4">Step 3</Badge>
                <CardTitle className="text-navy">Measure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We track results and provide ongoing support to ensure you achieve and maintain the promised savings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Why Choose Fuel Price Pros?</h2>
            <p className="text-xl text-gray-600">What makes us different from other fuel and fleet consultants</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Industry Insiders</h3>
                  <p className="text-gray-600">
                    We've worked inside major carriers and fuel companies. We know where the real savings are hiding
                    because we've been on both sides of the table.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Results-Focused</h3>
                  <p className="text-gray-600">
                    We don't get paid unless you save money. Our success is directly tied to your success, ensuring
                    we're always working in your best interest.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Growing Fleet Specialists</h3>
                  <p className="text-gray-600">
                    We specialize in fleets of 2-50 trucks. We understand the unique challenges of growing operations
                    and tailor our solutions accordingly.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Comprehensive Solutions</h3>
                  <p className="text-gray-600">
                    From fuel cards to aerodynamic equipment to driver training, we offer a complete suite of
                    cost-reduction strategies under one roof.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    No hidden fees, no long-term contracts, no surprises. We believe in straightforward pricing that
                    aligns with the value we deliver.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    We don't disappear after implementation. We provide ongoing support and monitoring to ensure your
                    savings continue long-term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange to-orange/90 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Level the Playing Field?</h2>
          <p className="text-xl mb-8">
            Join hundreds of growing fleets who are already saving thousands with our proven strategies
          </p>
          <Button size="lg" className="bg-white text-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
