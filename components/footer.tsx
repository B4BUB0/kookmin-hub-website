import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-3">About</h3>
            <p className="text-muted-foreground text-sm">
              A community platform for international students at Kookmin University, helping you navigate student life
              in Seoul.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community Groups
                </Link>
              </li>
              <li>
                <Link href="/food" className="text-muted-foreground hover:text-primary transition-colors">
                  Food Guide
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-muted-foreground hover:text-primary transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-3">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Kookmin International Students Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
