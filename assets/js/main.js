document.addEventListener('DOMContentLoaded', () => {
    // 1. Universal Card Magnification Safeguard
    const cards = document.querySelectorAll('.hover-magnify');
    cards.forEach(card => {
        setTimeout(() => {
            if (card.offsetWidth > 400 && !card.hasAttribute('data-force-magnify')) {
                card.classList.add('hover-magnify-lg');
            }
        }, 100);
    });

    // 2. Keyboard Navigation for Scroll-Snap Canvas if present
    const container = document.querySelector('.slide-container');
    if (container) {
        document.addEventListener('keydown', (e) => {
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
            const viewportHeight = window.innerHeight;
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                container.scrollBy({ top: viewportHeight, behavior: 'smooth' });
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                container.scrollBy({ top: -viewportHeight, behavior: 'smooth' });
            }
        });
    }

    // 3. Highlight Active Navigation Links based on URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.chap-nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});
