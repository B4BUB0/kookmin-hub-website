// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle")
const navMenu = document.getElementById("navMenu")

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
    })
  })
}

// Contact form handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon.")
    contactForm.reset()
  })
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// Add active class to current page nav link
const currentPage = window.location.pathname.split("/").pop() || "index.html"
document.querySelectorAll(".nav-link").forEach((link) => {
  const href = link.getAttribute("href")
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.classList.add("active")
  }
})
