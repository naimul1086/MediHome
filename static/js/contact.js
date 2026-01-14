// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeIcon.classList.toggle('fa-moon', isDark);
    themeIcon.classList.toggle('fa-sun', !isDark);
});

// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// ===== User Dropdown =====
const userProfile = document.getElementById('userProfile');
const dropdownMenu = document.getElementById('dropdownMenu');

if (userProfile) {
    userProfile.addEventListener('click', () => dropdownMenu.classList.toggle('active'));
}

document.addEventListener('click', (e) => {
    if (userProfile && !userProfile.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('active');
    }
});

// ===== Toast Notification =====
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';
    toast.style.backgroundColor = type === 'success' ? '#38a169'
                                : type === 'error' ? '#e53e3e'
                                : '#3182ce';
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== Flash Messages Fade =====
document.addEventListener("DOMContentLoaded", () => {
    const alerts = document.querySelectorAll(".flash-messages .alert");
    alerts.forEach((alert, i) => {
        setTimeout(() => alert.classList.add("show"), i * 150);
        setTimeout(() => {
            alert.classList.remove("show");
            alert.classList.add("hide");
            setTimeout(() => alert.remove(), 500);
        }, 2000 + i * 150);
    });
});

// ===== FAQ Toggle =====
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = question.querySelector('.faq-icon');

    question.addEventListener('click', () => {
        const isActive = item.classList.toggle('active');
        answer.style.maxHeight = isActive ? answer.scrollHeight + 'px' : '0';
        icon.classList.toggle('fa-chevron-down', !isActive);
        icon.classList.toggle('fa-chevron-up', isActive);

        // Close other items
        faqItems.forEach(other => {
            if (other !== item && other.classList.contains('active')) {
                other.classList.remove('active');
                const otherAnswer = other.querySelector('.faq-answer');
                const otherIcon = other.querySelector('.faq-question .faq-icon');
                otherAnswer.style.maxHeight = '0';
                otherIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    });
});

// ===== Contact Form Validation & Optional AJAX =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const phone = contactForm.phone.value.trim();
        const subject = contactForm.subject.value;
        const message = contactForm.message.value.trim();

        if (!name || !email || !subject || !message) {
            showToast('Please fill in all required fields', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        if (phone && !/^[0-9+\-\s]+$/.test(phone)) {
            showToast('Please enter a valid phone number', 'error');
            return;
        }
        // If you prefer normal POST:
        contactForm.submit();
    });
}

// ===== Initialize FAQ answers =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-answer').forEach(a => {
        a.style.maxHeight = '0';
        a.style.overflow = 'hidden';
        a.style.transition = 'max-height 0.3s ease-out';
    });
});
