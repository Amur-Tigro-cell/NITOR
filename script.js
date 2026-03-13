// ============================================
// NITOR - Modern Hospital Website JavaScript
// ============================================

// Language configuration
const translations = {
    en: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        doctors: 'Our Team',
        appointment: 'Appointment',
        contact: 'Contact',
    },
    bn: {
        home: 'হোম',
        about: 'পরিচয়',
        services: 'সেবা',
        doctors: 'আমাদের টিম',
        appointment: 'অ্যাপয়েন্টমেন্ট',
        contact: 'যোগাযোগ',
    }
};

let currentLanguage = 'en';

const doctorProfiles = [
    {
        name: 'Prof. Dr. Md. Abul Kenan',
        designation: 'Director & Professor',
        specialization: 'Orthopedic Surgery',
        experience: '22 years experience',
        image: 'https://via.placeholder.com/160x160?text=Dr+Kenan'
    },
    {
        name: 'Prof. Dr. Md. Tofayel Hossain',
        designation: 'Professor',
        specialization: 'Trauma Surgery',
        experience: '20 years experience',
        image: 'https://via.placeholder.com/160x160?text=Dr+Tofayel'
    },
    {
        name: 'Dr. G. M. Jahangir Hossain',
        designation: 'Senior Consultant',
        specialization: 'Orthopedic Surgery',
        experience: '18 years experience',
        image: 'https://via.placeholder.com/160x160?text=Dr+Jahangir'
    },
    {
        name: 'Dr. Farhana Sultana',
        designation: 'Consultant',
        specialization: 'Trauma Surgery',
        experience: '14 years experience',
        image: 'https://via.placeholder.com/160x160?text=Dr+Farhana'
    },
    {
        name: 'Dr. Kamal Uddin',
        designation: 'Rehabilitation Specialist',
        specialization: 'Physical Medicine & Rehabilitation',
        experience: '16 years experience',
        image: 'https://via.placeholder.com/160x160?text=Dr+Kamal'
    },
    {
        name: 'Dr. Tania Chowdhury',
        designation: 'Consultant Physician',
        specialization: 'General Medicine',
        experience: '12 years experience',
        image: 'https://via.placeholder.com/160x160?text=Dr+Tania'
    }
];

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    renderDoctorProfiles();

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });

    // Dropdown functionality for mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        }
    });

    // Form submissions
    handleFormSubmissions();

    // Smooth scrolling for navigation links
    setupSmoothScrolling();
});

// ============================================
// SMOOTH SCROLLING
// ============================================

function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Skip if onclick handler is present (like modals)
            if (this.onclick || href === '#') {
                return;
            }
            if (href) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ============================================
// APPOINTMENT BOOKING
// ============================================

function scrollToAppointment() {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
        appointmentSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ============================================
// EMERGENCY CALL
// ============================================

function callEmergency() {
    // In a real app, this would initiate a call or open phone app
    alert('Emergency Number: +88-02-55058902\n\nPlease call immediately for emergency assistance.');
    // Alternatively: window.location.href = 'tel:+8802550589 02';
}

function renderDoctorProfiles() {
    const doctorGrid = document.getElementById('doctorProfilesGrid');
    if (!doctorGrid) {
        return;
    }

    doctorGrid.innerHTML = doctorProfiles.map(profile => `
        <article class="doctor-card">
            <div class="doctor-image">
                <img src="${profile.image}" alt="${profile.name}">
            </div>
            <h3>${profile.name}</h3>
            <p class="designation">${profile.designation}</p>
            <p class="specialty">${profile.specialization}</p>
            <p class="experience"><i class="fas fa-award"></i>${profile.experience}</p>
            <button
                type="button"
                class="btn btn-primary doctor-book-btn"
                data-name="${profile.name}"
                data-department="${profile.specialization}">
                Book Appointment
            </button>
        </article>
    `).join('');

    doctorGrid.querySelectorAll('.doctor-book-btn').forEach(button => {
        button.addEventListener('click', function() {
            const doctorName = this.getAttribute('data-name');
            const departmentName = this.getAttribute('data-department');
            bookDoctorAppointment(doctorName, departmentName);
        });
    });
}

function bookDoctorAppointment(doctorName, departmentName) {
    scrollToAppointment();

    const departmentSelect = document.getElementById('department');
    const doctorSelect = document.getElementById('doctor');

    if (departmentSelect && doctorSelect) {
        departmentSelect.value = departmentName;
        updateDoctorOptions(departmentSelect, doctorSelect);

        if ([...doctorSelect.options].some(option => option.value === doctorName)) {
            doctorSelect.value = doctorName;
        }
    }
}

const doctorDirectory = {
    'Orthopedic Surgery': [
        'Prof. Dr. Md. Abul Kenan',
        'Dr. G. M. Jahangir Hossain'
    ],
    'Trauma Surgery': [
        'Prof. Dr. Md. Tofayel Hossain',
        'Dr. Farhana Sultana'
    ],
    'Physical Medicine & Rehabilitation': [
        'Dr. Kamal Uddin',
        'Dr. Shahida Akter'
    ],
    Cardiology: [
        'Dr. Nabil Ahmed',
        'Dr. Muntaha Rahman'
    ],
    'General Medicine': [
        'Dr. Hasan Mahmud',
        'Dr. Tania Chowdhury'
    ]
};

function setFieldError(field, message) {
    const errorElement = document.getElementById(`${field.id}Error`);
    field.classList.add('input-error');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearFieldError(field) {
    const errorElement = document.getElementById(`${field.id}Error`);
    field.classList.remove('input-error');
    if (errorElement) {
        errorElement.textContent = '';
    }
}

function clearAppointmentErrors(fields) {
    Object.values(fields).forEach(field => clearFieldError(field));
}

function updateDoctorOptions(departmentSelect, doctorSelect) {
    const selectedDepartment = departmentSelect.value;
    const doctors = doctorDirectory[selectedDepartment] || [];

    doctorSelect.innerHTML = '';

    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = doctors.length ? 'Select Doctor' : 'Select Department First';
    doctorSelect.appendChild(placeholder);

    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor;
        option.textContent = doctor;
        doctorSelect.appendChild(option);
    });

    doctorSelect.disabled = doctors.length === 0;
}

