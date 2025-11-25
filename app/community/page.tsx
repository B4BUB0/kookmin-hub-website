import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MessageCircle, Users, ExternalLink, Shield, Heart, Zap } from "lucide-react"

export default function CommunityPage() {
  const communities = [
    {
      name: "Main Discord Server",
      icon: MessageCircle,
      description:
        "Our main hub for all international students. Chat, make friends, ask questions, and participate in events.",
      members: "2,500+",
      active: true,
      link: "#",
      color: "primary",
      highlights: ["Real-time chat", "Event planning", "Language exchange"],
    },
    {
      name: "Telegram Group",
      icon: MessageCircle,
      description:
        "Quick updates, announcements, and casual conversations. Get the latest news about campus life and events.",
      members: "1,800+",
      active: true,
      link: "#",
      color: "secondary",
      highlights: ["Quick updates", "Announcements", "Daily chat"],
    },
    {
      name: "Housing & Apartments",
      icon: Users,
      description: "Find roommates, share housing tips, and discuss dorms and apartments near Kookmin University.",
      members: "950+",
      active: true,
      link: "#",
      color: "accent",
      highlights: ["Find roommates", "Housing tips", "Neighborhood guide"],
    },
    {
      name: "Food & Dining",
      icon: MessageCircle,
      description: "Share restaurant recommendations, food deals, and organize group meals with other students.",
      members: "1,200+",
      active: true,
      link: "#",
      color: "primary",
      highlights: ["Restaurant reviews", "Food deals", "Group meals"],
    },
    {
      name: "Study & Academic",
      icon: Users,
      description: "Form study groups, share notes, discuss courses, and help each other succeed academically.",
      members: "800+",
      active: true,
      link: "#",
      color: "secondary",
      highlights: ["Study groups", "Notes sharing", "Academic support"],
    },
    {
      name: "Sports & Fitness",
      icon: Zap,
      description: "Organize fitness activities, sports games, gym sessions, and outdoor adventures around Seoul.",
      members: "650+",
      active: true,
      link: "#",
      color: "accent",
      highlights: ["Sports events", "Gym buddies", "Hiking trips"],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Make Connections",
      description: "Build meaningful friendships with international students from all over the world.",
    },
    {
      icon: Shield,
      title: "Support Network",
      description: "Get help and advice from people who understand the international student experience.",
    },
    {
      icon: Zap,
      title: "Find Opportunities",
      description: "Discover events, job postings, study groups, and social activities in one place.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/15 to-background py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Connect With Our Community
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
              Join thousands of international students at Kookmin. Share experiences, get support, and make lasting
              friendships.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Join Our Communities?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Communities Grid */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Active Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communities.map((community, idx) => {
                const Icon = community.icon
                const colorClass = {
                  primary: "from-primary/10 to-primary/5 border-primary/20",
                  secondary: "from-secondary/10 to-secondary/5 border-secondary/20",
                  accent: "from-accent/10 to-accent/5 border-accent/20",
                }[community.color]

                const buttonColorClass = {
                  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
                  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
                  accent: "bg-accent text-accent-foreground hover:bg-accent/90",
                }[community.color]

                return (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${colorClass} border rounded-2xl p-6 hover:shadow-lg transition-shadow`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          community.color === "primary"
                            ? "bg-primary/30"
                            : community.color === "secondary"
                              ? "bg-secondary/30"
                              : "bg-accent/30"
                        }`}
                      >
                        <Icon
                          className={
                            community.color === "primary"
                              ? "text-primary"
                              : community.color === "secondary"
                                ? "text-secondary"
                                : "text-accent"
                          }
                          size={24}
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-foreground">{community.name}</h3>
                        <p className="text-sm text-muted-foreground">{community.members} members</p>
                      </div>
                      {community.active && <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>}
                    </div>

                    <p className="text-foreground mb-4">{community.description}</p>

                    {/* Highlights */}
                    <div className="flex gap-2 mb-6 flex-wrap">
                      {community.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs bg-background/60 border border-border rounded-full px-3 py-1 text-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <a
                      href={community.link}
                      className={`${buttonColorClass} px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 w-full justify-center`}
                    >
                      Join Community <ExternalLink size={16} />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Community Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg text-foreground mb-3">Do's</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Be respectful and helpful to all members</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Share helpful tips and genuine experiences</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Welcome new members and help them settle in</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Use appropriate channels for different topics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg text-foreground mb-3">Don'ts</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✗</span>
                    <span>Spam, promote, or post inappropriate content</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✗</span>
                    <span>Discriminate or be disrespectful to anyone</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✗</span>
                    <span>Share personal information of other members</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">✗</span>
                    <span>Post without reading channel descriptions first</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-secondary/90 to-primary/90 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-secondary-foreground mb-4">Ready to Join?</h2>
            <p className="text-lg text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
              Choose the community that interests you and start connecting with fellow Kookmin international students
              today!
            </p>
            <a
              href="#"
              className="bg-secondary-foreground text-secondary px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors inline-block"
            >
              Explore All Communities
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
