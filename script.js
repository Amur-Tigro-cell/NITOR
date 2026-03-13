const departmentData = [
    { title: 'Orthopedic Surgery', icon: 'fa-bone', desc: 'Advanced surgical and non-surgical treatment for bone and joint conditions.' },
    { title: 'Trauma Care', icon: 'fa-truck-medical', desc: 'Rapid emergency trauma stabilization and definitive treatment.' },
    { title: 'Rehabilitation', icon: 'fa-wheelchair', desc: 'Structured recovery plans focused on mobility and quality of life.' },
    { title: 'Physiotherapy', icon: 'fa-person-walking', desc: 'Personalized therapy sessions to regain strength and function.' },
    { title: 'Sports Injury', icon: 'fa-futbol', desc: 'Diagnosis and treatment for ligament, tendon, and impact injuries.' },
    { title: 'Pediatric Orthopedics', icon: 'fa-child-reaching', desc: 'Child-focused orthopedic care for growth and development issues.' }
];

const doctorData = [
    { name: 'Prof. Dr. Md. Abul Kenan', specialization: 'Orthopedic Surgery', exp: '22 years', img: 'https://picsum.photos/id/1005/300/300' },
    { name: 'Prof. Dr. Md. Tofayel Hossain', specialization: 'Trauma Care', exp: '20 years', img: 'https://picsum.photos/id/1012/300/300' },
    { name: 'Dr. G. M. Jahangir Hossain', specialization: 'Orthopedic Surgery', exp: '18 years', img: 'https://picsum.photos/id/1027/300/300' },
    { name: 'Dr. Farhana Sultana', specialization: 'Rehabilitation', exp: '14 years', img: 'https://picsum.photos/id/1025/300/300' },
    { name: 'Dr. Kamal Uddin', specialization: 'Physiotherapy', exp: '16 years', img: 'https://picsum.photos/id/1001/300/300' },
    { name: 'Dr. Tania Chowdhury', specialization: 'Pediatric Orthopedics', exp: '12 years', img: 'https://picsum.photos/id/1062/300/300' }
];

const serviceData = [
    { title: 'Emergency Care', icon: 'fa-ambulance', desc: '24/7 emergency trauma and orthopedic support.' },
    { title: 'Surgery', icon: 'fa-user-doctor', desc: 'Modern operation facilities and specialist surgeons.' },
    { title: 'Rehabilitation', icon: 'fa-hand-holding-medical', desc: 'Post-treatment recovery and therapy programs.' },
    { title: 'Diagnostic Services', icon: 'fa-microscope', desc: 'Imaging and laboratory services for accurate diagnosis.' }
];

const testimonialData = [
    { name: 'Mr. Ahmed Hassan', rating: 5, text: 'Outstanding trauma support and excellent doctor coordination.', img: 'https://picsum.photos/id/1005/120/120' },
    { name: 'Mrs. Nasrin Begum', rating: 5, text: 'My rehabilitation outcome was better than expected. Great staff.', img: 'https://picsum.photos/id/1011/120/120' },
    { name: 'Mr. Karim Khan', rating: 5, text: 'Professional surgical care and very smooth patient management.', img: 'https://picsum.photos/id/1027/120/120' }
];

const galleryData = [
    'https://picsum.photos/id/1011/900/650',
    'https://picsum.photos/id/1005/900/650',
    'https://picsum.photos/id/1025/900/650',
    'https://picsum.photos/id/1043/900/650',
    'https://picsum.photos/id/1020/900/650',
    'https://picsum.photos/id/1015/900/650',
    'https://picsum.photos/id/1033/900/650',
    'https://picsum.photos/id/1062/900/650',
    'https://picsum.photos/id/1074/900/650'
];

let testimonialIndex = 0;
let testimonialInterval = null;
let lightboxIndex = 0;

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => preloader.classList.add('hide'), 500);
});

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMenu();
    renderDepartments();
    renderDoctors();
    renderServices();
    initTestimonials();
    initGallery();
    initCounters();
    initAOS();
    initAppointmentForm();
});

function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('nitorTheme') || 'light';
    setTheme(savedTheme);

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
        localStorage.setItem('nitorTheme', next);
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.querySelector('#themeToggle i');
    if (!icon) return;
    icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

function initMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navMenu');

    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        menu.classList.toggle('show');
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function renderDepartments() {
    const grid = document.getElementById('departmentsGrid');
    grid.innerHTML = departmentData.map((item, idx) => `
        <article class="card department-card" data-aos="fade-up" data-aos-delay="${idx * 70}">
            <i class="fa-solid ${item.icon}"></i>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </article>
    `).join('');
}

