// Mobile Hamburger menu js starts
const navItems = document.querySelector('#nav__items');
const openNavbtn = document.querySelector('#open_nav_btn');
const closeNavbtn = document.querySelector('#close_nav_btn');

openNavbtn.addEventListener('click', () =>{
    navItems.style.display = 'flex';
    openNavbtn.style.display = 'none';
    closeNavbtn.style.display = 'inline-block';
})

const closenav = () => {
    navItems.style.display = 'none';
    openNavbtn.style.display = 'inline-block';
    closeNavbtn.style.display = 'none';
}

closeNavbtn.addEventListener('click', closenav);
// Mobile Hamburger menu js ends


// change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


// Testimonials js (Swiper JS) starts
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3
        }
    }
});
// Testimonials js (Swiper JS) ends