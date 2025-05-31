// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");
    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Smooth Scroll Animation for Navigation Links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Get the target section
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Get the current active link and remove active class
                const currentActive =
                    document.querySelector("nav a.active");
                if (currentActive) {
                    currentActive.classList.remove("active");
                }

                // Add active class to clicked link
                this.classList.add("active");

                // Get the mobile menu button and icon
                const mobileMenuBtn =
                    document.getElementById("mobileMenuBtn");
                const navLinks = document.getElementById("navLinks");

                // Close mobile menu if open
                if (navLinks.classList.contains("active")) {
                    navLinks.classList.remove("active");
                    const icon = mobileMenuBtn.querySelector("i");
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }

                // Calculate the offset position
                const headerHeight =
                    document.querySelector("header").offsetHeight;
                const targetPosition =
                    targetSection.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;

                // Scroll to the target section with smooth animation
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });

                // Update URL hash without scrolling
                history.pushState(null, null, targetId);
            }
        });
    });
});