/* All cursor functions */
let cursor = document.getElementsByClassName("cursor")[0];
let outerCursor = document.getElementsByClassName("cursor-outer")[0];
let cursorContent = document.getElementsByClassName("cursor-content")[0];
// inner cursor
document.addEventListener('mousemove',
    function(e){
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
});
// outer cursor content
document.addEventListener('mousemove',
    function(e) {
        let x = e.clientX;
        let y = e.clientY;
        outerCursor.style.left = x + "px";
        outerCursor.style.top = y + "px";
    }
)
// When not hovering over any element
function notHover() {
    // cursor content
    gsap.to(cursorContent, {
        duration: 0.5,
        opacity: 0,
        ease: "power1.out",
    })
    // cursor
    gsap.to(cursor, {
        duration: 0.5,
        opacity: 1,
        backgroundColor: "#0744F5",
        ease: "power1.out"
    })
}
// Hovering over buttons makes background disappear
function buttonHover() {
    // cursor
    gsap.to(cursor, {
        duration: 0.5,
        backgroundColor: "transparent",
        ease: "power1.out"
    })
}
 
// Hovering over projects
function projectHover() {
    // cursor content
    gsap.to(cursorContent, {
        duration: 0,
        opacity: 0,
        x: "45px",
        y: "-9.5px",
        width: "fit-content",
        src: "./assets/images/project-cursor.svg",
        ease: "power1.out"
    })
    gsap.to(cursorContent, {
        duration: 0.5,
        opacity: 1,
        ease: "power1.out"
    })
    // cursor
    gsap.to(cursor, {
        duration: 0.5,
        backgroundColor: "transparent",
        ease: "power1.out"
    })
}

// Hovering over Github link
function githubHover() {
    // cursor content
    gsap.to(cursorContent, {
        duration: 0,
        opacity: 0,
        x: "45px",
        y: "-9.5px",
        width: "fit-content",
        src: "./assets/images/github-cursor.svg",
        ease: "power1.out"
    })
    gsap.to(cursorContent, {
        duration: 0.5,
        opacity: 1,
        ease: "power1.out"
    })
    // cursor
    gsap.to(cursor, {
        duration: 0.5,
        backgroundColor: "transparent",
        ease: "power1.out"
    })
}

// Hovering over about wrapper
function aboutHover() {
        // cursor content
        gsap.to(cursorContent, {
            duration: 0,
            opacity: 0,
            width: "150px",
            x: "45px",
            y: "-80px",
            src: "./assets/images/about-cursor.png",
            ease: "power1.out"
        })
        gsap.to(cursorContent, {
            duration: 0.5,
            opacity: 1,
            ease: "power1.out"
        })
}
// Hovering over day/night button
function dayNightModeHover() {
    // cursor content
    gsap.to(cursorContent, {
        duration: 0,
        opacity: 0,
        x: "-90px",
        y: "45px",
        width: "fit-content",
        src: "./assets/images/toggle-cursor.svg",
        ease: "power1.out"
    })
    gsap.to(cursorContent, {
        duration: 0.5,
        opacity: 1,
        ease: "power1.out"
    })
    // cursor
    gsap.to(cursor, {
        duration: 0.5,
        backgroundColor: "transparent",
        ease: "power1.out"
    })
}