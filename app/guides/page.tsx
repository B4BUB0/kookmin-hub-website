import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"

export default function GuidesPage() {
  const guides = [
    {
      title: "Banking & Money",
      description: "How to open a bank account and manage your finances",
      icon: "💳",
      content: [
        {
          subtitle: "Opening a Bank Account",
          points: [
            "Visit a major bank (KB, Shinhan, Woori) near campus",
            "Bring your passport and student ID",
            "Banks have English-speaking staff - ask for help",
            "Process takes about 20-30 minutes",
            "You'll get a debit card within 1-2 weeks",
          ],
        },
        {
          subtitle: "Money Transfer",
          points: [
            "Use Wise or OFX for international transfers (cheaper than banks)",
            "Bank transfers: SWIFT code available at your bank",
            "TransferWise has competitive rates for students",
            "Plan ahead - international transfers take 1-3 business days",
          ],
        },
        {
          subtitle: "Cost of Living",
          points: [
            "Budget: ₩1,200,000-1,500,000/month (including rent, food, transport)",
            "Rent: ₩400,000-700,000 (depending on area and type)",
            "Food: ₩300,000-400,000/month",
            "Transport: ₩50,000-80,000/month with student card",
          ],
        },
      ],
    },
    {
      title: "Mobile & SIM Cards",
      description: "Get connected with phone plans and data",
      icon: "📱",
      content: [
        {
          subtitle: "Getting a SIM Card",
          points: [
            "Major providers: SKT, KT, LG U+",
            'Student discounts available - ask for "학생 할인" (student discount)',
            "Bring your passport",
            "Monthly plans: ₩30,000-60,000 for unlimited data",
            "Can be purchased at convenience stores or provider offices",
          ],
        },
        {
          subtitle: "Popular Plans",
          points: [
            "SKT Lite: ₩25,000/month with limited data",
            "KT Young: ₩35,000/month, good for students",
            "LG U+ Basic: ₩30,000/month",
            "All include unlimited calling within Korea",
          ],
        },
        {
          subtitle: "Staying Connected Abroad",
          points: [
            "Add international roaming: ₩50,000+ extra",
            "Consider apps like WhatsApp, Discord for free calls",
            "Keep SIM when traveling - add roaming as needed",
            "Activate roaming temporarily only when needed",
          ],
        },
      ],
    },
    {
      title: "Transportation",
      description: "Navigate Seoul like a local",
      icon: "🚇",
      content: [
        {
          subtitle: "Getting Around",
          points: [
            "Metro: Kookmin is on Line 4 - super convenient",
            "T-money card: ₩2,500 deposit, then load cash (매표소 or convenience stores)",
            "Monthly unlimited pass: ₩70,000 (good value for students)",
            "Buses: Same T-money card works everywhere",
          ],
        },
        {
          subtitle: "Student Transport Benefits",
          points: [
            "Student ID gives you discounts on metro/bus",
            "Discounted metro fare: ₩850-1,250 (vs ₩1,250-2,500 regular)",
            "Apply at metro station kiosks with student ID",
            "Card lasts 1 year and can be renewed",
          ],
        },
        {
          subtitle: "Useful Apps",
          points: [
            "Naver Map: Best navigation app",
            "Kakao Map: Alternative, very reliable",
            "Subway Korea: Real-time train info",
            "Vibe (Carpool): Share taxis for cheap long-distance travel",
          ],
        },
      ],
    },
    {
      title: "Housing & Accommodation",
      description: "Find a place to call home",
      icon: "🏠",
      content: [
        {
          subtitle: "Types of Accommodation",
          points: [
            "Dorm: ₩400,000-600,000/month, on-campus community",
            "Gosiwon: ₩300,000-400,000/month, very small rooms",
            "Oneroom: ₩500,000-800,000/month, private space",
            "Shared house: ₩400,000-700,000/month with roommates",
            "Officetel: ₩600,000-1,000,000/month, fully furnished",
          ],
        },
        {
          subtitle: "Where to Search",
          points: [
            "Naver/Kakao Real Estate: Main Korean sites",
            "Zigbang App: Very popular, intuitive interface",
            'Facebook groups: "International students housing Seoul"',
            "Our Discord community: Real recommendations from other students",
          ],
        },
        {
          subtitle: "Lease Agreement Tips",
          points: [
            "Bring someone Korean if possible to help translate",
            "Understand key deposits (보증금) vs rent",
            "Take photos of existing damage",
            "Read contract carefully - check move-out cleaning requirements",
            "Many disputes settled at free legal aid offices",
          ],
        },
      ],
    },
    {
      title: "Health & Insurance",
      description: "Stay healthy and get proper medical care",
      icon: "⚕️",
      content: [
        {
          subtitle: "Health Insurance",
          points: [
            "International students must have health insurance",
            "University offers group plans: ₩400,000-600,000/year",
            "Private insurance options available",
            "Covers doctor visits, emergency room, hospitalization",
            "Sign up when you arrive - check with international office",
          ],
        },
        {
          subtitle: "Going to the Doctor",
          points: [
            "Clinics (의원) cheaper than hospitals (병원)",
            'Tell clinic staff you have "국민건강보험" (national insurance)',
            "Doctor fees: ₩10,000-30,000 depending on type",
            "Prescription medicine very affordable",
            "Download Naver or Kakao app to find nearby clinics",
          ],
        },
        {
          subtitle: "Pharmacy Tips",
          points: [
            "Pharmacies (약국) everywhere - very convenient",
            "Many medicines available without prescription",
            "Pharmacists speak some English",
            "Prices very reasonable compared to Western countries",
            "Can get basic medical items without doctor visit",
          ],
        },
      ],
    },
    {
      title: "Legal & Documentation",
      description: "Important documents and registration",
      icon: "📋",
      content: [
        {
          subtitle: "Essential Documents",
          points: [
            "Keep your passport and student ID always",
            "Register at Jongno-gu Office (종로구청) for foreigner registration",
            "Get ARC (외국인 등록증) - required to open bank accounts, get phone plans",
            "Keep copies of important documents in secure place",
          ],
        },
        {
          subtitle: "Alien Registration Card (ARC)",
          points: [
            "Required within 90 days of arrival",
            "Apply at Jongno-gu Immigration Office near university",
            "Bring: Passport, completed form, ₩30,000 fee",
            "Valid for duration of visa",
            "Process takes about 1 week",
          ],
        },
        {
          subtitle: "Visa Extension",
          points: [
            "Plan ahead - don't let visa expire",
            "Apply 1-2 months before expiration",
            "Get letter from university international office",
            "Immigration office near you for applications",
            "Most student visas can be extended annually",
          ],
        },
      ],
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary/15 to-background py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Practical Guides for Student Life
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
              Everything you need to know about settling into Seoul and managing daily life as an international student
              at Kookmin.
            </p>
          </div>
        </section>

        {/* Guides Accordion */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Essential Topics</h2>
            <div className="space-y-4">
              {guides.map((guide, idx) => (
                <details
                  key={idx}
                  className="group border border-border rounded-xl p-6 bg-card hover:shadow-md transition-shadow"
                >
                  <summary className="flex items-center gap-4 cursor-pointer">
                    <span className="text-3xl">{guide.icon}</span>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{guide.description}</p>
                    </div>
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>

                  <div className="mt-6 space-y-6 border-t border-border pt-6">
                    {guide.content.map((section, sidx) => (
                      <div key={sidx}>
                        <h4 className="font-bold text-lg text-foreground mb-3">{section.subtitle}</h4>
                        <ul className="space-y-2">
                          {section.points.map((point, pidx) => (
                            <li key={pidx} className="flex gap-3 text-foreground">
                              <span className="text-primary font-bold mt-0.5 flex-shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Reference Grid */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Quick Reference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Emergency Number", value: "112 / 119" },
                { label: "University Hotline", value: "+82-2-910-4114" },
                { label: "Immigration Office", value: "Jongno-gu, L4 Exit 5" },
                { label: "Nearest Hospital", value: "Kunkuk Univ. Hospital" },
                { label: "Police Station", value: "Jongno Police" },
                { label: "Airport Express", value: "6,000-10,000₩" },
                { label: "Average Meal", value: "3,000-10,000₩" },
                { label: "Taxi to Airport", value: "35,000-50,000₩" },
              ].map((item, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">{item.label}</p>
                  <p className="text-lg font-bold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Highlights */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Common Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "What if I get sick?",
                  a: "Go to nearby clinic or hospital. Your insurance covers most costs. Download Naver Map to find clinics.",
                },
                {
                  q: "How do I make Korean friends?",
                  a: "Join clubs, go to events, take classes, and use language exchange groups. Many Korean students want to learn English!",
                },
                {
                  q: "Can I work part-time?",
                  a: "Yes, with a work permit. International office can help with application. Common jobs: tutoring, restaurants, shops.",
                },
                {
                  q: "Where do I go shopping?",
                  a: "Myeongdong, Gangnam, Hongdae for clothes. HomePlus, Emart for groceries. Costco near university is great!",
                },
                {
                  q: "How to extend my visa?",
                  a: "Apply 1-2 months before expiration at Immigration Office. Bring university letter. Usually takes 1 week.",
                },
                {
                  q: "What about mail/packages?",
                  a: "Use convenience stores as collection points. Download convenience store apps to track shipments easily.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground text-lg mb-2 text-primary">{item.q}</h4>
                  <p className="text-foreground text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/90 to-secondary/90 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Still Have Questions?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join our Discord or Telegram community! Experienced students and staff are always happy to help.
            </p>
            <a
              href="/community"
              className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors inline-block"
            >
              Ask the Community
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
