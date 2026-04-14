document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // Add a bit of mouse move effect for the hero
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        hero.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
    });
});
