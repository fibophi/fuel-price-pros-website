import Link from "next/link"
import { Truck, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-orange rounded">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">Fuel Price Pros</span>
            </Link>
            <p className="text-blue-100 text-sm">
              Helping growing fleets access big fleet savings with smart tactics and smarter tech.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-2 text-sm">
              <Link href="/fuel-savings" className="block text-blue-100 hover:text-white transition-colors">
                Fuel Savings
              </Link>
              <Link href="/consulting" className="block text-blue-100 hover:text-white transition-colors">
                Consulting
              </Link>
              <Link href="/aerodynamic" className="block text-blue-100 hover:text-white transition-colors">
                Aerodynamic Add-Ons
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-blue-100 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-blue-100 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="block text-blue-100 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange" />
                <span className="text-blue-100">647-362-6649</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange" />
                <span className="text-blue-100">info@fuelprice.pro</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange" />
                <span className="text-blue-100">North America</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-100">
          <p>&copy; {new Date().getFullYear()} Fuel Price Pros. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: Savings estimates based on historical data and may vary by fleet size, routes, and usage
            patterns.
          </p>
        </div>
      </div>
    </footer>
  )
}
