
// Initialize scroll animations after loader is complete
document.addEventListener("loaderComplete", function () {
    initScrollAnimations();
});

// Scroll Animation for Content
function initScrollAnimations() {
    const animateElements =
        document.querySelectorAll(".animate-on-scroll");
    const staggerAnimations =
        document.querySelectorAll(".stagger-animation");

    // Initial check for elements that are already in view on page load
    checkScroll();

    // Check elements on scroll
    window.addEventListener("scroll", () => {
        checkScroll();
        updateActiveNavLink();
    });

    function checkScroll() {
        // For single elements with fade up animation
        animateElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add("animated");
            }
        });

        // For staggered animations (cards and icons)
        staggerAnimations.forEach((container) => {
            const containerTop =
                container.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const revealPoint = 150;

            if (containerTop < windowHeight - revealPoint) {
                container.classList.add("animated");
            }
        });
    }

    // Function to update active nav link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav a");

        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight =
                document.querySelector("header")?.offsetHeight || 0;

            if (
                window.pageYOffset >=
                sectionTop - headerHeight - 100
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (
                link.getAttribute("href") === `#${currentSection}`
            ) {
                link.classList.add("active");
            }
        });
    }
}
