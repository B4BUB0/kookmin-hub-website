import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Users, UtensilsCrossed, BookOpen, Calendar, Info } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                  Welcome to Kookmin International Community
                </h1>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Connect with fellow international students, share experiences, and discover everything you need to
                  thrive at Kookmin University and in Seoul.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link
                    href="/community"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                  >
                    Join Community <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/about"
                    className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/kookmin-university-students-international-communit.jpg"
                  alt="Kookmin International Students"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">How We Can Help</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Everything you need to know about student life at Kookmin and in Seoul
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Community Card */}
              <Link href="/community" className="group">
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Users className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Connect & Network</h3>
                  <p className="text-muted-foreground mb-4">
                    Join our Telegram and Discord communities to connect with other international students, make
                    friends, and build lasting relationships.
                  </p>
                  <span className="text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              {/* Food Card */}
              <Link href="/food" className="group">
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <UtensilsCrossed className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Discover Great Food</h3>
                  <p className="text-muted-foreground mb-4">
                    Find cheap, delicious, and foreigner-friendly restaurants near Kookmin. Explore local Korean cuisine
                    and international options that won't break the bank.
                  </p>
                  <span className="text-accent font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              {/* Guides Card */}
              <Link href="/guides" className="group">
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                    <BookOpen className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Practical Guides</h3>
                  <p className="text-muted-foreground mb-4">
                    Get expert tips on banking, SIM cards, transportation, housing, and more. All the practical
                    information you need to settle into Seoul.
                  </p>
                  <span className="text-secondary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              {/* Events Card */}
              <Link href="/events" className="group">
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Calendar className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Join Events</h3>
                  <p className="text-muted-foreground mb-4">
                    Participate in student meetups, club activities, language exchanges, and cultural events. Build
                    friendships and explore Korean culture.
                  </p>
                  <span className="text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              {/* About Card */}
              <Link href="/about" className="group">
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <Info className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">About Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn about our mission, team, and how to get involved. Share your experiences and help other
                    international students thrive at Kookmin.
                  </p>
                  <span className="text-accent font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              {/* Community Photo Card */}
              <Link href="/community" className="group">
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <img src="/seoul-city-students-community.jpg" alt="Seoul Community" className="w-full h-40 object-cover" />
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Seoul Life</h3>
                      <p className="text-muted-foreground text-sm">
                        Experience the vibrant culture and energy of Seoul while building your student community.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/90 to-accent/90 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Connect?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of international students already part of our community. Get answers, make friends, and
              thrive at Kookmin.
            </p>
            <Link
              href="/community"
              className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors inline-flex items-center gap-2"
            >
              Get Started Now <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
