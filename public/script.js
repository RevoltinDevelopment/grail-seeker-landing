// Grail Seeker Landing Page JavaScript
// Professional, accessibility-focused interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initForms();
    initModal();
    initScrollEffects();
    initAnalytics();
});

// Navigation functionality
function initNavigation() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll-based navigation styling
    let lastScrollTop = 0;
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });
}

// Form handling functionality
function initForms() {
    // Early access form
    const earlyAccessForm = document.getElementById('early-access-form');
    if (earlyAccessForm) {
        earlyAccessForm.addEventListener('submit', handleEarlyAccessSubmit);
    }

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Form validation
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('blur', validateInput);
        input.addEventListener('input', clearValidationError);
    });
}

// Early access form submission
async function handleEarlyAccessSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const email = form.querySelector('#email').value;
    const collectingFocus = form.querySelector('#collecting-focus').value;

    // Validate email
    if (!isValidEmail(email)) {
        showFormError('email', 'Please enter a valid email address');
        return;
    }

    // Update button state
    setButtonLoading(submitButton, true);

    try {
        // Submit to Netlify Forms (or your preferred service)
        const formData = new FormData(form);

        const response = await fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
            // Track successful signup
            trackEvent('early_access_signup', {
                email: email,
                collecting_focus: collectingFocus || 'not_specified'
            });

            // Show success modal
            showSuccessModal('Thank you for joining our waitlist! We\'ll be in touch soon with beta testing details.');

            // Reset form
            form.reset();
        } else {
            throw new Error('Submission failed');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showFormError('email', 'Something went wrong. Please try again.');

        // Track error
        trackEvent('early_access_error', {
            error: error.message
        });
    } finally {
        setButtonLoading(submitButton, false);
    }
}

// Contact form submission
async function handleContactSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);

    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    let isValid = true;

    requiredFields.forEach(field => {
        const input = form.querySelector(`[name="${field}"]`);
        if (!input.value.trim()) {
            showFormError(field, 'This field is required');
            isValid = false;
        }
    });

    // Validate email
    const email = form.querySelector('[name="email"]').value;
    if (email && !isValidEmail(email)) {
        showFormError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!isValid) return;

    // Update button state
    setButtonLoading(submitButton, true);

    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
            // Track contact form submission
            trackEvent('contact_form_submit', {
                subject: formData.get('subject')
            });

            // Show success message
            showSuccessModal('Thank you for your message! We\'ll get back to you within 24 hours.');

            // Reset form
            form.reset();
        } else {
            throw new Error('Submission failed');
        }
    } catch (error) {
        console.error('Contact form error:', error);
        showFormError('message', 'Something went wrong. Please try again or email us directly.');

        trackEvent('contact_form_error', {
            error: error.message
        });
    } finally {
        setButtonLoading(submitButton, false);
    }
}

// Form validation utilities
function validateInput(e) {
    const input = e.target;
    const value = input.value.trim();

    // Clear previous errors
    clearValidationError(e);

    // Validate based on input type and requirements
    if (input.hasAttribute('required') && !value) {
        showFormError(input.name || input.id, 'This field is required');
        return false;
    }

    if (input.type === 'email' && value && !isValidEmail(value)) {
        showFormError(input.name || input.id, 'Please enter a valid email address');
        return false;
    }

    return true;
}

function clearValidationError(e) {
    const input = e.target;
    const errorElement = input.parentElement.querySelector('.form-error');

    if (errorElement) {
        errorElement.remove();
    }

    input.classList.remove('error');
}

function showFormError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"], #${fieldName}`);
    if (!field) return;

    // Remove existing error
    const existingError = field.parentElement.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }

    // Add error styling
    field.classList.add('error');

    // Create error message
    const errorElement = document.createElement('div');
    errorElement.className = 'form-error';
    errorElement.textContent = message;
    errorElement.style.color = '#DC2626';
    errorElement.style.fontSize = '0.75rem';
    errorElement.style.marginTop = '0.25rem';

    // Insert after the input
    field.parentElement.appendChild(errorElement);

    // Focus the field
    field.focus();
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.innerHTML = `
            <svg class="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" stroke-dasharray="31.416" stroke-dashoffset="31.416">
                    <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
                    <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
                </circle>
            </svg>
            <span>Submitting...</span>
        `;
    } else {
        button.disabled = false;
        // Reset to original content
        if (button.closest('#early-access-form')) {
            button.innerHTML = `
                <span>Join the Waitlist</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
        } else {
            button.textContent = 'Send Message';
        }
    }
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('success-modal');
    const closeButton = document.getElementById('close-modal');

    if (closeButton) {
        closeButton.addEventListener('click', hideModal);
    }

    // Close modal on outside click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideModal();
            }
        });
    }

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            hideModal();
        }
    });
}

function showSuccessModal(message) {
    const modal = document.getElementById('success-modal');
    const messageElement = modal.querySelector('p');

    if (messageElement && message) {
        messageElement.textContent = message;
    }

    modal.classList.add('show');

    // Focus the close button for accessibility
    const closeButton = modal.querySelector('#close-modal');
    if (closeButton) {
        closeButton.focus();
    }
}

function hideModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('show');
}

// Scroll effects and animations
function initScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.step, .feature, .platform, .timeline-item');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Parallax effect for hero section (subtle)
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroElement = document.querySelector('.hero');

        if (heroElement && scrolled < window.innerHeight) {
            const speed = scrolled * 0.5;
            heroElement.style.transform = `translateY(${speed}px)`;
        }

        ticking = false;
    }

    function requestParallax() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestParallax);
}

// Analytics and tracking
function initAnalytics() {
    // Track page view
    trackEvent('page_view', {
        page: 'landing',
        timestamp: new Date().toISOString()
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    let scrollDepthTracked = {
        '25': false,
        '50': false,
        '75': false,
        '100': false
    };

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        maxScrollDepth = Math.max(maxScrollDepth, scrollPercent);

        // Track scroll milestones
        Object.keys(scrollDepthTracked).forEach(depth => {
            if (!scrollDepthTracked[depth] && scrollPercent >= parseInt(depth)) {
                scrollDepthTracked[depth] = true;
                trackEvent('scroll_depth', {
                    depth: depth + '%'
                });
            }
        });
    });

    // Track external link clicks
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && link.hostname && link.hostname !== window.location.hostname) {
            trackEvent('external_link_click', {
                url: link.href,
                text: link.textContent.trim()
            });
        }
    });

    // Track time on page
    const startTime = Date.now();

    window.addEventListener('beforeunload', function() {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        trackEvent('time_on_page', {
            seconds: timeOnPage,
            max_scroll_depth: maxScrollDepth + '%'
        });
    });
}

// Analytics tracking function
function trackEvent(eventName, properties = {}) {
    // This will be replaced with actual analytics service
    // For now, just log to console in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Analytics Event:', eventName, properties);
        return;
    }

    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            custom_parameter_1: properties.page || '',
            custom_parameter_2: properties.section || '',
            value: properties.value || 0
        });
    }

    // Additional analytics services can be added here
    // Example: Mixpanel, Amplitude, etc.
}

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;

        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}

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
    };
}

// Add animation styles via JavaScript (avoids CSS complexity)
const animationStyles = `
.step, .feature, .platform, .timeline-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.step.animate-in, .feature.animate-in, .platform.animate-in, .timeline-item.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.nav.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.form-input.error {
    border-color: #DC2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);