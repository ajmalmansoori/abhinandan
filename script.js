document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle Logic
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

    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
            icon.classList.replace("fa-times", "fa-bars");
        });
    });

    // 2. Header Box-Shadow on Scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.boxShadow = 'var(--shadow-glass)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // 3. Ultra-Premium Seamless Ticker Logic
    const tickerContent = document.getElementById("tickerContent");
    const tickerBar = document.querySelector(".ticker-bar");
    
    if (tickerContent && tickerBar) {
        tickerContent.innerHTML += tickerContent.innerHTML; // Clone for seamless loop
        
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

        // Pause animation when user hovers or touches
        tickerBar.addEventListener("mouseenter", () => isPaused = true);
        tickerBar.addEventListener("mouseleave", () => isPaused = false);
        tickerBar.addEventListener("touchstart", () => isPaused = true);
        tickerBar.addEventListener("touchend", () => isPaused = false);
    }

    // 4. Load Mock Data for Updates
    const updates = [
        {
            icon: "fa-id-card",
            title: "CUET UG Admit Card Available",
            date: "August 01, 2026",
            desc: "The National Testing Agency (NTA) has officially released the phase 2 admit cards. Download using your application credentials."
        },
        {
            icon: "fa-chart-line",
            title: "Allahabad Univ. PGAT Cutoff",
            date: "July 28, 2026",
            desc: "Main campus official cutoff scores are now published. Check the portal to see if you qualify for the first round."
        },
        {
            icon: "fa-mobile-screen-button",
            title: "Learnify Classes App Update",
            date: "July 20, 2026",
            desc: "We've added 300+ new chapter-wise mock tests in the mobile app. Update your application to access."
        }
    ];

    const updatesContainer = document.getElementById("updatesContainer");
    if (updatesContainer) {
        updatesContainer.innerHTML = updates.map(item => `
            <div class="update-card">
                <div class="icon-box"><i class="fas ${item.icon}"></i></div>
                <h3>${item.title}</h3>
                <p style="font-size: 0.85rem; color: var(--primary); font-weight: 600; margin-bottom: 8px;">
                    <i class="far fa-clock"></i> ${item.date}
                </p>
                <p>${item.desc}</p>
                <a href="#" class="card-link">View Details <i class="fas fa-arrow-right"></i></a>
            </div>
        `).join('');
    }
});
