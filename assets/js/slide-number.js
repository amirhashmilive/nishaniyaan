(function SlideNumberSystem() {
    'use strict';

    function getSlideTitle(slide, index) {
        const heading = slide.querySelector('h1, h2, h3');
        if (heading && heading.textContent.trim()) {
            const text = heading.textContent.trim();
            return text.length > 36 ? text.slice(0, 34) + '…' : text;
        }
        return 'Chapter ' + (index + 1);
    }

    function init() {
        const slides = Array.from(document.querySelectorAll('.slide'));
        if (slides.length <= 1) return;

        const slideTitles = slides.map((slide, i) => getSlideTitle(slide, i));

        const badge = document.createElement('div');
        badge.className = 'sn-badge';
        badge.innerHTML = `<span class="sn-badge__label" id="sn-badge-text">Chapter 1 of ${slides.length}</span> <span class="sn-badge__caret">&#9662;</span>`;

        const dropdown = document.createElement('div');
        dropdown.className = 'sn-dropdown';

        slides.forEach(function (targetSlide, targetIndex) {
            const item = document.createElement('button');
            item.className = 'sn-dropdown__item';
            if (targetIndex === 0) item.classList.add('sn-dropdown__item--active');
            item.innerHTML = `<span class="sn-dropdown__num">${targetIndex + 1}</span><span class="sn-dropdown__title">${slideTitles[targetIndex]}</span>`;

            item.addEventListener('click', function (e) {
                e.stopPropagation();
                targetSlide.scrollIntoView({ behavior: 'smooth', block: 'start' });
                badge.classList.remove('sn-badge--open');
            });

            dropdown.appendChild(item);
        });

        badge.appendChild(dropdown);
        document.body.appendChild(badge);

        badge.addEventListener('click', function (e) {
            e.stopPropagation();
            badge.classList.toggle('sn-badge--open');
        });

        document.addEventListener('click', function () {
            badge.classList.remove('sn-badge--open');
        });

        // IntersectionObserver to update badge active chapter
        const container = document.querySelector('.slide-container');
        if (container) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = slides.indexOf(entry.target);
                        if (index !== -1) {
                            const badgeText = document.getElementById('sn-badge-text');
                            if (badgeText) badgeText.textContent = `Chapter ${index + 1} of ${slides.length}`;

                            const items = dropdown.querySelectorAll('.sn-dropdown__item');
                            items.forEach((it, i) => {
                                it.classList.toggle('sn-dropdown__item--active', i === index);
                            });
                        }
                    }
                });
            }, { root: container, threshold: 0.5 });

            slides.forEach(slide => observer.observe(slide));
        }
    }

    document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
