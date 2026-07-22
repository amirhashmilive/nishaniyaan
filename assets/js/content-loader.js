/**
 * Dynamic Content Loader & Relational Cross-Linker
 */
const NishaniyaanData = {
    signsMinor: [],
    signsMajor: [],
    quranVerses: [],
    hadith: [],
    events: [],
    library: [],
    research: []
};

async function loadAllDatasets() {
    try {
        const [sm, sj, qv, hd, ev, lb, rs] = await Promise.all([
            fetch('assets/data/signs-minor.json').then(r => r.ok ? r.json() : []),
            fetch('assets/data/signs-major.json').then(r => r.ok ? r.json() : []),
            fetch('assets/data/quran-verses.json').then(r => r.ok ? r.json() : []),
            fetch('assets/data/hadith.json').then(r => r.ok ? r.json() : []),
            fetch('assets/data/events.json').then(r => r.ok ? r.json() : []),
            fetch('assets/data/library.json').then(r => r.ok ? r.json() : []),
            fetch('assets/data/research.json').then(r => r.ok ? r.json() : [])
        ]);

        NishaniyaanData.signsMinor = sm;
        NishaniyaanData.signsMajor = sj;
        NishaniyaanData.quranVerses = qv;
        NishaniyaanData.hadith = hd;
        NishaniyaanData.events = ev;
        NishaniyaanData.library = lb;
        NishaniyaanData.research = rs;

        window.dispatchEvent(new CustomEvent('dataLoaded', { detail: NishaniyaanData }));
    } catch (err) {
        console.warn('Local JSON fetch note:', err);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadAllDatasets();

    // 1. Reading Progress Bar Injection
    let progressBar = document.querySelector('.reading-progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'reading-progress-bar';
        progressBar.style.cssText = 'position: fixed; top: 0; left: 0; height: 3px; background: var(--accent-cg); z-index: 10001; transition: width 0.1s ease; width: 0%;';
        document.body.appendChild(progressBar);
    }

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = `${progress}%`;
        }
    });

    // 2. Back to Top Button
    let backToTop = document.querySelector('.back-to-top-btn');
    if (!backToTop) {
        backToTop = document.createElement('button');
        backToTop.className = 'back-to-top-btn';
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.style.cssText = 'position: fixed; bottom: 25px; left: 25px; width: 42px; height: 42px; border-radius: 50%; background: var(--bg-glass); border: 1px solid var(--bg-glass-border); color: var(--text-main); cursor: pointer; display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: all 0.3s ease; z-index: 999; backdrop-filter: blur(10px);';
        document.body.appendChild(backToTop);

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.pointerEvents = 'auto';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.pointerEvents = 'none';
        }
    });
});
