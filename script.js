/* preloader */
function preloader() {
    let animation = bodymovin.loadAnimation({
        container: document.getElementById("preloader"),
        renderer: 'canvas',
        loop: false,
        autoplay: true,
        path: 'https://assets5.lottiefiles.com/packages/lf20_hzxei5jl.json'
    })
    setTimeout(hidePreloader, 2500);

}
function hidePreloader () {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "none";
}