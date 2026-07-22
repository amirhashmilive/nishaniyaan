document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.timeline-filter-btn');
    const nodes = document.querySelectorAll('.timeline-card-node');

    if (filterBtns.length > 0 && nodes.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                nodes.forEach(node => {
                    if (filter === 'all' || node.getAttribute('data-era') === filter || node.getAttribute('data-category') === filter) {
                        node.classList.remove('hidden');
                    } else {
                        node.classList.add('hidden');
                    }
                });
            });
        });
    }
});
