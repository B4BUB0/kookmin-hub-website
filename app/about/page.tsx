"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, MessageCircle, Heart, Users, Lightbulb, Globe } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this data to a server
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const team = [
    {
      role: "Community Founder",
      description: "Started the community to help international students connect and thrive at Kookmin",
      name: "International Student Leader",
    },
    {
      role: "Events Coordinator",
      description: "Organizes meetups, cultural events, and community gatherings throughout Seoul",
      name: "Community Event Team",
    },
    {
      role: "Content Manager",
      description: "Creates guides, resources, and keeps everyone informed about news and updates",
      name: "Information Team",
    },
    {
      role: "Community Moderators",
      description: "Ensure a welcoming, safe, and supportive environment for all members",
      name: "Volunteer Moderators",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Inclusivity",
      description:
        "A welcoming space where every international student feels they belong, regardless of background or major.",
    },
    {
      icon: Lightbulb,
      title: "Empowerment",
      description:
        "We empower students with knowledge, connections, and support to succeed academically and personally.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building genuine relationships and a sense of belonging through shared experiences and mutual support.",
    },
    {
      icon: Globe,
      title: "Cultural Exchange",
      description: "Creating opportunities for international and Korean students to connect, learn, and grow together.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/15 to-secondary/10 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              About Kookmin International Community
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
              Building a supportive community where international students at Kookmin University can connect, grow, and
              thrive in Seoul.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-foreground mb-4">
                  We believe that every international student deserves a supportive community where they can:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3 text-foreground">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>Connect with fellow students from around the world</span>
                  </li>
                  <li className="flex gap-3 text-foreground">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>Get practical advice about living and studying in Seoul</span>
                  </li>
                  <li className="flex gap-3 text-foreground">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>Participate in cultural exchanges and community events</span>
                  </li>
                  <li className="flex gap-3 text-foreground">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>Build lasting friendships and meaningful relationships</span>
                  </li>
                </ul>
                <p className="text-foreground">
                  Our community exists to support every step of your journey as an international student at Kookmin.
                </p>
              </div>
              <img src="/placeholder.svg?key=c2o4c" alt="Kookmin Community" className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Team</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Our community is powered by passionate international and Korean students who volunteer their time to make
              this a welcoming space. We're all students first, helping fellow students.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.role}</h3>
                  <p className="text-foreground mb-3">{member.description}</p>
                  <p className="text-sm text-muted-foreground font-semibold">{member.name}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Want to join our team? We're always looking for passionate volunteers to help grow this community!
            </p>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="bg-gradient-to-br from-accent/15 to-background py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How You Can Get Involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="text-lg font-bold text-foreground mb-3">Join Our Community</h3>
                <p className="text-foreground mb-4">
                  Connect with thousands of international students on Discord and Telegram.
                </p>
                <a href="/community" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Join Now →
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="text-lg font-bold text-foreground mb-3">Attend Events</h3>
                <p className="text-foreground mb-4">
                  Participate in meetups, language exchanges, cultural events, and activities.
                </p>
                <a href="/events" className="text-secondary font-semibold hover:text-secondary/80 transition-colors">
                  See Events →
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🙋</div>
                <h3 className="text-lg font-bold text-foreground mb-3">Volunteer</h3>
                <p className="text-foreground mb-4">
                  Help organize events, moderate communities, or contribute content and guides.
                </p>
                <button className="text-accent font-semibold hover:text-accent/80 transition-colors">
                  Get Involved →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Get in Touch</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:info@kookmin-intl.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@kookmin-intl.com
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="text-secondary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">Discord</h3>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  Join Our Server
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="text-accent" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">Telegram</h3>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Join Our Group
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is the community only for Kookmin students?",
                  a: "Our community is primarily for Kookmin University international students, but we're always open to connecting with students from other universities!",
                },
                {
                  q: "Are the Discord and Telegram communities free to join?",
                  a: "Yes! All our communities are completely free. Just join the Discord server or Telegram group using the links on the community page.",
                },
                {
                  q: "Can I organize my own event?",
                  a: "We encourage members to organize events. Contact us through Discord or email and we'll help you promote your event.",
                },
                {
                  q: "Is this an official Kookmin University program?",
                  a: "We're a student-led community supported by the Kookmin University International Office. We work closely with the university to serve international students.",
                },
                {
                  q: "How can I contribute content or guides?",
                  a: "We'd love your contributions! Share your knowledge and experiences. Contact us with your ideas or share directly in our communities.",
                },
                {
                  q: "I have a problem or safety concern. Who do I contact?",
                  a: "Contact our moderators on Discord/Telegram or email us at info@kookmin-intl.com. We take all concerns seriously and respond promptly.",
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-border rounded-lg p-4 bg-card hover:shadow-md transition-shadow cursor-pointer"
                >
                  <summary className="flex items-center gap-2 font-semibold text-foreground">
                    {faq.q}
                    <span className="text-primary ml-auto group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-foreground mt-4 text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Join Our Growing Community Today</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              You're not alone in this journey. Thousands of international students have already found their community
              at Kookmin. We're here to support you every step of the way.
            </p>
            <a
              href="/community"
              className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors inline-block"
            >
              Join Us Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
