// Funcionalidad del menú hamburguesa
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Efecto de scroll en la navegación
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Funcionalidad de la galería con filtros
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Añadir clase active al botón clickeado
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                    item.style.opacity = '1';
                }, 100);
            } else {
                item.style.transform = 'scale(0.8)';
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Efectos de scroll reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll', 'animated');
        }
    });
}, observerOptions);

// Observar elementos para animaciones
const elementsToAnimate = document.querySelectorAll('.gallery-item, .service-card, .about-text, .about-image, .contact-item, .stat');
elementsToAnimate.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// Funcionalidad del formulario de reservas
const bookingForm = document.getElementById('booking-form');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Recopilar datos del formulario
    const formData = new FormData(bookingForm);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Validar campos obligatorios
    const requiredFields = ['nombre', 'email', 'telefono', 'estilo', 'zona', 'tamano'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!data[field]) {
            input.style.borderColor = '#dc2626';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    if (!isValid) {
        showNotification('Por favor, completa todos los campos obligatorios.', 'error');
        return;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        document.getElementById('email').style.borderColor = '#dc2626';
        showNotification('Por favor, ingresa un email válido.', 'error');
        return;
    }
    
    // Simular envío del formulario
    const submitBtn = bookingForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        showNotification('¡Solicitud enviada exitosamente! Te contactaremos pronto.', 'success');
        bookingForm.reset();
    }, 2000);
});

// Sistema de notificaciones
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background-color: #10b981;' : 'background-color: #dc2626;'}
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Ocultar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Animación de números en las estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat h4');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Formatear número
            const suffix = counter.textContent.includes('+') ? '+' : '';
            counter.textContent = Math.floor(current) + suffix;
        }, 20);
    });
}

// Ejecutar animación de contadores cuando la sección esté visible
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    });
    statsObserver.observe(statsSection);
}

// Efecto parallax sutil en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
        heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Lazy loading para imágenes
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Funcionalidad de scroll suave para la flecha de scroll
const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
    heroScroll.addEventListener('click', () => {
        const gallerySection = document.getElementById('galeria');
        if (gallerySection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = gallerySection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

// Prevenir el comportamiento por defecto del formulario
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    });
});

// Animación de escritura del eslogan
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Ejecutar animación de escritura cuando la página carga
window.addEventListener('load', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 50);
        }, 1000);
    }
});

// Funcionalidad para el botón de navegación activa
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Manejo de errores globales
window.addEventListener('error', (e) => {
    console.error('Error:', e.error);
});

// Preloader (opcional)
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// Efectos de partículas en el hero (opcional)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(220, 38, 38, 0.5);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
        `;
        hero.appendChild(particle);
    }
}

// CSS para partículas
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); opacity: 1; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
    }
`;
document.head.appendChild(particleStyle);

// Inicializar partículas
createParticles();

// Funcionalidad para mostrar/ocultar elementos con animación
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Funcionalidad para copiar información de contacto
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Información copiada al portapapeles', 'success');
    }).catch(() => {
        showNotification('Error al copiar información', 'error');
    });
}

// Añadir eventos de clic a la información de contacto
document.addEventListener('DOMContentLoaded', () => {
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.querySelector('p').textContent;
            copyToClipboard(text);
        });
    });
});

// Optimización de rendimiento
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

// Aplicar debounce a eventos de scroll
window.addEventListener('scroll', debounce(() => {
    updateActiveNavLink();
    revealOnScroll();
}, 10));

// Funcionalidad para redes sociales
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.querySelector('span').textContent;
        
        switch (platform) {
            case '@pulacotatto':
                window.open('https://instagram.com/pulacotatto', '_blank');
                break;
            case 'WhatsApp':
                window.open('https://wa.me/15551234567', '_blank');
                break;
            case 'Facebook':
                window.open('https://facebook.com/pulacotatto', '_blank');
                break;
            case 'TikTok':
                window.open('https://tiktok.com/@pulacotatto', '_blank');
                break;
        }
    });
});

console.log('Pulaco Tatto Website - Loaded successfully! 🎨');