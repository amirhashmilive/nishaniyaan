function renderVerificationBadge(status) {
    const badges = {
        'AUTHENTIC_QURAN': '<span class="badge badge-authentic-quran"><i class="fas fa-book-quran"></i> Authentic (Qur\'an)</span>',
        'HADITH_SAHIH': '<span class="badge badge-sahih"><i class="fas fa-check-circle"></i> Sahih Hadith</span>',
        'HADITH_HASAN': '<span class="badge badge-hasan"><i class="fas fa-check"></i> Hasan Hadith</span>',
        'HADITH_DAIF': '<span class="badge badge-daif"><i class="fas fa-exclamation-triangle"></i> Weak (Da\'if)</span>',
        'HADITH_MAWDU': '<span class="badge badge-mawdu"><i class="fas fa-times-circle"></i> Fabricated</span>',
        'SCHOLARLY_OPINION': '<span class="badge badge-scholarly"><i class="fas fa-user-graduate"></i> Scholarly Opinion</span>',
        'HISTORICAL_RECORD': '<span class="badge badge-historical"><i class="fas fa-landmark"></i> Historical Record</span>',
        'CONTEMPORARY_OBSERVATION': '<span class="badge badge-observation"><i class="fas fa-eye"></i> Contemporary Observation</span>',
        'UNVERIFIED_NEWS': '<span class="badge badge-unverified"><i class="fas fa-question-circle"></i> Unverified Report</span>'
    };
    return badges[status] || `<span class="badge badge-unverified">${status}</span>`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Accordion handler if present
    const faqItems = document.querySelectorAll('.faq-accordion-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-accordion-header');
        if (header) {
            header.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });

    // Tab switcher if present
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabGroup = btn.closest('.tab-group');
            if (tabGroup) {
                tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const target = btn.getAttribute('data-target');
                if (target) {
                    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
                    const targetEl = document.querySelector(target);
                    if (targetEl) targetEl.style.display = 'block';
                }
            }
        });
    });
});
