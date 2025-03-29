document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileNav = document.querySelector(".mobile-nav")
  const menuIcon = document.querySelector(".menu-icon")

  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active")

    // Animate menu icon
    if (mobileNav.classList.contains("active")) {
      menuIcon.querySelector("span:first-child").style.transform = "translateY(8px) rotate(45deg)"
      menuIcon.querySelector("span:nth-child(2)").style.opacity = "0"
      menuIcon.querySelector("span:last-child").style.transform = "translateY(-8px) rotate(-45deg)"
    } else {
      menuIcon.querySelector("span:first-child").style.transform = "none"
      menuIcon.querySelector("span:nth-child(2)").style.opacity = "1"
      menuIcon.querySelector("span:last-child").style.transform = "none"
    }
  })

  // Tab navigation
  const tabLinks = document.querySelectorAll("[data-tab]")
  const tabContents = document.querySelectorAll(".tab-content")

  tabLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Update active tab in navigation
      document.querySelectorAll(".nav-link").forEach((navLink) => {
        if (navLink.getAttribute("data-tab") === tabId) {
          navLink.classList.add("active")
        } else {
          navLink.classList.remove("active")
        }
      })

      // Show active tab content
      tabContents.forEach((content) => {
        if (content.id === tabId) {
          content.classList.add("active")
        } else {
          content.classList.remove("active")
        }
      })

      // Close mobile menu if open
      if (mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active")
        menuIcon.querySelector("span:first-child").style.transform = "none"
        menuIcon.querySelector("span:nth-child(2)").style.opacity = "1"
        menuIcon.querySelector("span:last-child").style.transform = "none"
      }

      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  })
})

