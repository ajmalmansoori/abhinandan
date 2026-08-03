document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("navLinks");
    const icon = mobileMenu.querySelector("i");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        if (navLinks.classList.contains("active")) {
            icon.classList.replace("fa-bars", "fa-times");
        } else {
            icon.classList.replace("fa-times", "fa-bars");
        }
    });

    document.querySelectorAll(".nav-links a").forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
            icon.classList.replace("fa-times", "fa-bars");
        });
    });

    // 2. Seamless Ticker Animation
    const tickerContent = document.getElementById("tickerContent");
    const tickerBar = document.querySelector(".ticker-bar");
    
    if (tickerContent) {
        // Clone for infinite loop
        tickerContent.innerHTML += tickerContent.innerHTML;
        
        let position = 0;
        let speed = 1.0; 
        let isPaused = false;

        function scrollTicker() {
            if (!isPaused) {
                position -= speed;
                if (Math.abs(position) >= tickerContent.scrollWidth / 2) {
                    position = 0;
                }
                tickerContent.style.transform = `translateX(${position}px)`;
            }
            requestAnimationFrame(scrollTicker);
        }

        scrollTicker();

        tickerBar.addEventListener("mouseenter", () => isPaused = true);
        tickerBar.addEventListener("mouseleave", () => isPaused = false);
        tickerBar.addEventListener("touchstart", () => isPaused = true);
        tickerBar.addEventListener("touchend", () => isPaused = false);
    }
});
