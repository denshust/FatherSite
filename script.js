// Плавний скролінг для якірних посилань
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Відступ для фіксованого меню
                behavior: 'smooth'
            });
        }
    });
});

// Ефект зміни фону меню при скролінгу
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(16, 14, 13, 1)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(16, 14, 13, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Обробка форми (симуляція відправки для постачальників)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.textContent;
    
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';

    // Симуляція запиту
    setTimeout(() => {
        btn.textContent = 'Inquiry Sent Successfully';
        btn.style.backgroundColor = '#2ecc71'; // Зелений колір успіху
        btn.style.opacity = '1';
        contactForm.reset();

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = 'var(--primary-color)';
        }, 4000);
    }, 1500);
});