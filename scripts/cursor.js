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
        duration: 0,
        opacity: 0,
    })
    gsap.to(cursorContent, {
        duration: 0,
        src: "",
    })
    // cursor
    gsap.to(cursor, {
        duration: 0,
        opacity: 1,
        backgroundColor: "transparent",
    })
}

// Hovering over buttons makes background disappear
function buttonHover() {
    // cursor
    gsap.to(cursor, {
        duration: 0,
        backgroundColor: "#0744F5",
    })
}
 
// Hovering over projects
function projectHover() {
    // cursor content
    gsap.to(cursorContent, {
        duration: 0,
        opacity: 0,
        x: "45px",
        y: "-11px",
        width: "fit-content",
        src: "./assets/images/project-cursor.svg",
        ease: "power1.out"
    })
    gsap.to(cursorContent, {
        duration: 0,
        opacity: 1,
    })
    // cursor
    gsap.to(cursor, {
        duration: 0,
        backgroundColor: "#0744F5",
    })
}

// Hovering over Github link
function githubHover() {
    // cursor content
    gsap.to(cursorContent, {
        duration: 0,
        opacity: 0,
        x: "45px",
        y: "-11px",
        width: "fit-content",
        src: "./assets/images/github-cursor.svg",
    })
    gsap.to(cursorContent, {
        duration: 0,
        opacity: 1,
    })
    // cursor
    gsap.to(cursor, {
        duration: 0,
        backgroundColor: "#0744F5",
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
    })
    gsap.to(cursorContent, {
        duration: 0,
        opacity: 1,
    })
}
// Hovering over day/night button
function dayNightModeHover() {
    // cursor content
    gsap.to(cursorContent, {
        duration: 0,
        opacity: 0,
        x: "-95px",
        y: "45px",
        width: "fit-content",
        src: "./assets/images/toggle-cursor.svg",
    })
    gsap.to(cursorContent, {
        duration: 0,
        opacity: 1,
    })
    // cursor
    gsap.to(cursor, {
        duration: 0,
        backgroundColor: "#0744F5",
    })
}