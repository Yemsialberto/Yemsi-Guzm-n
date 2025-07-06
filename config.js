// Configuración del sitio web - Pulaco Tatto
// Modifica estos valores para personalizar tu página web

const siteConfig = {
    // Información básica del estudio
    studioName: "PULACO TATTO",
    tagline: "Cada cuerpo es un lienzo que trato de pintar.",
    
    // Información del artista
    artist: {
        name: "Pulaco",
        title: "Maestro del Tatuaje",
        experience: "10+",
        completedTattoos: "1000+",
        satisfiedClients: "500+",
        description: [
            "Con más de 10 años de experiencia en el mundo del tatuaje, mi pasión comenzó como una forma de expresión personal y se ha convertido en mi forma de vida. Cada diseño que creo es único, pensado específicamente para la persona que lo llevará.",
            "Mi estilo se caracteriza por la precisión en cada línea, el cuidado en cada detalle y la búsqueda constante de la perfección. Desde realismo hasta diseños tribales, cada tatuaje es una obra de arte que cuenta una historia.",
            "Creo firmemente que cada cuerpo es un lienzo único, y mi misión es crear arte que no solo sea visualmente impactante, sino que también tenga un significado profundo para quien lo porta."
        ]
    },
    
    // Información de contacto
    contact: {
        phone: "+1 (555) 123-4567",
        email: "info@pulacotatto.com",
        address: {
            street: "Calle Principal 123",
            city: "Centro, Ciudad",
            zipCode: "CP 12345"
        },
        hours: {
            weekdays: "Lun - Vie: 10:00 - 20:00",
            saturday: "Sábado: 10:00 - 18:00",
            sunday: "Domingo: Cerrado"
        }
    },
    
    // Redes sociales
    social: {
        instagram: {
            handle: "@pulacotatto",
            url: "https://instagram.com/pulacotatto"
        },
        whatsapp: {
            number: "+15551234567",
            url: "https://wa.me/15551234567"
        },
        facebook: {
            name: "Pulaco Tatto",
            url: "https://facebook.com/pulacotatto"
        },
        tiktok: {
            handle: "@pulacotatto",
            url: "https://tiktok.com/@pulacotatto"
        }
    },
    
    // Servicios y precios
    services: {
        color: {
            name: "Tatuajes a Color",
            description: "Diseños vibrantes y detallados con la mejor calidad de tintas.",
            icon: "fas fa-palette",
            prices: {
                small: "$80 - $120",
                medium: "$150 - $250",
                large: "$300 - $500"
            }
        },
        blackWhite: {
            name: "Blanco y Negro",
            description: "Elegancia clásica con técnicas tradicionales y modernas.",
            icon: "fas fa-moon",
            prices: {
                small: "$60 - $100",
                medium: "$120 - $200",
                large: "$250 - $400"
            }
        },
        blackout: {
            name: "Blackout",
            description: "Tatuajes sólidos y impactantes con tinta negra pura.",
            icon: "fas fa-circle",
            prices: {
                small: "$70 - $110",
                medium: "$140 - $220",
                large: "$280 - $450"
            }
        },
        tribal: {
            name: "Tribales",
            description: "Diseños ancestrales con un toque contemporáneo.",
            icon: "fas fa-fire",
            prices: {
                small: "$65 - $95",
                medium: "$130 - $180",
                large: "$220 - $350"
            }
        },
        realism: {
            name: "Realismo",
            description: "Tatuajes hiperrealistas que capturan cada detalle.",
            icon: "fas fa-eye",
            prices: {
                small: "$100 - $150",
                medium: "$200 - $300",
                large: "$400 - $600"
            }
        },
        custom: {
            name: "Diseño Personalizado",
            description: "Creamos tu diseño único desde cero.",
            icon: "fas fa-heart",
            prices: {
                consultation: "$50",
                design: "$80 - $200",
                revisions: "$30 c/u"
            }
        }
    },
    
    // Configuración de la galería
    gallery: {
        categories: ["all", "color", "blackwhite", "blackout", "tribal", "realismo"],
        images: [
            {
                src: "https://images.unsplash.com/photo-1565058379802-bbe908e758f1?w=400&h=400&fit=crop",
                category: "color",
                title: "Tatuaje a Color",
                description: "Diseño vibrante y detallado"
            },
            {
                src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop",
                category: "blackwhite",
                title: "Blanco y Negro",
                description: "Elegancia en cada trazo"
            },
            {
                src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop",
                category: "blackout",
                title: "Blackout",
                description: "Intensidad y fuerza"
            },
            {
                src: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
                category: "tribal",
                title: "Tribales",
                description: "Tradición y modernidad"
            },
            {
                src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop",
                category: "realismo",
                title: "Realismo",
                description: "Arte que cobra vida"
            },
            {
                src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop",
                category: "color",
                title: "Tatuaje a Color",
                description: "Expresión única"
            }
        ]
    },
    
    // Configuración de colores del tema
    theme: {
        primaryColor: "#dc2626",
        secondaryColor: "#1f1f1f",
        backgroundDark: "#0a0a0a",
        backgroundLight: "#1a1a1a",
        textLight: "#ffffff",
        textGray: "#b0b0b0",
        accentRed: "#ef4444"
    },
    
    // Configuración de formularios
    booking: {
        depositPercentage: 30,
        responseTime: "24 horas",
        features: [
            "Consulta gratuita",
            "Diseño personalizado",
            "Ambiente estéril y seguro",
            "Materiales de primera calidad"
        ]
    },
    
    // Configuración de SEO
    seo: {
        title: "Pulaco Tatto - Estudio de Tatuajes Profesional",
        description: "Estudio de tatuajes profesional especializado en realismo, color, blackout y diseños tribales. Cada cuerpo es un lienzo que trato de pintar.",
        keywords: "tatuajes, tattoo, realismo, color, blackout, tribal, estudio tatuajes, pulaco tatto",
        author: "Pulaco Tatto Studio"
    },
    
    // Configuración de animaciones
    animations: {
        scrollReveal: true,
        parallaxEffect: true,
        typewriterEffect: true,
        counterAnimation: true,
        particleEffect: true
    }
};

// Función para aplicar la configuración
function applyConfig() {
    // Aplicar título del sitio
    document.title = siteConfig.seo.title;
    
    // Aplicar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = siteConfig.seo.description;
    }
    
    // Aplicar colores del tema
    const root = document.documentElement;
    root.style.setProperty('--primary-color', siteConfig.theme.primaryColor);
    root.style.setProperty('--secondary-color', siteConfig.theme.secondaryColor);
    root.style.setProperty('--background-dark', siteConfig.theme.backgroundDark);
    root.style.setProperty('--background-light', siteConfig.theme.backgroundLight);
    root.style.setProperty('--text-light', siteConfig.theme.textLight);
    root.style.setProperty('--text-gray', siteConfig.theme.textGray);
    root.style.setProperty('--accent-red', siteConfig.theme.accentRed);
    
    console.log('Configuración aplicada exitosamente');
}

// Exportar configuración para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
} else {
    window.siteConfig = siteConfig;
}

// Aplicar configuración cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', applyConfig);