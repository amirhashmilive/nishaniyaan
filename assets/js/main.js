document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.slide-container');
    const slides = Array.from(document.querySelectorAll('.slide'));

    // 1. Universal Hover Magnification Safeguard
    const cards = document.querySelectorAll('.hover-magnify');
    cards.forEach(card => {
        setTimeout(() => {
            if (card.offsetWidth > 400 && !card.hasAttribute('data-force-magnify')) {
                card.classList.add('hover-magnify-lg');
            }
        }, 100);
    });

    // 2. Dynamic Right-Side Progress Dots Generation
    if (slides.length > 1) {
        let dotsContainer = document.querySelector('.progress-dots');
        if (!dotsContainer) {
            dotsContainer = document.createElement('div');
            dotsContainer.className = 'progress-dots';
            document.body.appendChild(dotsContainer);
        }

        dotsContainer.innerHTML = '';
        slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.className = 'dot' + (index === 0 ? ' active' : '');
            dot.setAttribute('title', `Slide ${index + 1}`);
            dot.addEventListener('click', () => {
                slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            dotsContainer.appendChild(dot);
        });

        // Observer for Active Dot Highlight
        if (container) {
            const dotObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const idx = slides.indexOf(entry.target);
                        if (idx !== -1) {
                            const dots = dotsContainer.querySelectorAll('.dot');
                            dots.forEach((d, i) => d.classList.toggle('active', i === idx));
                        }
                    }
                });
            }, { root: container, threshold: 0.5 });

            slides.forEach(s => dotObserver.observe(s));
        }
    }

    // 3. Presentation Keyboard Navigation Engine
    if (container && slides.length > 0) {
        document.addEventListener('keydown', (e) => {
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
            const viewportHeight = window.innerHeight;
            const currentIndex = Math.round(container.scrollTop / viewportHeight);

            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                if (currentIndex < slides.length - 1) {
                    slides[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                if (currentIndex > 0) {
                    slides[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else if (e.key === 'Home') {
                e.preventDefault();
                slides[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (e.key === 'End') {
                e.preventDefault();
                slides[slides.length - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (e.key >= '1' && e.key <= '9') {
                const targetNum = parseInt(e.key, 10);
                if (targetNum <= slides.length) {
                    e.preventDefault();
                    slides[targetNum - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    // 4. Highlight Active Navigation Chapter Link based on current page URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.chap-nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});
