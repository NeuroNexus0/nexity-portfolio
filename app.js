document.addEventListener('DOMContentLoaded', () => {
    // Fallback: Ensure key elements are visible
    const makeVisible = (selector) => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    };

    makeVisible('.hero-title, .hero-subtitle, .cta-button');

    // Custom cursor
    const cursorFollower = document.querySelector('.cursor-follower');
    if (cursorFollower) {
        document.addEventListener('mousemove', (e) => {
            cursorFollower.style.left = `${e.clientX}px`;
            cursorFollower.style.top = `${e.clientY}px`;
        });
    }

    // GSAP setup
    try {
        gsap.registerPlugin(ScrollTrigger);

        // Hero animations
        gsap.to('.hero-title', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out'
        });

        gsap.to('.cta-button', {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.6,
            ease: 'power3.out'
        });

        // Scroll animations
        document.querySelectorAll('[data-scroll]').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // Parallax effect
        gsap.to('.hero-gradient', {
            scrollTrigger: {
                scrub: 1
            },
            y: 100,
            ease: 'none'
        });
    } catch (e) {
        console.error("GSAP or ScrollTrigger failed to load:", e);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Portfolio item hover effects
    document.querySelectorAll('.portfolio-item').forEach(item => {
        const img = item.querySelector('.item-image');
        const overlay = item.querySelector('.item-overlay');

        item.addEventListener('mouseenter', () => {
            if (img) gsap.to(img, { scale: 1.05, duration: 0.5 });
            if (overlay) gsap.to(overlay, { y: 0, duration: 0.3 });
        });

        item.addEventListener('mouseleave', () => {
            if (img) gsap.to(img, { scale: 1, duration: 0.5 });
            if (overlay) gsap.to(overlay, { y: '100%', duration: 0.3 });
        });
    });
});

