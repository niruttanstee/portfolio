/* preloader */
function preloader() {
    let preloaderContainer = document.getElementById("preloader");
    const currentDate = new Date();
    let currentHour = currentDate.getHours();
    if (currentHour > 8 && currentHour < 18) {
        preloaderContainer.style.backgroundColor = "#F0F1F2";
        lightPreloader();
    } else {
        preloaderContainer.style.backgroundColor = "#1E1E1E";
        darkPreloader();
    }
}
function lightPreloader() {
    let animation = bodymovin.loadAnimation({
        container: document.getElementById("preloader"),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'https://assets6.lottiefiles.com/packages/lf20_nziwu7b6.json'
    })
}
function darkPreloader(preloaderContainer) {
    let animation = bodymovin.loadAnimation({
        container: document.getElementById("preloader"),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'https://assets4.lottiefiles.com/packages/lf20_grojqc5l.json'
    })
}