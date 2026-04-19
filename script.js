document.addEventListener('DOMContentLoaded', () => {
    // Hero Title Animation on Load
    const heroTitle = document.getElementById('hero-title');
    setTimeout(() => {
        heroTitle.classList.add('reveal');
    }, 300);

    // Interactive Button
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', () => {
        alert('Welcome to VibeCraft Nexus! Sistem siap digunakan.');
    });

    // Simple Scroll Header Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '12px 24px';
            nav.classList.add('bg-black/95');
        } else {
            nav.style.padding = '16px 24px';
            nav.classList.remove('bg-black/95');
        }
    });
});