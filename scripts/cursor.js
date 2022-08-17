/* All cursor functions */
let cursor = document.getElementsByClassName("cursor")[0];
// inner cursor
document.addEventListener('mousemove',
    function(e){
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.left = (x - 8) + "px";
        cursor.style.top = (y - 10) + "px";
});

// Animate / reset cursor to default state
function offHover() {
    gsap.to(cursor, {
        duration: 0.5,
        width: "1rem",
        height: "1rem",
        x: 0,
        y: 0
    })
}

// Animate cursor to on hover state
function onHover() {
    gsap.to(cursor, {
        duration: 0.5,
        width: "4rem",
        height: "4rem",
        x: -25,
        y: -20
    })
}