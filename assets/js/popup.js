document.addEventListener('DOMContentLoaded', () => {
    const popupData = {
        'sahih-bukhari': {
            title: 'Sahih al-Bukhari Grade Standard',
            formula: 'Highest Standard of Hadith Authenticity',
            rawData: 'Compiled by Imam Muhammad al-Bukhari (194–256 AH). Features uninterrupted chains (Ittisal) of trustworthy narrators (Adl & Dabt).',
            whyMatters: 'Accepted by consensus of Islamic scholarship as the most authentic book after the Qur'an.'
        },
        'minor-signs-count': {
            title: 'Minor Signs Categorization',
            formula: 'Over 130+ Prophetic Signs',
            rawData: 'Cataloged across 25 distinct social, environmental, economic, and moral categories.',
            whyMatters: 'Serves as an ongoing reflection of human behavioral shifts and historical trends.'
        },
        'major-signs-sequence': {
            title: 'Major Signs Sequence (Al-Ayat al-Kubra)',
            formula: '10 Great Events Before Qiyamah',
            rawData: 'Includes Dajjal, Descent of Isa (AS), Yajuj & Majuj, Smoke, Rising of Sun from West, The Beast, Three Earthquakes, Fire.',
            whyMatters: 'Represents rapid succession events immediately preceding the Horn blow.'
        }
    };

    let overlay = document.querySelector('.popup-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        overlay.innerHTML = `
            <div class="glass-card" style="max-width: 500px; padding: 2rem; border-color: var(--accent-cg);">
                <h3 id="popup-title" style="color: var(--accent-gold); margin-bottom: 0.5rem;"></h3>
                <div id="popup-formula" style="font-size: 0.85rem; font-weight: 700; color: var(--accent-cg); margin-bottom: 1rem;"></div>
                <p id="popup-raw" style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1rem;"></p>
                <div id="popup-why" style="font-size: 0.88rem; background: var(--bg-glass-border); padding: 10px; border-radius: 10px; color: var(--text-main);"></div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    const titleEl = overlay.querySelector('#popup-title');
    const formulaEl = overlay.querySelector('#popup-formula');
    const rawEl = overlay.querySelector('#popup-raw');
    const whyEl = overlay.querySelector('#popup-why');

    document.body.addEventListener('mouseover', (e) => {
        const trigger = e.target.closest('[data-popup]');
        if (trigger) {
            const popupId = trigger.getAttribute('data-popup');
            const data = popupData[popupId];
            if (data) {
                titleEl.textContent = data.title;
                formulaEl.textContent = data.formula;
                rawEl.textContent = data.rawData;
                whyEl.textContent = data.whyMatters;

                overlay.style.pointerEvents = 'none';
                overlay.classList.add('active');
            }
        }
    });

    document.body.addEventListener('mouseout', (e) => {
        const trigger = e.target.closest('[data-popup]');
        if (trigger && !trigger.contains(e.relatedTarget)) {
            overlay.classList.remove('active');
        }
    });
});
