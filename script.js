// ============ Configuration ============
const config = {
    phoneNumber: '254715061546',
    emailAddress: 'info@gnetcyber26.co.ke',
    whatsappMessage: 'Hello G-Net Services, I am interested in your services. Could you assist me?',
    siteUrl: 'https://addy-ai575.github.io/g-net-cyber-services-op/',
    siteTitle: 'G-Net Services - Professional IT & Network Solutions in Nairobi'
};

// ============ Service Details ============
const serviceDetails = {
    'Network Installation': 'Structured cabling, router setup, Wi-Fi optimization, and complete LAN/WAN installation. We design and implement enterprise-grade networks tailored to your business requirements.',
    'CCTV Systems': 'High-definition IP cameras, analog systems, remote monitoring & 24/7 recording solutions. Keep your premises secure with our advanced surveillance technology.',
    'Computer Repair': 'Hardware diagnostics, virus removal, OS installation, data recovery, and upgrades. Fast turnaround time with professional service.',
    'IT Consulting': 'Network audits, IT infrastructure design, cloud solutions, and cybersecurity advisory. Expert guidance to transform your IT landscape.',
    'Printing Services': 'High-quality document printing, binding, laminating, and bulk print jobs. Professional results for all your printing needs.',
    'Document Scanning': 'Fast document digitization, OCR, archiving, and secure data storage. Go paperless with our comprehensive scanning solutions.',
    'KRA PIN Application': 'Assistance with KRA PIN registration, returns filing, and tax compliance. Simplify your tax obligations with expert help.',
    'Passport Services': 'Guidance on passport application, appointment booking, and document verification. We help you navigate the passport process smoothly.'
};

// ============ Utility Functions ============
function encodeWhatsAppMessage(message) {
    return encodeURIComponent(message);
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function openLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// ============ Sharing Functions ============
function shareOnWhatsApp() {
    const message = `Check out G-Net Services - Professional IT & Network Solutions! ${config.siteUrl}`;
    const url = `https://wa.me/?text=${encodeWhatsAppMessage(message)}`;
    openLink(url);
}

function shareOnFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.siteUrl)}`;
    openLink(url);
}

function shareOnTwitter() {
    const text = `Check out @GNetServices - Professional IT & Network Solutions in Nairobi! Trusted by 600+ businesses. #ITServices #Networking`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(config.siteUrl)}`;
    openLink(url);
}

function shareViaEmail() {
    const subject = 'G-Net Services - Professional IT Solutions';
    const body = `Check out G-Net Services - Professional IT & Network Solutions in Nairobi. Trusted by 600+ businesses.\n\n${config.siteUrl}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function copyLinkToClipboard() {
    navigator.clipboard.writeText(config.siteUrl).then(() => {
        const btn = document.getElementById('copyLink');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.style.background = '#25D366';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
        }, 2000);
    }).catch(() => {
        alert('Failed to copy link. Please try again.');
    });
}

// ============ Communication Functions ============
function sendWhatsApp(customMessage = null) {
    const message = customMessage || config.whatsappMessage;
    const url = `https://wa.me/${config.phoneNumber}?text=${encodeWhatsAppMessage(message)}`;
    openLink(url);
}

function sendEmail() {
    window.location.href = `mailto:${config.emailAddress}?subject=Service Inquiry from Website&body=Hi G-Net, I would like more information about your IT and networking solutions.`;
}

function callPhone() {
    window.location.href = `tel:+${config.phoneNumber}`;
}

// ============ Modal Functions ============
const modal = document.getElementById('serviceModal');
const closeBtn = document.querySelector('.close');

function showServiceModal(serviceName) {
    const description = serviceDetails[serviceName] || `${serviceName} service — expert support with fast turnaround. Contact us for a detailed quote!`;
    
    document.getElementById('modalTitle').textContent = `${serviceName}`;
    document.getElementById('modalDescription').textContent = description;
    
    const modalCTA = document.getElementById('modalCTA');
    modalCTA.onclick = () => {
        sendWhatsApp(`Hi G-Net, I'm interested in your ${serviceName} service. Can you provide a quote?`);
        closeServiceModal();
    };
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ============ Event Listeners - Service Cards ============
function bindServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const serviceName = this.getAttribute('data-service');
            showServiceModal(serviceName);
        });
        
        // Keyboard accessibility
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const serviceName = this.getAttribute('data-service');
                showServiceModal(serviceName);
            }
        });
    });
}