function renderDoctors() {
    const grid = document.getElementById('doctorsGrid');
    grid.innerHTML = doctorData.map((doctor, idx) => `
        <article class="card doctor-card" data-aos="fade-up" data-aos-delay="${idx * 70}">
            <img src="${doctor.img}" alt="${doctor.name}">
            <h3>${doctor.name}</h3>
            <p>${doctor.specialization}</p>
            <span class="doctor-meta">${doctor.exp} Experience</span>
            <a href="#contact" class="btn btn-primary">Book Appointment</a>
        </article>
    `).join('');
}

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = serviceData.map((service, idx) => `
        <article class="card service-card" data-aos="fade-up" data-aos-delay="${idx * 80}">
            <i class="fa-solid ${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
        </article>
    `).join('');
}

function initTestimonials() {
    const track = document.getElementById('testimonialTrack');
    const dots = document.getElementById('testimonialDots');
    const prev = document.getElementById('prevTestimonial');
    const next = document.getElementById('nextTestimonial');

    track.innerHTML = testimonialData.map((item) => {
        const stars = '<i class="fa-solid fa-star"></i>'.repeat(item.rating);
        return `
            <article class="card testimonial-card">
                <img src="${item.img}" alt="${item.name}">
                <div class="stars">${stars}</div>
                <p>"${item.text}"</p>
                <h4>${item.name}</h4>
            </article>
        `;
    }).join('');

    dots.innerHTML = testimonialData.map((_, i) => `
        <button aria-label="Go to testimonial ${i + 1}" data-index="${i}" class="${i === 0 ? 'active' : ''}"></button>
    `).join('');

    const update = (index) => {
        testimonialIndex = (index + testimonialData.length) % testimonialData.length;
        track.style.transform = `translateX(-${testimonialIndex * 100}%)`;
        dots.querySelectorAll('button').forEach((dot, i) => {
            dot.classList.toggle('active', i === testimonialIndex);
        });
    };

    prev.addEventListener('click', () => {
        update(testimonialIndex - 1);
        restartAutoSlide(update);
    });

    next.addEventListener('click', () => {
        update(testimonialIndex + 1);
        restartAutoSlide(update);
    });

    dots.addEventListener('click', (event) => {
        const btn = event.target.closest('button');
        if (!btn) return;
        update(Number(btn.dataset.index));
        restartAutoSlide(update);
    });

    testimonialInterval = setInterval(() => update(testimonialIndex + 1), 4500);
}

function restartAutoSlide(updateFn) {
    if (testimonialInterval) clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => updateFn(testimonialIndex + 1), 4500);
}

function initGallery() {
    const grid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    grid.innerHTML = galleryData.map((src, i) => `
        <button data-index="${i}" data-aos="zoom-in" data-aos-delay="${(i % 3) * 70}">
            <img src="${src}" alt="Hospital gallery image ${i + 1}">
        </button>
    `).join('');

    const setImage = (index) => {
        lightboxIndex = (index + galleryData.length) % galleryData.length;
        lightboxImage.src = galleryData[lightboxIndex];
    };

    grid.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) return;
        setImage(Number(button.dataset.index));
        lightbox.classList.add('show');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev').addEventListener('click', () => setImage(lightboxIndex - 1));
    document.getElementById('lightboxNext').addEventListener('click', () => setImage(lightboxIndex + 1));

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('show')) return;
        if (event.key === 'Escape') closeLightbox();
        if (event.key === 'ArrowLeft') setImage(lightboxIndex - 1);
        if (event.key === 'ArrowRight') setImage(lightboxIndex + 1);
    });

    function closeLightbox() {
        lightbox.classList.remove('show');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = Number(el.dataset.target || 0);
            const suffix = el.dataset.suffix || '';
            const comma = el.dataset.format === 'comma';
            const start = performance.now();
            const duration = 1400;

            const tick = (time) => {
                const progress = Math.min((time - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.floor(target * eased);
                el.textContent = `${comma ? value.toLocaleString('en-US') : value}${suffix}`;
                if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
            obs.unobserve(el);
        });
    }, { threshold: 0.35 });

    counters.forEach((counter) => observer.observe(counter));
}

function initAOS() {
    if (!window.AOS) return;
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60
    });
}

function initAppointmentForm() {
    const form = document.getElementById('quickAppointmentForm');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Appointment request submitted successfully. Our team will contact you shortly.');
        form.reset();
    });
}
