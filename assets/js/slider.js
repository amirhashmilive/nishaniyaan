function initLightbox(triggerSelector, lightboxClass = 'gallery') {
    const triggers = document.querySelectorAll(triggerSelector);
    if (triggers.length === 0) return;

    const images = [], captions = [];
    triggers.forEach((el, index) => {
        images.push(el.getAttribute('data-image') || el.getAttribute('src'));
        captions.push(el.getAttribute('data-caption') || el.getAttribute('alt') || '');
        el.setAttribute('data-index', index);
    });

    let overlay = document.querySelector(`.lightbox-overlay.${lightboxClass}-overlay`);
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = `lightbox-overlay ${lightboxClass}-overlay`;
        overlay.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <img class="lightbox-img" src="" alt="Image">
                <button class="lightbox-prev">&#10094;</button>
                <button class="lightbox-next">&#10095;</button>
                <div class="lightbox-counter">1 / ${images.length}</div>
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    let currentIndex = 0;
    function showImage(index) {
        currentIndex = (index + images.length) % images.length;
        overlay.querySelector('.lightbox-img').src = images[currentIndex];
        overlay.querySelector('.lightbox-counter').textContent = `${currentIndex + 1} / ${images.length}`;
        const cap = overlay.querySelector('.lightbox-caption');
        cap.textContent = captions[currentIndex];
        cap.style.display = captions[currentIndex] ? 'block' : 'none';
    }

    triggers.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            showImage(parseInt(el.getAttribute('data-index'), 10));
            overlay.classList.add('active');
        });
    });

    overlay.querySelector('.lightbox-close').addEventListener('click', () => overlay.classList.remove('active'));
    overlay.querySelector('.lightbox-prev').addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex - 1); });
    overlay.querySelector('.lightbox-next').addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex + 1); });
    
    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('active')) return;
        if (e.key === 'Escape') overlay.classList.remove('active');
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initLightbox('[data-image]', 'main-lightbox');
});
