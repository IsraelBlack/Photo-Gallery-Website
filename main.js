window.onload = function () {
    const ham_brg = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    ham_brg.addEventListener('click', function () {
        ham_brg.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

    const galleryItem = document.querySelectorAll('.gallery-content');

    galleryItem.forEach(galleryItem => {
        galleryItem.addEventListener('mouseover', () => {
            console.log(galleryItem.childNodes[1].classList);
            galleryItem.childNodes[1].classList.add('image-blur');
        });

        galleryItem.addEventListener('mouseout', ()=> {
            console.log(galleryItem.childNodes[1].classList)
            portfolioItem.childNodes[1].classList.remove('image-blur');
        })

    });
} 