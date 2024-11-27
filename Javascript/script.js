const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar ul');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('show');
    document.body.classList.toggle('overflow-hidden');
});

document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('show');
        document.body.classList.remove('overflow-hidden');
    }
});

function scrollIntoView(element) {
    const footer = document.querySelector('footer');
    const originalFooterPosition = footer.style.position; 

    // Temporarily remove fixed position
    footer.style.position = 'static';

    // Perform the scroll
    const elementRect = element.getBoundingClientRect();
    const scrollTop = elementRect.top + window.scrollY - 100; 
    window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
    });

    // Restore original position after scroll
    setTimeout(() => {
        footer.style.position = originalFooterPosition;
    }, 500); // Wait for scroll animation to complete
}