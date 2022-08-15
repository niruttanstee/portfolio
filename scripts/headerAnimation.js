// transition texts for header when page load and  about header when on view
async function loadHeaderAnimation() {
    await sleep(2800);
    let headElements = document.getElementsByClassName('letter');
    let illustration = document.getElementsByClassName('illustration');
    for (let element of headElements) {
        gsap.to(element, {duration: 0.5, y: 0, opacity: 100, ease: "expo.out"});
        await sleep(100);
    }
    gsap.to(illustration[0], {duration: 0.5, y: 0, opacity: 100, ease: "expo.out"});
}

// about animation
async function loadAboutAnimation() {
    let aboutElements = document.getElementsByClassName('about-letter');
    for (let element of aboutElements) {
        let rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            gsap.to(element, {duration: 0.5, y: 0, opacity: 100, ease: "expo.out"});
            await sleep(50);
        }
    }
}

// contact animation
async function loadContactAnimation() {
    let aboutElements = document.getElementsByClassName('contact-letter');
    let illustration = document.getElementsByClassName('illustration');
    for (let element of aboutElements) {
        let rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            gsap.to(element, {duration: 0.5, y: 0, opacity: 100, ease: "expo.out"});
            await sleep(100);
        }
    }
    let rect = illustration[1].getBoundingClientRect();
    if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
        gsap.to(illustration[1], {duration: 0.5, y: 0, opacity: 100, ease: "expo.out"});
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}