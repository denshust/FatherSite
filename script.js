// Словник перекладів
const translations = {
    en: {
        "nav-about": "Who We Are",
        "nav-expertise": "Our Categories",
        "nav-why-us": "Why Partner With Us",
        "nav-contact": "Contact",
        "hero-title": "Elevating Brands in the Digital Retail Space",
        "hero-desc": "We are more than just a retailer. We are an authorized e-commerce partner dedicated to growing your brand's presence, protecting its value, and reaching new customers across digital channels.",
        "hero-btn": "Become a Partner",
        "about-title": "A True Extension of Your Brand",
        "about-p1": "At NX APEX LLC, selling products is just one part of our business. Our primary mission is to partner with quality manufacturers and act as a dedicated channel for their digital growth.",
        "about-p2": "We understand that brand integrity is paramount. By choosing us as your authorized online retail partner, you gain a team that respects your pricing policies, enhances your product presentation, and provides consistent wholesale purchasing volume.",
        "stat-1": "MAP Compliance",
        "stat-2": "Long-term Focus",
        "stat-3": "Unauthorized Channels",
        "exp-title": "Our Category Expertise",
        "exp-subtitle": "We specialize in partnering with high-quality brands in select everyday categories.",
        "cat1-title": "Pet Care & Accessories",
        "cat1-desc": "From durable toys and interactive gear to premium grooming tools. We help innovative pet brands reach caring owners without compromising brand positioning.",
        "cat2-title": "Kitchen & Dining Essentials",
        "cat2-desc": "Partnering with manufacturers of high-quality cutlery, cutting boards, kitchen organizers, and culinary tools. We elevate the presentation of premium kitchenware online.",
        "why-title": "Why Brands Trust NX APEX",
        "why1-title": "⚖️ Strict MAP Adherence",
        "why1-desc": "We respect the Minimum Advertised Price of every brand we carry. We do not engage in price wars or aggressive discounting that devalues your products.",
        "why2-title": "🛡️ Brand Protection",
        "why2-desc": "We operate strictly through authorized channels. No listing hijacking, no third-party distribution. Your brand's reputation is safe with our team.",
        "why3-title": "📦 Reliable Wholesale Purchasing",
        "why3-desc": "We are a well-capitalized partner capable of consistent, volume-based POs (Purchase Orders). We build long-term relationships, not one-off transactions.",
        "why4-title": "📈 Enhanced Presentation",
        "why4-desc": "We ensure your products are represented beautifully and accurately across all our authorized digital retail touchpoints, improving customer perception.",
        "contact-title": "Let's Grow Together",
        "contact-desc": "Whether you are looking to expand your digital footprint or seeking a reliable wholesale purchasing partner, we are ready to discuss how NX APEX LLC can add value to your business.",
        "info-company": "Company:",
        "info-address": "Address:",
        "info-email": "Email:",
        "info-website": "Website:",
        "form-company": "Company / Brand Name",
        "form-name": "Contact Person",
        "form-email": "Business Email",
        "form-message": "Tell us about your brand and partnership opportunities...",
        "form-submit": "Submit Inquiry",
        "footer-text": "All rights reserved. | Authorized Retail Partner & E-Commerce Distributor",
        "alert-sending": "Sending...",
        "alert-success": "Inquiry Sent Successfully"
    },
    ua: {
        "nav-about": "Хто ми",
        "nav-expertise": "Наші категорії",
        "nav-why-us": "Чому ми",
        "nav-contact": "Контакти",
        "hero-title": "Розвиваємо бренди у цифровому просторі",
        "hero-desc": "Ми більше, ніж просто ритейлер. Ми — авторизований e-commerce партнер, мета якого розширювати присутність вашого бренду, захищати його цінність та знаходити нових клієнтів на цифрових платформах.",
        "hero-btn": "Стати партнером",
        "about-title": "Справжнє продовження вашого бренду",
        "about-p1": "Для NX APEX LLC продаж товарів — це лише частина бізнесу. Наша головна місія — партнерство з надійними виробниками та забезпечення професійного каналу для їхнього цифрового зростання.",
        "about-p2": "Ми розуміємо, що репутація бренду має першочергове значення. Обираючи нас як авторизованого партнера, ви отримуєте команду, яка поважає цінову політику, покращує презентацію товарів та гарантує стабільні оптові закупівлі.",
        "stat-1": "Дотримання MAP",
        "stat-2": "Довгостроковий фокус",
        "stat-3": "Неавторизованих каналів",
        "exp-title": "Експертиза у категоріях",
        "exp-subtitle": "Ми спеціалізуємося на партнерстві з високоякісними брендами у вибраних категоріях повсякденного попиту.",
        "cat1-title": "Догляд за тваринами та аксесуари",
        "cat1-desc": "Від міцних іграшок до преміальних інструментів для грумінгу. Ми допомагаємо інноваційним брендам знаходити дбайливих власників без шкоди для позиціонування.",
        "cat2-title": "Товари для кухні та дому",
        "cat2-desc": "Співпрацюємо з виробниками якісних ножів, обробних дошок та кулінарних інструментів. Ми виводимо презентацію преміального кухонного посуду в інтернеті на новий рівень.",
        "why-title": "Чому бренди довіряють NX APEX",
        "why1-title": "⚖️ Суворе дотримання MAP",
        "why1-desc": "Ми поважаємо мінімальну рекламовану ціну (MAP) кожного бренду. Ми не беремо участі в цінових війнах або демпінгу, які знецінюють вашу продукцію.",
        "why2-title": "🛡️ Захист бренду",
        "why2-desc": "Ми працюємо виключно через авторизовані канали. Жодного перехоплення лістингів чи розповсюдження через третіх осіб. Репутація бренду в безпеці.",
        "why3-title": "📦 Надійні оптові закупівлі",
        "why3-desc": "Ми — фінансово стабільний партнер, здатний забезпечувати регулярні об'ємні закупівлі. Ми будуємо довгострокові відносини, а не одноразові угоди.",
        "why4-title": "📈 Покращена презентація",
        "why4-desc": "Ми гарантуємо, що ваші товари будуть представлені красиво та точно на всіх наших авторизованих цифрових платформах, покращуючи їх сприйняття.",
        "contact-title": "Зростаймо разом",
        "contact-desc": "Шукаєте надійного партнера для оптових закупівель чи розширення цифрової присутності? Ми готові обговорити, як NX APEX LLC може допомогти вашому бізнесу.",
        "info-company": "Компанія:",
        "info-address": "Адреса:",
        "info-email": "Email:",
        "info-website": "Вебсайт:",
        "form-company": "Назва компанії / бренду",
        "form-name": "Контактна особа",
        "form-email": "Робочий email",
        "form-message": "Розкажіть про ваш бренд та можливості партнерства...",
        "form-submit": "Надіслати запит",
        "footer-text": "Всі права захищено. | Авторизований ритейл-партнер",
        "alert-sending": "Надсилання...",
        "alert-success": "Запит успішно надіслано"
    }
};

