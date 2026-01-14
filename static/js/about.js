// ===================== Theme Toggle =====================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle?.querySelector('i');

themeToggle?.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');

    if (body.getAttribute('data-theme') === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// ===================== Mobile Menu Toggle =====================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    mobileMenuToggle.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// ===================== User Dropdown =====================
const userDropdowns = document.querySelectorAll('.user-dropdown');

userDropdowns.forEach(dropdown => {
    const profile = dropdown.querySelector('.user-profile');
    const menu = dropdown.querySelector('.dropdown-menu');

    profile.addEventListener('click', e => {
        e.stopPropagation();
        menu.classList.toggle('active');
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('active'));
});


// ===================== Smooth Scrolling =====================
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
            navLinks?.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// ===================== Flash Message Alerts =====================
document.addEventListener("DOMContentLoaded", () => {
    const alerts = document.querySelectorAll(".flash-messages .alert");

    alerts.forEach((alert, i) => {
        setTimeout(() => {
            alert.classList.add("show");
        }, i * 150);

        setTimeout(() => {
            alert.classList.remove("show");
            alert.classList.add("hide");
            setTimeout(() => alert.remove(), 500);
        }, 2000 + i * 150);
    });
});
