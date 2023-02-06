window.onload = function () {
    const ham_brg = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    ham_brg.addEventListener('click', function () {
        ham_brg.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });


} 