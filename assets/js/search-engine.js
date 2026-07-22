document.addEventListener('DOMContentLoaded', () => {
    let searchOverlay = document.querySelector('.search-modal-overlay');
    if (!searchOverlay) {
        searchOverlay = document.createElement('div');
        searchOverlay.className = 'search-modal-overlay';
        searchOverlay.innerHTML = `
            <div class="search-modal-box">
                <div class="search-input-wrapper">
                    <i class="fas fa-search" style="color: var(--accent-gold); font-size: 1.2rem;"></i>
                    <input type="text" id="global-search-input" placeholder="Search Qur'an, Hadith, Minor/Major Signs, Events, Books..." autocomplete="off">
                    <span style="font-size: 0.75rem; color: var(--text-muted); background: var(--bg-glass-border); padding: 2px 8px; border-radius: 6px;">ESC</span>
                </div>
                <div class="search-results-list" id="search-results-container">
                    <div style="text-align: center; color: var(--text-muted); padding: 2rem 0;">Type to search complete scholarly database...</div>
                </div>
            </div>
        `;
        document.body.appendChild(searchOverlay);
    }

    const searchInput = searchOverlay.querySelector('#global-search-input');
    const resultsContainer = searchOverlay.querySelector('#search-results-container');

    const searchTriggers = document.querySelectorAll('.search-trigger-btn, [href="#search"]');
    searchTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            searchOverlay.classList.add('active');
            setTimeout(() => searchInput.focus(), 100);
        });
    });

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchOverlay.classList.add('active');
            setTimeout(() => searchInput.focus(), 100);
        } else if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });

    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
        }
    });

    let masterDatabase = [];

    window.addEventListener('dataLoaded', (e) => {
        const data = e.detail;
        masterDatabase = [
            ...data.signsMinor.map(item => ({ title: item.title, type: 'Minor Sign', status: 'Sahih Hadith', link: `signs.html?id=${item.id}`, desc: item.description })),
            ...data.signsMajor.map(item => ({ title: item.title, type: 'Major Sign', status: 'Authentic', link: `signs.html?id=${item.id}`, desc: item.description })),
            ...data.quranVerses.map(item => ({ title: `${item.surahName} (${item.surah}:${item.ayah})`, type: 'Qur\'an Verse', status: 'Authentic (Qur\'an)', link: `quran.html?surah=${item.surah}`, desc: item.translation })),
            ...data.hadith.map(item => ({ title: `${item.collection} #${item.number}`, type: 'Hadith Entry', status: item.authenticity.toUpperCase(), link: `hadith.html?id=${item.id}`, desc: item.translation })),
            ...data.events.map(item => ({ title: item.title, type: 'Historical Event', status: item.status, link: `events.html?id=${item.id}`, desc: item.description })),
            ...data.library.map(item => ({ title: item.title, type: 'Library Resource', status: item.type, link: `library.html?id=${item.id}`, desc: item.description }))
        ];
    });

    // Fallback static list if fetch is disabled locally
    const fallbackDatabase = [
        { title: 'The Rapid Passage of Time (Taqarub al-Zaman)', type: 'Minor Sign', status: 'Sahih Hadith', link: 'signs.html?id=SIGN-MIN-024', desc: 'Prophecy detailing that time will seem to pass at an accelerated rate.' },
        { title: 'Dajjal (The False Messiah)', type: 'Major Sign', status: 'Authentic', link: 'signs.html?id=SIGN-MAJ-001', desc: 'The greatest tribulation from Creation to Qiyamah.' },
        { title: 'Surah Al-Qariah (The Striking Hour)', type: 'Qur\'an', status: 'Authentic (Qur\'an)', link: 'quran.html?surah=101', desc: 'Detailed depiction of the day when people will be like scattered moths.' },
        { title: 'Battle of Badr Historical Sign', type: 'Historical Event', status: 'Historical Record', link: 'events.html?id=EVT-BADR', desc: 'Fulfillment of victory promised in early Meccan revelation.' },
        { title: 'Global Telecommunications Expansion', type: 'Contemporary Observation', status: 'Observation', link: 'events.html?id=EVT-DIGITAL', desc: 'Modern digital connectivity mirroring rapid information spread.' }
    ];

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            resultsContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem 0;">Type to search complete scholarly database...</div>`;
            return;
        }

        const source = masterDatabase.length > 0 ? masterDatabase : fallbackDatabase;
        const filtered = source.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.desc.toLowerCase().includes(query) ||
            item.type.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            resultsContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem 0;">No matching entries found.</div>`;
            return;
        }

        resultsContainer.innerHTML = filtered.map(item => `
            <a href="${item.link}" class="search-result-item" style="display: block; text-decoration: none;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <strong style="color: var(--text-main); font-size: 1rem;">${item.title}</strong>
                    <span class="badge badge-sahih">${item.type}</span>
                </div>
                <div style="font-size: 0.85rem; color: var(--text-muted);">${item.desc}</div>
            </a>
        `).join('');
    });
});
