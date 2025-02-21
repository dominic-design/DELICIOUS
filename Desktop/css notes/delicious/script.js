// Show/hide navigation on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('show');
    } else {
        nav.classList.remove('show');
    }
});