let currentLang = 'en';

// Зміна мови
function setLanguage(lang) {
    currentLang = lang;
    
    // Оновлення тексту
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Для HTML тегів всередині рядків (наприклад, <strong>)
            if (el.tagName === 'STRONG') {
                el.innerText = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Оновлення плейсхолдерів у формі
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Оновлення активного класу кнопок
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-ua').classList.toggle('active', lang === 'ua');
    
    // Збереження вибору мови
    localStorage.setItem('preferredLang', lang);
}

// Обробники подій для кнопок мов
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-ua').addEventListener('click', () => setLanguage('ua'));

// Ініціалізація мови при завантаженні
const savedLang = localStorage.getItem('preferredLang') || 'en';
setLanguage(savedLang);

// Плавний скролінг
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Тінь меню при скролінгу
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
    }
});

// Обробка форми з урахуванням мови
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const originalKey = btn.getAttribute('data-i18n');
    
    btn.textContent = translations[currentLang]["alert-sending"];
    btn.style.opacity = '0.7';

    setTimeout(() => {
        btn.textContent = translations[currentLang]["alert-success"];
        btn.style.backgroundColor = '#2ecc71'; 
        btn.style.borderColor = '#2ecc71';
        btn.style.color = '#fff';
        btn.style.opacity = '1';
        contactForm.reset();

        setTimeout(() => {
            btn.textContent = translations[currentLang][originalKey];
            btn.style.backgroundColor = 'transparent';
            btn.style.borderColor = 'var(--accent-blue)';
            btn.style.color = 'var(--accent-blue)';
        }, 4000);
    }, 1500);
});