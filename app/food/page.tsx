import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DollarSign, Star, Clock, Users } from "lucide-react"

export default function FoodPage() {
  const restaurants = [
    {
      name: "Kimchi House",
      cuisine: "Korean Traditional",
      price: "₩5,000-12,000",
      rating: 4.8,
      reviews: 234,
      distance: "5 min walk",
      description:
        "Authentic Korean home-style cooking. Famous for kimchi jjigae and galbi. Very affordable and student-friendly.",
      specialties: ["Kimchi Jjigae", "Galbi", "Bibimbap"],
      vibe: "Local, Casual",
    },
    {
      name: "Ramen Alley (라멘골목)",
      cuisine: "Japanese Ramen",
      price: "₩6,000-9,000",
      rating: 4.6,
      reviews: 189,
      distance: "8 min walk",
      description:
        "Popular student spot near campus. Delicious tonkotsu and miso ramen. Perfect for late-night cravings.",
      specialties: ["Tonkotsu Ramen", "Miso Ramen", "Gyoza"],
      vibe: "Hip, Student Haven",
    },
    {
      name: "Tteokbokki Street",
      cuisine: "Korean Street Food",
      price: "₩3,000-5,000",
      rating: 4.7,
      reviews: 412,
      distance: "3 min walk",
      description: "Best value on campus! Amazing tteokbokki, odeng, and kimbap. Perfect for sharing with friends.",
      specialties: ["Tteokbokki", "Odeng", "Kimbap"],
      vibe: "Budget-Friendly, Social",
    },
    {
      name: "Vietnam Express",
      cuisine: "Vietnamese Pho",
      price: "₩7,000-10,000",
      rating: 4.5,
      reviews: 156,
      distance: "10 min walk",
      description:
        "Great Vietnamese food. Fresh ingredients and authentic flavors. Owner is very welcoming to international students.",
      specialties: ["Pho", "Banh Mi", "Spring Rolls"],
      vibe: "Welcoming, Authentic",
    },
    {
      name: "Noodle Lab",
      cuisine: "Korean Noodles",
      price: "₩5,500-8,000",
      rating: 4.9,
      reviews: 267,
      distance: "7 min walk",
      description: "Trendy spot for kalguksu, jjamppong, and creamy pasta noodles. Instagram-worthy and delicious.",
      specialties: ["Kalguksu", "Jjamppong", "Cream Pasta"],
      vibe: "Modern, Instagrammable",
    },
    {
      name: "Chicken Paradise",
      cuisine: "Korean Fried Chicken",
      price: "₩10,000-15,000",
      rating: 4.7,
      reviews: 345,
      distance: "12 min walk",
      description: "Best fried chicken in the area! Perfect for group hangouts. Try the soy garlic flavor.",
      specialties: ["Fried Chicken", "Korean Beer Pairing", "Wings"],
      vibe: "Social, Fun",
    },
    {
      name: "Samgyeopsal BBQ",
      cuisine: "Korean BBQ",
      price: "₩12,000-18,000",
      rating: 4.8,
      reviews: 278,
      distance: "15 min walk",
      description: "Group-friendly Korean BBQ. Cook your own meat at the table. Great for celebrations with roommates.",
      specialties: ["Samgyeopsal", "Dak Galbi", "Bulgogi"],
      vibe: "Social, Fun Dining",
    },
    {
      name: "Cafe Mo",
      cuisine: "Breakfast & Brunch",
      price: "₩6,000-10,000",
      rating: 4.4,
      reviews: 198,
      distance: "4 min walk",
      description: "Popular breakfast spot. Great toast, kimbap, and coffee. Student-friendly prices and atmosphere.",
      specialties: ["Butter Toast", "Kimbap", "Iced Coffee"],
      vibe: "Cozy, Study-Friendly",
    },
    {
      name: "Taco Fiesta",
      cuisine: "Mexican",
      price: "₩8,000-12,000",
      rating: 4.3,
      reviews: 112,
      distance: "9 min walk",
      description:
        "Craving something different? Good Mexican food by an international chef. Great for a change of pace.",
      specialties: ["Tacos", "Burritos", "Quesadillas"],
      vibe: "International, Casual",
    },
    {
      name: "Dumpling House",
      cuisine: "Chinese Dumplings",
      price: "₩5,000-8,000",
      rating: 4.6,
      reviews: 201,
      distance: "11 min walk",
      description: "Fresh handmade dumplings daily. Cheap and filling. Perfect meal before exams.",
      specialties: ["Pork Dumplings", "Shrimp Dumplings", "Dumpling Soup"],
      vibe: "No-Fuss, Filling",
    },
    {
      name: "Curry House Namaste",
      cuisine: "Indian Curry",
      price: "₩7,000-11,000",
      rating: 4.5,
      reviews: 134,
      distance: "13 min walk",
      description: "Authentic Indian food. Owner is very accommodating with spice levels. Great vegetarian options.",
      specialties: ["Butter Chicken", "Paneer Tikka", "Naan"],
      vibe: "Authentic, Welcoming",
    },
    {
      name: "Tongseng Warung",
      cuisine: "Indonesian",
      price: "₩8,000-12,000",
      rating: 4.4,
      reviews: 87,
      distance: "14 min walk",
      description: "Hidden gem for Indonesian food. Try the nasi goreng and satay skewers. Not many tourists here.",
      specialties: ["Nasi Goreng", "Sate Ayam", "Rendang"],
      vibe: "Local Gem, Authentic",
    },
  ]

  const categories = [
    { name: "Budget", emoji: "💰", description: "Under ₩7,000 per meal" },
    { name: "Korean", emoji: "🍜", description: "Traditional & street food" },
    { name: "International", emoji: "🌍", description: "Asian & Western cuisine" },
    { name: "Group-Friendly", emoji: "👥", description: "Great for sharing & hangouts" },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent/15 to-background py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Eat Like a Local</h1>
            <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
              Discover the best cheap, delicious, and foreigner-friendly restaurants around Kookmin University. Eat well
              without breaking the bank.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow text-center group"
                >
                  <div className="text-3xl mb-2">{cat.emoji}</div>
                  <h3 className="font-bold text-foreground text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cat.description}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurants Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Top Restaurants Near Kookmin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  {/* Image Placeholder */}
                  <img
                    src={`/.jpg?height=200&width=300&query=${restaurant.name} restaurant`}
                    alt={restaurant.name}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-foreground mb-1">{restaurant.name}</h3>
                      <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="text-accent fill-accent" size={18} />
                        <span className="font-bold text-foreground">{restaurant.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({restaurant.reviews} reviews)</span>
                    </div>

                    {/* Quick Info */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-foreground">
                        <DollarSign size={16} className="text-accent flex-shrink-0" />
                        <span>{restaurant.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <Clock size={16} className="text-primary flex-shrink-0" />
                        <span>{restaurant.distance}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <Users size={16} className="text-secondary flex-shrink-0" />
                        <span>{restaurant.vibe}</span>
                      </div>
                    </div>

                    <p className="text-foreground text-sm mb-4 flex-grow">{restaurant.description}</p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Try These Dishes:</p>
                      <div className="flex gap-2 flex-wrap">
                        {restaurant.specialties.map((specialty, i) => (
                          <span key={i} className="text-xs bg-primary/10 text-primary rounded-full px-2 py-1">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-accent text-accent-foreground py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors mt-auto">
                      See Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Dining Tips for International Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 text-primary">Money-Saving Tips</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Look for lunch sets (점심 세트) - often cheaper than dinner</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Eat at street stalls (노점) for the cheapest meals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Korean school cafeterias offer cheap student meals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Group dinners at BBQ places save money per person</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Convenience store meals (GS25, CU) are very affordable</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 text-secondary">Cultural Dining Etiquette</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Don't tip - it's not customary in Korea</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Pay at the counter or to the server after eating</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Always ask for water - it's free and provided with every meal</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Share food is common - it's a social experience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Slurp noodles - it shows appreciation for the food</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-accent/90 to-primary/90 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Found Your Favorite Spot?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Share your restaurant recommendations in our Food & Dining community on Discord or Telegram!
            </p>
            <a
              href="/community"
              className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors inline-block"
            >
              Join Our Community
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
