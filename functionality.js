window.addEventListener('resize', adjustWelcomeCardScale);

function adjustWelcomeCardScale() {
    const welcomeCard = document.getElementById('welcome');
    if (window.innerWidth >= 1024) {
        welcomeCard.style.transform = 'scale(1.2)';
    } else if (window.innerWidth >= 768) {
        welcomeCard.style.transform = 'scale(1.1)';
    } else {
        welcomeCard.style.transform = 'scale(1)';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const toggleThumb = document.getElementById('toggle-thumb');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    const portfolioFlower = document.querySelector('.portfolio-flower');
    
    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    
    // Apply saved theme
    body.classList.add(currentTheme);
    updateToggle(currentTheme);
    updateFlowerImage(currentTheme);
    
    // Toggle between themes
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
        const newTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        updateToggle(newTheme);
        updateFlowerImage(newTheme);
    });
    
    function updateToggle(theme) {
        if (theme === 'dark-mode') {
            toggleThumb.style.transform = 'translateX(24px)';
            themeIcon.style.marginLeft = '8px';
        } else {
            toggleThumb.style.transform = 'translateX(0)';
            themeIcon.style.marginLeft = '0';
        }
    }
    
    function updateFlowerImage(theme) {
        const flowers = document.querySelectorAll('.portfolio-flower');
        flowers.forEach(flower => {
            flower.src = theme === 'dark-mode' ? '/images/DTF_logo_dark.svg' : '/images/DTF_logo_light.svg';
        });
    }
    
    // Add hover effect to all images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.classList.contains('portfolio-flower')) {
            img.style.transition = 'transform 0.3s ease';
            img.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.05)';
            });
            img.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        }
    });
});