// ============ Event Listeners - Sharing Buttons ============
function bindShareButtons() {
    const shareWhatsApp = document.getElementById('shareWhatsApp');
    const shareFacebook = document.getElementById('shareFacebook');
    const shareTwitter = document.getElementById('shareTwitter');
    const shareEmail = document.getElementById('shareEmail');
    const copyLink = document.getElementById('copyLink');
    
    if (shareWhatsApp) shareWhatsApp.addEventListener('click', shareOnWhatsApp);
    if (shareFacebook) shareFacebook.addEventListener('click', shareOnFacebook);
    if (shareTwitter) shareTwitter.addEventListener('click', shareOnTwitter);
    if (shareEmail) shareEmail.addEventListener('click', shareViaEmail);
    if (copyLink) copyLink.addEventListener('click', copyLinkToClipboard);
}

// ============ Event Listeners - Hero CTA ============
function bindHeroCTA() {
    const heroWhatsApp = document.getElementById('heroWhatsApp');
    const heroCall = document.getElementById('heroCall');
    const navCTA = document.getElementById('navCTA');
    
    if (heroWhatsApp) heroWhatsApp.addEventListener('click', sendWhatsApp);
    if (heroCall) heroCall.addEventListener('click', callPhone);
    if (navCTA) {
        navCTA.addEventListener('click', (e) => {
            e.preventDefault();
            sendWhatsApp();
        });
    }
}

// ============ Event Listeners - Contact Section ============
function bindContactButtons() {
    const contactWhatsApp = document.getElementById('contactWhatsApp');
    if (contactWhatsApp) {
        contactWhatsApp.addEventListener('click', (e) => {
            e.preventDefault();
            sendWhatsApp();
        });
    }
}

// ============ Contact Form Handler ============
function bindContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input, textarea');
            const name = inputs[0].value || 'Website Visitor';
            const email = inputs[1].value || 'Not provided';
            const phone = inputs[2].value || 'Not provided';
            const message = inputs[3].value || 'Inquiry from website';
            
            const whatsappMessage = `Hello G-Net! I'm ${name} (${email}, ${phone}). I'm interested in your services:\n\n${message}`;
            
            sendWhatsApp(whatsappMessage);
            this.reset();
            
            // Show success feedback
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            btn.style.background = '#25D366';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 3000);
        });
    }
}

// ============ Modal Close Handlers ============
function bindModalClose() {
    if (closeBtn) {
        closeBtn.addEventListener('click', closeServiceModal);
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeServiceModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeServiceModal();
        }
    });
}

// ============ Hamburger Menu ============
function bindHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            const isOpen = navLinks.style.display === 'flex';
            navLinks.style.display = isOpen ? 'none' : 'flex';
            hamburger.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
        });
        
        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.style.display = 'none';
                hamburger.style.transform = 'rotate(0deg)';
            });
        });
    }
}

// ============ Smooth Scroll for Navigation ============
function bindNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1));
            }
        });
    });
}

// ============ Scroll Animations ============
function bindScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe service cards, portfolio items, testimonials, and features
    const elements = document.querySelectorAll(
        '.service-card, .portfolio-item, .feature, .contact-card, .testimonial-card, .blog-card'
    );
    elements.forEach(el => observer.observe(el));
}

// ============ Navbar Shadow on Scroll ============
function bindNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
        }
    });
}

// ============ Scroll to Top Button ============
function bindScrollToTop() {
    let scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Create button if it doesn't exist
    if (!scrollToTopBtn) {
        const btn = document.createElement('button');
        btn.id = 'scrollToTopBtn';
        btn.innerHTML = '↑';
        btn.setAttribute('aria-label', 'Scroll to top');
        btn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.5rem;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        `;
        document.body.appendChild(btn);
        scrollToTopBtn = btn;
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============ Blog Read More Handlers ============
function bindBlogButtons() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Full blog post coming soon! For now, reach out to us at +254 715 061 546 for more information.');
        });
    });
}

// ============ Main Initialization ============
function init() {
    console.log('🚀 G-Net Services website initialized');
    
    // Bind all event listeners
    bindServiceCards();
    bindShareButtons();
    bindHeroCTA();
    bindContactButtons();
    bindContactForm();
    bindModalClose();
    bindHamburger();
    bindNavigation();
    bindScrollAnimations();
    bindNavbarScroll();
    bindScrollToTop();
    bindBlogButtons();
    
    // Make service cards keyboard accessible
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
    });
    
    // Log sharing functionality loaded
    console.log('✅ Sharing functionality enabled');
    console.log('✅ Website URL:', config.siteUrl);
}

// ============ Run on DOM Ready ============
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============ Performance Optimization ============
// Prevent multiple clicks on buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') && !e.target.disabled) {
        e.target.disabled = true;
        setTimeout(() => {
            e.target.disabled = false;
        }, 1000);
    }
});

// Smooth page load
window.addEventListener('load', function() {
    console.log('✅ Page fully loaded');
});
