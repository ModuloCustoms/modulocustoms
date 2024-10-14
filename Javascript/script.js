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