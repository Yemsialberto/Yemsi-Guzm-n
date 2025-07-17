// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos
    const lockScreen = document.getElementById('lockScreen');
    const mainContent = document.getElementById('mainContent');
    const enterBtn = document.getElementById('enterBtn');
    const body = document.body;

    // Función para manejar la transición
    function handleEnterClick() {
        // Agregar clase para desvanecer la pantalla de bloqueo
        lockScreen.classList.add('fade-out');
        
        // Después de un breve retraso, mostrar el contenido principal
        setTimeout(() => {
            mainContent.classList.add('show');
        }, 300);
        
        // Habilitar scroll después de que termine la transición
        setTimeout(() => {
            body.classList.add('enable-scroll');
        }, 800);
    }

    // Agregar event listener al botón
    enterBtn.addEventListener('click', handleEnterClick);

    // Opcional: permitir entrar presionando Enter
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !lockScreen.classList.contains('fade-out')) {
            handleEnterClick();
        }
    });

    // Opcional: agregar un efecto de partículas sutiles en el fondo
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        
        lockScreen.appendChild(particlesContainer);
        
        // Crear partículas individuales
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 2}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }

    // Agregar CSS para la animación de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0px) scale(1);
                opacity: 0.3;
            }
            50% {
                transform: translateY(-10px) scale(1.1);
                opacity: 0.6;
            }
        }
    `;
    document.head.appendChild(style);

    // Inicializar partículas
    createParticles();

    // Agregar efecto de typing al nombre (opcional)
    function typeWriter() {
        const nameElement = document.querySelector('.name');
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, 100);
    }

    // Inicializar efecto de typing después de un pequeño retraso
    setTimeout(typeWriter, 500);
});