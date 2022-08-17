/* All cursor functions */
let cursor = document.getElementsByClassName("cursor")[0];
let outerCursor = document.getElementsByClassName("cursor-content")[0];
// inner cursor
document.addEventListener('mousemove',
    function(e){
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
        console.log(x, y);
});

// outer cursor content
document.addEventListener('mousemove',
    function(e) {
        let x = e.clientX;
        let y = e.clientY;
        outerCursor.style.left = x + "px";
        outerCursor.style.top = y + "px";
        outerCursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    }
)