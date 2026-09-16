document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');
    const navbar = document.querySelector('.navbar');

    // Mobile menu
    if (toggle && mobileMenu && overlay) {
        toggle.addEventListener('click', function() {
            toggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        overlay.addEventListener('click', function() {
            toggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                toggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Navbar scroll shadow
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});
