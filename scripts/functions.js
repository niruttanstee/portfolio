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
    window.scrollTo({top: position.offsetTop - 150, behavior: 'smooth'});
}
function scrollContact() {
    let position = document.getElementById("scroll-section-4");
    window.scrollTo({top: position.offsetTop, behavior: 'smooth'});
}