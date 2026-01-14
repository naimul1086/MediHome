
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

    // ===== Flash Messages =====
    const alerts = document.querySelectorAll(".flash-messages .alert");
    alerts.forEach((alert, i) => {
        // Show alert with slight delay
        setTimeout(() => {
            alert.classList.add("show");
        }, i * 150);

        // Hide alert after 2 seconds
        setTimeout(() => {
            alert.classList.remove("show");
            alert.classList.add("hide");

            // Remove from DOM after animation
            setTimeout(() => alert.remove(), 500);
        }, 2000 + i * 150);
    });

    // ===== Theme Toggle =====
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);

        if (newTheme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // ===== Mobile Menu Toggle =====
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // ===== User Dropdown =====
    const userProfile = document.getElementById('userProfile');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if(userProfile) {
        userProfile.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userProfile.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('active');
            }
        });
    }

    // ===== Smooth Scroll for anchor links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

});

