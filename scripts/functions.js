// scroll to sections
function scrollToTop() {
    let position = document.getElementById("scroll-section-1");
    window.scrollTo({top: position.offsetTop, behavior: 'smooth'});
}
function scrollWork() {
    let position = document.getElementById("scroll-section-2");
    window.scrollTo({top: position.offsetTop - 110, behavior: 'smooth'});
}
function scrollAbout() {
    let position = document.getElementById("scroll-section-3");
    window.scrollTo({top: position.offsetTop - 145, behavior: 'smooth'});
}
function scrollContact() {
    let position = document.getElementById("scroll-section-4");
    window.scrollTo({top: position.offsetTop, behavior: 'smooth'});
}

// mobile menu section
function openMobileMenu() {
    let menu = document.getElementsByClassName("mobile-menu");
    let mobileNav = document.getElementsByClassName("mobile-navigation-bar");
    let mobileButton = document.getElementsByClassName("mobile-menu-button-wrapper")
    gsap.to(menu[0], {
        duration: 1,
        height: "100%",
        ease: "power1.out"
    })
    gsap.to(menu[0], {
        delay: 1,
        duration: 0.25, 
        borderRadius: 0,
        ease: "power1.out"
    })
    gsap.to(mobileNav, {
        delay: 1.2,
        duration: 0.25, 
        opacity: 1,
        visibility: "visible",
        ease: "power1.out"
    })
    gsap.to(mobileButton, {
        delay: 1.2,
        duration: 0.25, 
        opacity: 1,
        visibility: "visible",
        ease: "power1.out"
    })
}
function closeMobileMenu() {
    let menu = document.getElementsByClassName("mobile-menu");
    let mobileNav = document.getElementsByClassName("mobile-navigation-bar");
    let mobileButton = document.getElementsByClassName("mobile-menu-button-wrapper")
    gsap.to(menu[0], {
        delay: 0.2,
        duration: 1,
        height: "0%",
        ease: "power1.out"
    })
    gsap.to(menu[0], {
        duration: 0.25, 
        borderBottomLeftRadius: "2rem",
        borderBottomRightRadius: "2rem",
        ease: "power1.out"
    })
    gsap.to(mobileNav, {
        duration: 0.25, 
        opacity: 0,
        visibility: "hidden",
        ease: "power1.out"
    })
    gsap.to(mobileButton, {
        duration: 0.25,
        opacity: 0,
        visibility: "hidden",
        ease: "power1.out"
    })
}