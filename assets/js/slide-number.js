(function SlideNumberSystem() {
    'use strict';

    function getSlideTitle(slide, index) {
        const heading = slide.querySelector('h1, h2, h3');
        if (heading && heading.textContent.trim()) {
            const text = heading.textContent.trim();
            return text.length > 42 ? text.slice(0, 40) + '…' : text;
        }
        return 'Section ' + (index + 1);
    }

    function init() {
        const slides = Array.from(document.querySelectorAll('.slide, .page-section'));
        if (slides.length <= 1) return;

        const slideTitles = slides.map((slide, i) => getSlideTitle(slide, i));

        slides.forEach(function (slide, index) {
            const slideNum = index + 1;
            const badge = document.createElement('div');
            badge.className = 'sn-badge';
            badge.innerHTML = `<span class="sn-badge__label">Sec ${slideNum}/${slides.length}</span> <span class="sn-badge__caret">&#9662;</span>`;

            const dropdown = document.createElement('div');
            dropdown.className = 'sn-dropdown';

            slides.forEach(function (targetSlide, targetIndex) {
                const item = document.createElement('button');
                item.className = 'sn-dropdown__item';
                if (targetIndex === index) item.classList.add('sn-dropdown__item--active');
                item.innerHTML = `<span class="sn-dropdown__num">${targetIndex + 1}</span><span class="sn-dropdown__title">${slideTitles[targetIndex]}</span>`;

                item.addEventListener('click', function (e) {
                    e.stopPropagation();
                    targetSlide.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    badge.classList.remove('sn-badge--open');
                });

                dropdown.appendChild(item);
            });

            badge.appendChild(dropdown);
            slide.appendChild(badge);

            badge.addEventListener('click', function (e) {
                e.stopPropagation();
                document.querySelectorAll('.sn-badge--open').forEach(b => {
                    if (b !== badge) b.classList.remove('sn-badge--open');
                });
                badge.classList.toggle('sn-badge--open');
            });
        });

        document.addEventListener('click', function () {
            document.querySelectorAll('.sn-badge--open').forEach(b => b.classList.remove('sn-badge--open'));
        });
    }

    document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
