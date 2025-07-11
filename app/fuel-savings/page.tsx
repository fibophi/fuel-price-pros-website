import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, CreditCard, ArrowRight, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FuelSavingsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy/90 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Fuel Cards That Actually Save Money</h1>
          <p className="text-xl text-blue-100 mb-8">
            Access wholesale pricing at thousands of locations across North America
          </p>
        </div>
      </section>

      {/* How Our Fuel Card Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy text-center mb-12">How Our Fuel Card Works</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Extensive Partner Network</h3>
                  <p className="text-gray-600">
                    Access to over 15,000 locations across the US and Canada, including major truck stops and retail
                    stations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Average 15-25¢ CPM Discounts</h3>
                  <p className="text-gray-600">
                    Consistent savings that add up to thousands per month for growing fleets.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CreditCard className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Simple Onboarding</h3>
                  <p className="text-gray-600">
                    Get your cards in 3-5 business days with no setup fees or long-term contracts.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Fuel card network map"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Retail vs Discount Table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy text-center mb-12">See the Difference</h2>

          <Card className="overflow-hidden">
            <CardHeader className="bg-navy text-white text-center">
              <CardTitle className="text-2xl">Monthly Fuel Costs Comparison</CardTitle>
              <CardDescription className="text-blue-100">Based on 10,000 miles per month at 6 MPG</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 bg-red-50 border-r">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-red-700 mb-4">Retail Price</h3>
                    <div className="text-4xl font-bold text-red-700 mb-2">$4.19</div>
                    <div className="text-sm text-red-600 mb-4">per gallon</div>
                    <div className="text-2xl font-bold text-red-700">$6,985</div>
                    <div className="text-sm text-red-600">monthly cost</div>
                  </div>
                </div>
                <div className="p-8 bg-green-50">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-green-700 mb-4">Your Discounted Price</h3>
                    <div className="text-4xl font-bold text-green-700 mb-2">$3.63</div>
                    <div className="text-sm text-green-600 mb-4">per gallon</div>
                    <div className="text-2xl font-bold text-green-700">$6,051</div>
                    <div className="text-sm text-green-600">monthly cost</div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-orange text-white text-center">
                <div className="text-2xl font-bold">You Save $934/month</div>
                <div className="text-orange-100">That's $11,208 per year per truck!</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy text-center mb-12">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-navy">
                What kind of trucks qualify?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                All commercial vehicles qualify, including owner-operators, small fleets, and growing operations. We
                work with Class 8 trucks, straight trucks, and even pickup trucks used for commercial purposes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-navy">Can I fuel anywhere?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                You can fuel at over 12,000 locations across the US and Canada, including major truck stops and many
                independent stations. Our network covers all major freight corridors. While you have the freedom to fuel
                where you want, the <strong>best discounts and the most savings</strong> will be available to you on the{" "}
                <strong>TA</strong> network in the USA and the <strong>Esso</strong> network in Canada.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-navy">Are there setup fees?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                No setup fees, no monthly fees, and no long-term contracts. You only pay a small transaction fee per
                gallon, which is more than offset by your savings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-navy">
                How quickly can I start saving?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Once approved, you'll receive your fuel cards within 3-5 business days. You can start saving immediately
                on your first fill-up.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange to-orange/90 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Saving on Fuel?</h2>
          <p className="text-xl mb-8">Join thousands of fleets already saving with our fuel card program.</p>
          <Button size="lg" className="bg-white text-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
            <Link href="/contact">
              Get Your Fuel Card Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
