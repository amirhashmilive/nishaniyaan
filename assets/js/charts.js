const chartInstances = {};

function getChartColors() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
        textColor: isDark ? '#f0f4fd' : '#141722',
        gridColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        primary: isDark ? '#38bdf8' : '#0d6efd',
        accent: isDark ? '#f59e0b' : '#c59b27',
        success: isDark ? '#34d399' : '#10b981',
        warning: isDark ? '#f97316' : '#d97706'
    };
}

function initNishaniyaanCharts() {
    if (typeof Chart === 'undefined') return;

    const progressCanvas = document.getElementById('minorSignsChart');
    if (progressCanvas) {
        if (chartInstances['minorSignsChart']) {
            chartInstances['minorSignsChart'].destroy();
        }

        const colors = getChartColors();
        chartInstances['minorSignsChart'] = new Chart(progressCanvas, {
            type: 'doughnut',
            data: {
                labels: ['Fulfilled Signs', 'Ongoing Phenomena', 'Awaiting Fulfillment'],
                datasets: [{
                    data: [65, 28, 15],
                    backgroundColor: [colors.success, colors.accent, colors.primary],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: colors.textColor, font: { family: 'Inter', size: 12 } }
                    }
                },
                cutout: '70%'
            }
        });
    }
}

window.addEventListener('themeChanged', initNishaniyaanCharts);
document.addEventListener('DOMContentLoaded', initNishaniyaanCharts);
