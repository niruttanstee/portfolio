/* preloader */
function preloader() {
    let preloaderContainer = document.getElementById("preloader");
    darkPreloader();
}
function darkPreloader(preloaderContainer) {
    let animation = bodymovin.loadAnimation({
        container: document.getElementById("preloader"),
        renderer: 'canvas',
        loop: false,
        autoplay: true,
        path: 'https://assets4.lottiefiles.com/packages/lf20_grojqc5l.json'
    })
}