document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const toggleThumb = document.getElementById('toggle-thumb');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    
    // Apply saved theme
    body.classList.add(currentTheme);
    updateToggle(currentTheme);
    
    // Toggle between themes
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
        updateToggle(body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
    });
    
    function updateToggle(theme) {
        if (theme === 'dark-mode') {
            toggleThumb.style.transform = 'translateX(24px)';
            themeIcon.textContent = '☀️';
            themeIcon.style.marginLeft = '8px'; // Adjust as needed
        } else {
            toggleThumb.style.transform = 'translateX(0)';
            themeIcon.textContent = '🌙';
            themeIcon.style.marginLeft = '0';
        }
    }
});