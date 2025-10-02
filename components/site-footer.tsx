import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">KB</span>
              </div>
              <span className="font-bold text-lg">Kalulini Boy's High</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Excellence in education since 1985. Nurturing future leaders through quality education and character
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#academics"
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="#admissions"
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
                  Alumni Network
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
                  Career Guidance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>P.O. Box 1234-00100</li>
              <li>Kalulini, Kenya</li>
              <li className="pt-2">+254 700 123 456</li>
              <li>info@kaluliniboys.ac.ke</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© 2025 Kalulini Boy's High School. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
