document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.container-nav');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});