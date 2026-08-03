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

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
            icon.classList.replace("fa-times", "fa-bars");
        });
    });

    // 2. Sticky Header Shadow Logic
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.boxShadow = 'var(--shadow-glass)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = 'rgba(255, 255, 255, 0.85)';
        }
    });

    // 3. Dynamic Data Loading Logic (Replace with Backend API later)
    const updates = [
        {
            icon: "fa-id-card",
            title: "CUET UG Admit Card Released",
            date: "August 01, 2026",
            desc: "The NTA has officially released the phase 2 admit cards. Download securely using your application credentials."
        },
        {
            icon: "fa-chart-line",
            title: "Allahabad Univ. PGAT Cutoff",
            date: "July 28, 2026",
            desc: "Main campus official cutoff scores are now published. Check the portal for your counseling schedule."
        },
        {
            icon: "fa-mobile-screen-button",
            title: "New Mock Tests Added",
            date: "July 20, 2026",
            desc: "We've added 300+ new chapter-wise mock tests in the mobile app. Update to access the premium dashboard."
        }
    ];

    const updatesContainer = document.getElementById("updatesContainer");
    
    if (updatesContainer) {
        updatesContainer.innerHTML = updates.map(item => `
            <div class="update-card">
                <div class="icon-box">
                    <i class="fas ${item.icon}"></i>
                </div>
                <h3 style="font-size: 1.25rem;">${item.title}</h3>
                <p style="font-size: 0.85rem; color: var(--primary); font-weight: 600; margin-bottom: 8px;">
                    <i class="far fa-clock"></i> ${item.date}
                </p>
                <p>${item.desc}</p>
                <a href="#" class="card-link">Read Full Notice <i class="fas fa-arrow-right"></i></a>
            </div>
        `).join('');
    }
});
