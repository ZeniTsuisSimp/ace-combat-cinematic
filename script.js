// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initSmoothScrolling();
    initAnimations();
    initSettings();
    initNavigation();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 96; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll-triggered animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.dataset.delay || 0;
                
                setTimeout(() => {
                    element.style.animationDelay = delay + 'ms';
                    element.classList.add('animate');
                }, delay);
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all fade-up elements
    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach(el => {
        observer.observe(el);
    });

    // Observe all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(el => {
        observer.observe(el);
    });
}

// Initialize settings controls
function initSettings() {
    // HUD Brightness Slider
    const hudBrightnessSlider = document.getElementById('hudBrightness');
    if (hudBrightnessSlider) {
        hudBrightnessSlider.addEventListener('input', function() {
            const value = this.value;
            console.log('HUD Brightness:', value + '%');
            
            // Apply brightness effect to HUD elements
            const hudElements = document.querySelectorAll('.nav-indicator, .hud-corner, .btn-primary');
            hudElements.forEach(el => {
                el.style.filter = `brightness(${value}%) ${el.style.filter || ''}`;
            });
        });
    }

    // Audio Range Slider
    const audioRangeSlider = document.getElementById('audioRange');
    if (audioRangeSlider) {
        audioRangeSlider.addEventListener('input', function() {
            const value = this.value;
            console.log('Audio Dynamic Range:', value + '%');
            // Here you would implement audio range adjustment
        });
    }

    // Metric Units Toggle
    const metricUnitsToggle = document.getElementById('metricUnits');
    if (metricUnitsToggle) {
        metricUnitsToggle.addEventListener('change', function() {
            const isMetric = this.checked;
            console.log('Metric Units:', isMetric ? 'Enabled' : 'Disabled');
            
            // Update telemetry display
            updateTelemetryUnits(isMetric);
        });
    }

    // Motion Blur Toggle
    const motionBlurToggle = document.getElementById('motionBlur');
    if (motionBlurToggle) {
        motionBlurToggle.addEventListener('change', function() {
            const isEnabled = this.checked;
            console.log('Motion Blur:', isEnabled ? 'Enabled' : 'Disabled');
            
            // Apply motion blur effect
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                if (isEnabled) {
                    heroSection.style.filter = 'blur(0.5px)';
                    heroSection.style.transition = 'filter 0.3s ease';
                } else {
                    heroSection.style.filter = 'none';
                }
            }
        });
    }
}

// Update telemetry units
function updateTelemetryUnits(isMetric) {
    const telemetryValues = document.querySelectorAll('.telemetry-value');
    
    telemetryValues.forEach((element, index) => {
        switch(index) {
            case 0: // Altitude
                element.textContent = isMetric ? '10,668 m' : '35,000 ft';
                break;
            case 1: // Airspeed
                element.textContent = isMetric ? '2,205 km/h' : 'Mach 1.8';
                break;
            case 2: // Heading remains the same
                break;
            case 3: // Systems remains the same
                break;
        }
    });
}

// Navigation highlighting
function initNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Initial call
}

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary) !important;
        filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.6));
    }
    
    .nav-link.active::after {
        transform: scaleX(1);
    }
    
    .card.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .fade-up.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'H' to toggle HUD elements visibility
    if (e.key.toLowerCase() === 'h' && !e.ctrlKey && !e.metaKey) {
        const hudElements = document.querySelectorAll('.hud-corner, .nav-indicator');
        hudElements.forEach(el => {
            el.style.opacity = el.style.opacity === '0' ? '1' : '0';
        });
    }
    
    // Press 'Escape' to scroll to top
    if (e.key === 'Escape') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// Add parallax effect to hero background
function initParallax() {
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            heroImage.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Initialize parallax after DOM is loaded
document.addEventListener('DOMContentLoaded', initParallax);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll-heavy functions
const throttledHighlightNav = throttle(function() {
    // Navigation highlighting logic here
}, 100);

window.addEventListener('scroll', throttledHighlightNav);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const initialElements = document.querySelectorAll('.fade-up[data-delay="0"], .card[data-delay="0"]');
        initialElements.forEach(el => {
            el.classList.add('animate');
        });
    }, 100);
});

// Add CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded) .hero-section {
        opacity: 0;
    }
    
    body.loaded .hero-section {
        opacity: 1;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(loadingStyle);