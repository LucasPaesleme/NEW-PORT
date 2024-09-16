document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.container-nav');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Altere 50 para o valor que desejar
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});