document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.slide-container');

    // 1. Universal Card Magnification Safeguard
    const cards = document.querySelectorAll('.hover-magnify');
    cards.forEach(card => {
        setTimeout(() => {
            if (card.offsetWidth > 400 && !card.hasAttribute('data-force-magnify')) {
                card.classList.add('hover-magnify-lg');
            }
        }, 100);
    });

    // 2. Presentation Mode Keyboard Controller
    if (container) {
        document.addEventListener('keydown', (e) => {
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
            const slides = Array.from(document.querySelectorAll('.slide'));
            if (slides.length === 0) return;

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
});