function renderAppointmentConfirmation(appointmentData) {
    const confirmationBox = document.getElementById('appointmentConfirmation');
    if (!confirmationBox) {
        return;
    }

    const dateText = new Date(appointmentData.date).toLocaleDateString('en-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    confirmationBox.innerHTML = `
        <strong>Appointment booked successfully.</strong><br>
        Patient: ${appointmentData.patientName}<br>
        Phone: ${appointmentData.phoneNumber}<br>
        Department: ${appointmentData.department}<br>
        Doctor: ${appointmentData.doctor}<br>
        Date & Time: ${dateText}, ${appointmentData.time}
    `;
    confirmationBox.classList.add('show');
}

// ============================================
// FORM HANDLING
// ============================================

function handleFormSubmissions() {
    // Appointment Form
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        const patientName = document.getElementById('patientName');
        const phoneNumber = document.getElementById('phoneNumber');
        const department = document.getElementById('department');
        const doctor = document.getElementById('doctor');
        const appointmentDate = document.getElementById('appointmentDate');
        const appointmentTime = document.getElementById('appointmentTime');
        const confirmationBox = document.getElementById('appointmentConfirmation');

        const appointmentFields = {
            patientName,
            phoneNumber,
            department,
            doctor,
            appointmentDate,
            appointmentTime
        };

        const today = new Date();
        const minDate = today.toISOString().split('T')[0];
        if (appointmentDate) {
            appointmentDate.min = minDate;
        }

        if (department && doctor) {
            updateDoctorOptions(department, doctor);
            department.addEventListener('change', function() {
                updateDoctorOptions(department, doctor);
                clearFieldError(department);
                clearFieldError(doctor);
            });
        }

        Object.values(appointmentFields).forEach(field => {
            if (!field) {
                return;
            }

            field.addEventListener('input', function() {
                clearFieldError(field);
            });

            field.addEventListener('change', function() {
                clearFieldError(field);
            });
        });

        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            clearAppointmentErrors(appointmentFields);

            if (confirmationBox) {
                confirmationBox.classList.remove('show');
                confirmationBox.textContent = '';
            }

            let isValid = true;
            const firstErrorField = [];

            const nameValue = patientName.value.trim();
            if (!nameValue || nameValue.length < 2) {
                isValid = false;
                setFieldError(patientName, 'Enter a valid patient name.');
                firstErrorField.push(patientName);
            }

            const phoneValue = phoneNumber.value.trim();
            if (!/^\+?\d{10,15}$/.test(phoneValue)) {
                isValid = false;
                setFieldError(phoneNumber, 'Enter a valid phone number (10-15 digits).');
                firstErrorField.push(phoneNumber);
            }

            if (!department.value) {
                isValid = false;
                setFieldError(department, 'Please select a department.');
                firstErrorField.push(department);
            }

            if (!doctor.value) {
                isValid = false;
                setFieldError(doctor, 'Please select a doctor.');
                firstErrorField.push(doctor);
            }

            if (!appointmentDate.value) {
                isValid = false;
                setFieldError(appointmentDate, 'Please select a date.');
                firstErrorField.push(appointmentDate);
            } else {
                const selectedDate = new Date(`${appointmentDate.value}T00:00:00`);
                const todayDate = new Date();
                todayDate.setHours(0, 0, 0, 0);
                if (selectedDate < todayDate) {
                    isValid = false;
                    setFieldError(appointmentDate, 'Date cannot be in the past.');
                    firstErrorField.push(appointmentDate);
                }
            }

            if (!appointmentTime.value) {
                isValid = false;
                setFieldError(appointmentTime, 'Please select a time.');
                firstErrorField.push(appointmentTime);
            }

            if (!isValid) {
                if (firstErrorField.length > 0) {
                    firstErrorField[0].focus();
                }
                return;
            }

            const formData = {
                patientName: nameValue,
                phoneNumber: phoneValue,
                department: department.value,
                doctor: doctor.value,
                date: appointmentDate.value,
                time: appointmentTime.value,
                timestamp: new Date().toISOString()
            };

            const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
            appointments.push(formData);
            localStorage.setItem('appointments', JSON.stringify(appointments));

            renderAppointmentConfirmation(formData);

            this.reset();
            updateDoctorOptions(department, doctor);
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input, textarea');
            const formData = {
                name: inputs[0].value,
                email: inputs[1].value,
                subject: inputs[2].value,
                message: inputs[3].value,
            };

            // Validate form
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                alert('❌ Please fill in all fields');
                return;
            }

            // Show success message
            const successMsg = `
✅ MESSAGE SENT SUCCESSFULLY!

Thank you for contacting NITOR Hospital.

Your Message Details:
─────────────────────
From: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

We will get back to you at ${formData.email} within 24 hours.

Best regards,
NITOR Hospital Team
            `;
            
            alert(successMsg);
            
            // Reset form
            this.reset();
            
            // Store in localStorage for demo purposes
            const messages = JSON.parse(localStorage.getItem('messages') || '[]');
            messages.push({...formData, timestamp: new Date().toISOString()});
            localStorage.setItem('messages', JSON.stringify(messages));
        });
    }
}

// ============================================
// LANGUAGE SWITCHING
// ============================================

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
    setLanguage(currentLanguage);
    updateLanguageButton();
}

function setLanguage(lang) {
    currentLanguage = lang;
    updateLanguageButton();
    // Store language preference
    localStorage.setItem('nitorLanguage', lang);
}

function updateLanguageButton() {
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
        langBtn.textContent = currentLanguage === 'en' ? 'বাংলা' : 'English';
    }
}

// Load saved language preference
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('nitorLanguage') || 'en';
    setLanguage(savedLanguage);
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards for animation
    document.querySelectorAll('.service-card, .dept-card, .doctor-card, .news-card, .stat-card, .hospital-stat-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});

// ============================================
// ACTIVE LINK HIGHLIGHTING
// ============================================

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================

function animateCounters() {
    const counters = document.querySelectorAll('.counter-value');
    if (counters.length === 0) {
        return;
    }

    const observerOptions = {
        threshold: 0.35
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.dataset.counted !== 'true') {
                const element = entry.target;
                const target = Number(element.dataset.counterTarget || '0');
                const suffix = element.dataset.counterSuffix || '';
                const useCommaFormat = element.dataset.counterFormat === 'comma';
                const duration = 1500;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = Math.min((currentTime - startTime) / duration, 1);
                    const eased = 1 - Math.pow(1 - elapsed, 3);
                    const currentValue = Math.floor(target * eased);
                    const formattedValue = useCommaFormat
                        ? currentValue.toLocaleString('en-US')
                        : String(currentValue);

                    element.textContent = `${formattedValue}${suffix}`;

                    if (elapsed < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        const finalValue = useCommaFormat
                            ? target.toLocaleString('en-US')
                            : String(target);
                        element.textContent = `${finalValue}${suffix}`;
                        element.dataset.counted = 'true';
                    }
                }

                requestAnimationFrame(updateCounter);

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

document.addEventListener('DOMContentLoaded', animateCounters);

// ============================================
// DEPARTMENT MODAL SYSTEM
// ============================================

const departmentContent = {
    orthopedics: {
        title: 'Orthopedic Surgery',
        content: `
            <h3>Overview</h3>
            <p>Our Orthopedic Surgery department specializes in the diagnosis, treatment, and rehabilitation of disorders affecting bones, joints, ligaments, and muscles.</p>
            
            <h3>Services Offered:</h3>
            <ul>
                <li>Joint replacement surgery</li>
                <li>Fracture management and treatment</li>
                <li>Arthroscopic surgery</li>
                <li>Spinal surgery</li>
                <li>Sports medicine and injuries</li>
                <li>Rehabilitation and physiotherapy</li>
            </ul>
            
            <h3>Our Team:</h3>
            <p>Led by Prof. Dr. Md. Abul Kenan with highly experienced orthopedic surgeons and specialists.</p>
        `
    },
    trauma: {
        title: 'Trauma Surgery',
        content: `
            <h3>Overview</h3>
            <p>Our Trauma Surgery department provides comprehensive emergency care for trauma patients with 24/7 availability.</p>
            
            <h3>Services Offered:</h3>
            <ul>
                <li>Emergency trauma care</li>
                <li>Accident and injury management</li>
                <li>Multi-trauma patient care</li>
                <li>Burn management</li>
                <li>Critical care management</li>
                <li>Post-trauma rehabilitation</li>
            </ul>
            
            <h3>Our Team:</h3>
            <p>Expert trauma surgeons available 24/7 with Prof. Dr. Md. Tofayel Hossain leading the department.</p>
        `
    },
    rehabilitation: {
        title: 'Physical Medicine & Rehabilitation',
        content: `
            <h3>Overview</h3>
            <p>We provide comprehensive rehabilitation services to help patients recover and restore functionality after injuries or surgeries.</p>
            
            <h3>Services Offered:</h3>
            <ul>
                <li>Physiotherapy programs</li>
                <li>Occupational therapy</li>
                <li>Pain management</li>
                <li>Post-operative rehabilitation</li>
                <li>Mobility and strength training</li>
                <li>Patient education and counseling</li>
            </ul>
            
            <h3>Our Team:</h3>
            <p>Experienced rehabilitation specialists and physiotherapists dedicated to patient recovery.</p>
        `
    },
    radiology: {
        title: 'Radiology & Imaging',
        content: `
            <h3>Overview</h3>
            <p>Our state-of-the-art radiology department offers advanced diagnostic imaging services.</p>
            
            <h3>Services Offered:</h3>
            <ul>
                <li>X-ray imaging</li>
                <li>CT (Computed Tomography) scanning</li>
                <li>MRI (Magnetic Resonance Imaging)</li>
                <li>Ultrasound imaging</li>
                <li>Digital radiography</li>
                <li>Image-guided procedures</li>
            </ul>
            
            <h3>Technology:</h3>
            <p>equipped with latest diagnostic imaging technology for accurate diagnosis and treatment planning.</p>
        `
    },
    pathology: {
        title: 'Pathology',
        content: `
            <h3>Overview</h3>
            <p>Our pathology laboratory provides comprehensive diagnostic testing services with accurate and timely results.</p>
            
            <h3>Services Offered:</h3>
            <ul>
                <li>Clinical pathology testing</li>
                <li>Hematology (blood) tests</li>
                <li>Biochemistry tests</li>
                <li>Microbiology and culture tests</li>
                <li>Immunology testing</li>
                <li>Transfusion medicine services</li>
            </ul>
            
            <h3>Quality Assurance:</h3>
            <p>All tests conducted by certified pathologists with strict quality control measures.</p>
        `
    },
    anesthesia: {
        title: 'Anesthesiology',
        content: `
            <h3>Overview</h3>
            <p>Our anesthesiology department ensures safe and effective anesthetic management for all surgical procedures.</p>
            
            <h3>Services Offered:</h3>
            <ul>
                <li>General anesthesia</li>
                <li>Regional anesthesia</li>
                <li>Local anesthesia</li>
                <li>Pain management</li>
                <li>Critical care anesthesia</li>
                <li>Patient pre-operative assessment</li>
            </ul>
            
            <h3>Our Team:</h3>
            <p>Experienced anesthesiologists ensuring patient safety and comfort during all procedures.</p>
        `
    }
};

function showModal(department) {
    const modal = document.getElementById('departmentModal');
    const content = departmentContent[department];
    
    document.getElementById('modalTitle').textContent = content.title;
    document.getElementById('modalBody').innerHTML = content.content;
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('departmentModal');
    modal.classList.remove('show');
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('departmentModal');
    if (event.target === modal) {
        closeModal();
    }
});

// ============================================
// FAQ TOGGLE FUNCTIONALITY
// ============================================

function toggleFaq(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

// ============================================
// SHOW ALL NEWS
// ============================================

function showAllNews() {
    alert('Redirecting to News Page...\n\nThis would show all news articles. You can replace with actual news page link.');
    // window.location.href = '/news';
}


// Smooth scroll helper for button clicks
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add active class to current navigation item
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// ============================================
// RESPONSIVE IMAGE LAZY LOADING
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function(event) {
    // Press 'E' for emergency
    if (event.key.toLowerCase() === 'e' && event.ctrlKey) {
        event.preventDefault();
        callEmergency();
    }
    
    // Press 'A' for appointment
    if (event.key.toLowerCase() === 'a' && event.ctrlKey) {
        event.preventDefault();
        scrollToAppointment();
    }
});

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================

// Improve focus management
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        document.body.classList.add('kbd-focus');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('kbd-focus');
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounce for scroll events
const handleScroll = debounce(function() {
    // Your scroll handling code
}, 100);

window.addEventListener('scroll', handleScroll);
