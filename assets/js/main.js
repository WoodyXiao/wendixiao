// ========== show menu in mobile script part ==========
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show_menu')
            console.log('1');
        })

    }

}
showMenu('nav-toggle', 'nav-menu');

// ========== remove menu in mobile script part ==========
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show_menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// scroll sections active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link');
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link');
        }
    })

}
window.addEventListener('scroll', scrollActive);

let logoImg = document.querySelector(".logo_img");

// ========== change background headers ==========
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 200) {
        logoImg.src = "assets/img/final logo 2.2.png";
        header.classList.add('scroll_header');
    }

    else {
        logoImg.src = "assets/img/final logo 3.1 white.png";
        header.classList.remove('scroll_header');
    }

}
window.addEventListener('scroll', scrollHeader);

// ========== show scroll top ==========
function scrollTop() {
    const scrollTop = document.getElementById('scroll_top');
    if (this.scrollY >= 560)
        scrollTop.classList.add('show_scroll');
    else
        scrollTop.classList.remove('show_scroll');
}
window.addEventListener('scroll', scrollTop);

// ========== MIXITUP FILTER PORTFOLIO ==========
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio_content'
    },
    animation: {
        duration: 400
    }
});
// for link active portfolio
const linkPortfolio = document.querySelectorAll('.portfolio_item');

function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach(l => l.classList.remove('active_portfolio'))
        this.classList.add('active_portfolio');
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio));


// for the GSAP ANIMATION
gsap.from('.home__data', { opacity: 0, duration: 1, delay: .2, y: 25 });
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', { opacity: 0, duration: 0.5, delay: .1, y: 25, ease: 'expo.out', stagger: .2 });

gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 1, delay: .1, y: 25, ease: 'expo.out', stagger: .2 });
gsap.from('.nav__item', { opacity: 0, duration: 1, delay: .1, x: 25, ease: 'expo.out', stagger: .2 });
gsap.from('.home__social-icon', { opacity: 0, duration: 1, delay: 1, y: 25, ease: 'expo.out', stagger: .2 });