// viewport animation for header
async function loadHeaderAnimation() {
    await sleep(3100);
    let headElements = document.getElementsByClassName('letter');
    let illustration = document.getElementsByClassName('illustration');
    for (let element of headElements) {
        let rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth) && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        // element in viewport
            element.classList.add("loaded");
            await sleep(100);
        }
    }
    illustration[0].classList.add("loaded");
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
