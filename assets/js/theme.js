document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    let toggleBtn = document.querySelector('.theme-toggle');
    if (!toggleBtn) {
        const navActions = document.querySelector('.nav-actions');
        if (navActions) {
            toggleBtn = document.createElement('button');
            toggleBtn.className = 'theme-toggle';
            toggleBtn.setAttribute('title', 'Toggle Theme');
            toggleBtn.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            navActions.appendChild(toggleBtn);
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.classList.add('theme-transitioning');
            setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 450);

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            toggleBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

            // Notify charts and other reactive components
            window.dispatchEvent(new Event('themeChanged'));
        });
    }
});
