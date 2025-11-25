import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      title: "Weekly Language Exchange Meetup",
      date: "Every Friday, 6:00 PM",
      location: "Cafe Mo (near campus)",
      category: "Language Exchange",
      attendees: "15-25",
      description:
        "Practice Korean with Korean students learning English. Casual, friendly, and fun atmosphere. Free coffee!",
      organizer: "KIS Community",
      level: "All levels",
      highlights: ["Free coffee", "Mix of Korean & English", "Make Korean friends"],
    },
    {
      title: "Kookmin Student Meetup",
      date: "Every Sunday, 2:00 PM",
      location: "Rotating locations (Gangnam, Myeongdong, Hongdae)",
      category: "Social Gathering",
      attendees: "30-50",
      description:
        "Casual meetup for international students to explore Seoul together. Explore neighborhoods, visit attractions, and hang out with friends.",
      organizer: "KIS Events Team",
      level: "All students",
      highlights: ["Explore Seoul", "Make friends", "No entry fee"],
    },
    {
      title: "Korean Cooking Class",
      date: "Tuesdays & Thursdays, 5:00 PM",
      location: "Culinary Lab (10 min from campus)",
      category: "Workshop",
      attendees: "10-12",
      description:
        "Learn to cook authentic Korean dishes from a professional chef. Perfect for students wanting to cook in dorms/apartments.",
      organizer: "Cultural Exchange Center",
      level: "Beginners welcome",
      highlights: ["Learn recipes", "Take home ingredients", "₩15,000/class"],
    },
    {
      title: "Sports & Fitness Club",
      date: "Mondays & Wednesdays, 7:00 PM",
      location: "Kookmin Sports Complex",
      category: "Sports",
      attendees: "20-30",
      description:
        "Basketball, badminton, tennis, and gym sessions. Open to all skill levels. Great way to stay fit and meet people.",
      organizer: "Kookmin Athletics",
      level: "All levels",
      highlights: ["Multiple sports", "Campus facility", "Free for students"],
    },
    {
      title: "K-Pop Dance Class",
      date: "Saturdays, 4:00 PM",
      location: "Dance Studio (15 min from campus)",
      category: "Arts & Culture",
      attendees: "15-20",
      description:
        "Learn K-Pop choreography from a professional dancer. No dance experience needed. Fun, energetic, and amazing cardio!",
      organizer: "Dance Club",
      level: "Beginners OK",
      highlights: ["Learn K-Pop moves", "Professional instructor", "₩10,000/class"],
    },
    {
      title: "Business & Career Networking",
      date: "Second Thursday, 6:00 PM",
      location: "Kookmin University (Conference Room)",
      category: "Professional Development",
      attendees: "40-60",
      description:
        "Connect with alumni, professionals, and fellow students. Learn about internships, job opportunities, and entrepreneurship in Korea.",
      organizer: "Career Development Office",
      level: "All majors",
      highlights: ["Network with pros", "Career talks", "Free snacks"],
    },
    {
      title: "Hiking Trip to Namsan",
      date: "First Saturday, 9:00 AM",
      location: "Namsan (30 min from campus)",
      category: "Outdoor Activity",
      attendees: "25-40",
      description:
        "Easy hiking trail with beautiful Seoul views. Picnic at the summit. Great for exercise and friendship building with stunning city views.",
      organizer: "Outdoor Adventure Club",
      level: "Easy trail",
      highlights: ["Seoul city views", "Picnic lunch", "Free activity"],
    },
    {
      title: "Photography Walk Tour",
      date: "Last Saturday, 2:00 PM",
      location: "Bukchon Hanok Village",
      category: "Cultural Tour",
      attendees: "10-15",
      description:
        "Explore traditional Korean villages and practice photography. Perfect for capturing authentic Korean culture and making memories.",
      organizer: "Culture Club",
      level: "All experience",
      highlights: ["Traditional architecture", "Photo tips", "Instagram-worthy"],
    },
    {
      title: "Study Group Sessions",
      date: "Daily (Drop-in)",
      location: "Kookmin Library & Coffee Shops",
      category: "Academic Support",
      attendees: "5-15",
      description:
        "Form study groups for various subjects. Share notes, study together, and support each other. Subject-specific channels in Discord.",
      organizer: "Academic Support Team",
      level: "All courses",
      highlights: ["Subject-specific", "Peer tutoring", "Note sharing"],
    },
    {
      title: "Seasonal Community Festivals",
      date: "Throughout the year",
      location: "Kookmin Campus & Seoul Venues",
      category: "Festival",
      attendees: "100+",
      description:
        "Spring Festival, Summer Gathering, Fall Celebration, Winter Party. Big community events with food, games, performances, and lots of fun!",
      organizer: "KIS Community",
      level: "All welcome",
      highlights: ["Food & games", "Live performances", "Community spirit"],
    },
    {
      title: "Movie & Dinner Night",
      date: "Every other Friday, 7:00 PM",
      location: "CGV Cinema & Local Restaurant",
      category: "Entertainment",
      attendees: "15-25",
      description:
        "Watch new movies with subtitles, then grab dinner together. Great way to relax and spend time with friends.",
      organizer: "Entertainment Committee",
      level: "All welcome",
      highlights: ["Friendship time", "Korean cinema", "Group dinner"],
    },
    {
      title: "Volunteer & Giving Back",
      date: "Bi-weekly opportunities",
      location: "Various Seoul Organizations",
      category: "Volunteer",
      attendees: "10-20",
      description:
        "Participate in community service projects. Teach English, clean parks, help at shelters. Make a difference while getting to know Korea.",
      organizer: "Volunteer Coordination Team",
      level: "All welcome",
      highlights: ["Help the community", "Make Korean friends", "Meaningful impact"],
    },
  ]

  const categories = [
    { name: "Social", color: "primary", count: 3 },
    { name: "Sports", color: "secondary", count: 2 },
    { name: "Culture", color: "accent", count: 4 },
    { name: "Career", color: "primary", count: 1 },
    { name: "Volunteer", color: "secondary", count: 1 },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/15 to-background py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Events & Activities</h1>
            <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
              Make the most of your time at Kookmin. Join student meetups, clubs, cultural events, language exchanges,
              and outdoor adventures.
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-8 md:py-12 bg-muted/30 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-muted-foreground mb-4 uppercase font-semibold">Filter by Category</p>
            <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                All Events
              </button>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-full border font-semibold transition-colors ${
                    cat.color === "primary"
                      ? "border-primary text-primary hover:bg-primary/10"
                      : cat.color === "secondary"
                        ? "border-secondary text-secondary hover:bg-secondary/10"
                        : "border-accent text-accent hover:bg-accent/10"
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Upcoming & Regular Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, idx) => {
                const categoryColor = event.category.includes("Social")
                  ? "primary"
                  : event.category.includes("Sports")
                    ? "secondary"
                    : event.category.includes("Volunteer")
                      ? "secondary"
                      : event.category.includes("Professional")
                        ? "primary"
                        : "accent"

                const colors = {
                  primary: {
                    bg: "bg-primary/10 border-primary/30",
                    text: "text-primary",
                    badge: "bg-primary/20 text-primary",
                  },
                  secondary: {
                    bg: "bg-secondary/10 border-secondary/30",
                    text: "text-secondary",
                    badge: "bg-secondary/20 text-secondary",
                  },
                  accent: {
                    bg: "bg-accent/10 border-accent/30",
                    text: "text-accent",
                    badge: "bg-accent/20 text-accent",
                  },
                }

                const color = colors[categoryColor]

                return (
                  <div key={idx} className={`${color.bg} border rounded-2xl p-6 hover:shadow-lg transition-shadow`}>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                        <p className={`text-sm font-semibold mt-1 ${color.text}`}>{event.category}</p>
                      </div>
                      <span className={`${color.badge} rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0`}>
                        {event.level}
                      </span>
                    </div>

                    <p className="text-foreground mb-4">{event.description}</p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-3 text-foreground">
                        <Calendar size={16} className={`${color.text} flex-shrink-0`} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <MapPin size={16} className={`${color.text} flex-shrink-0`} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <Users size={16} className={`${color.text} flex-shrink-0`} />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Highlights:</p>
                      <div className="flex gap-2 flex-wrap">
                        {event.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="text-xs bg-background border border-border rounded-full px-2 py-1 text-foreground"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Organizer */}
                    <p className="text-xs text-muted-foreground mb-4">Organized by: {event.organizer}</p>

                    <button
                      className={`w-full ${color.badge} rounded-lg font-semibold py-2 hover:opacity-80 transition-opacity`}
                    >
                      Learn More & Join
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats & Benefits Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Join Our Events?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "2,500+", label: "Members across events", icon: "👥" },
                { number: "50+", label: "Events per year", icon: "📅" },
                { number: "40+", label: "Countries represented", icon: "🌍" },
                { number: "100%", label: "Free or low-cost", icon: "💰" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <h3 className="text-3xl font-bold text-primary mb-1">{stat.number}</h3>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Involved */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How to Get Involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-3">1</div>
                <h3 className="text-lg font-bold text-foreground mb-2">Join Our Community</h3>
                <p className="text-foreground text-sm">Join our Discord or Telegram. Post which events interest you!</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-secondary mb-3">2</div>
                <h3 className="text-lg font-bold text-foreground mb-2">Check Event Posts</h3>
                <p className="text-foreground text-sm">
                  See all upcoming events with details, dates, and locations. RSVP in the comments.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-accent mb-3">3</div>
                <h3 className="text-lg font-bold text-foreground mb-2">Show Up & Enjoy!</h3>
                <p className="text-foreground text-sm">
                  Attend, make new friends, have an amazing time, and share on Instagram!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/90 to-accent/90 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Your community is waiting! Join thousands of students making memories and building lasting friendships at
              Kookmin.
            </p>
            <a
              href="/community"
              className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors inline-block"
            >
              Join Our Community Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
