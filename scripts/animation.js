gsap.registerPlugin(ScrollTrigger);
// transition texts for header when page load and  about header when on view
// fetch elements
let preloader = document.getElementsByClassName('preloader');
let navBar = document.getElementsByClassName('navigation-bar');
let mainWrapper = document.getElementsByClassName('main-content-wrapper');
let headElements = document.getElementsByClassName('letter');
let illustration = document.getElementsByClassName('illustration');
let project = document.getElementsByClassName("project-wrapper");
let aboutElements = document.getElementsByClassName('about-letter');
let knowledgeLabel = document.getElementsByClassName("about-knowledge-labels-wrapper");
let contactElements = document.getElementsByClassName('contact-letter');
let contactButton = document.getElementsByClassName("contact-buttons-wrapper");


// Preloader
gsap.to(preloader[0], {
    duration: 1,
    height: 0,
    ease: "power1.out"
})
gsap.to(navBar, {
    delay: 1.2,
    duration: 0.25, 
    opacity: 1,
    visibility: "visible",
    ease: "power1.out"
})
gsap.to(mainWrapper[0], {
    delay: 1,
    duration: 0.25, 
    borderRadius: 0,
    ease: "power1.out"
})
window.innerHeight = window.innerHeight * 2;

// Header (8 elements + 1 illustration[0] element)
gsap.to(headElements[0], {
    delay: 1,
    duration: 0.25, 
    y: 0, 
    opacity: 1, 
    ease: "power1.out"
})
gsap.to(headElements[1], {
    delay: 1.05,
    duration: 0.25, 
    y: 0, 
    opacity: 1,  
    ease: "power1.out"
})
gsap.to(headElements[2], {
    delay: 1.1,
    duration: 0.25, 
    y: 0, 
    opacity: 1,  
    ease: "power1.out"
})
gsap.to(headElements[3], {
    delay: 1.15,
    duration: 0.25, 
    y: 0, 
    opacity: 1,  
    ease: "power1.out"
})
gsap.to(headElements[4], {
    delay: 1.2,
    duration: 0.25, 
    y: 0, 
    opacity: 1,  
    ease: "power1.out"
})
gsap.to(headElements[5], {
    delay: 1.25,
    duration: 0.25, 
    y: 0, 
    opacity: 1,  
    ease: "power1.out"
})
gsap.to(headElements[6], {
    delay: 1.3,
    duration: 0.25, 
    y: 0, 
    opacity: 1,  
    ease: "power1.out"
})
gsap.to(headElements[7], {
    delay: 1.35,
    duration: 0.25, 
    y: 0, 
    opacity: 1,  
    ease: "power1.out"
})
gsap.to(illustration[0], {
    delay: 1.4,
    duration: 0.25, 
    y: 0, 
    opacity: 1,  
    ease: "power1.out"
})
// Project (5 elements)
gsap.to(project[0], {
    delay: 1.45,
    duration: 0.25, 
    y: 0, 
    opacity: 1, 
    ease: "power1.out"
})
gsap.to(project[1], {
    scrollTrigger: project[1],
    duration: 0.25, 
    y: 0, 
    opacity: 1, 
    ease: "power1.out"
})
gsap.to(project[2], {
    scrollTrigger: project[2],
    delay: 0.25,
    duration: 0.25, 
    y: 0, 
    opacity: 1, 
    ease: "power1.out"
})
gsap.to(project[3], {
    scrollTrigger: project[3],
    duration: 0.25, 
    y: 0, 
    opacity: 1, 
    ease: "power1.out"
})
gsap.to(project[4], {
    scrollTrigger: project[4],
    delay: 0.25,
    duration: 0.25, 
    y: 0, 
    opacity: 1, 
    ease: "power1.out"
})

// About Header (41 elements + 1 knowledge label wrapper)
gsap.to(aboutElements[0], {
    scrollTrigger: aboutElements[0],
    delay: 0.0,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[1], {
    scrollTrigger: aboutElements[0],
    delay: 0.05,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[2], {
    scrollTrigger: aboutElements[0],
    delay: 0.1,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[3], {
    scrollTrigger: aboutElements[0],
    delay: 0.15000000000000002,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[4], {
    scrollTrigger: aboutElements[0],
    delay: 0.2,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[5], {
    scrollTrigger: aboutElements[0],
    delay: 0.25,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[6], {
    scrollTrigger: aboutElements[0],
    delay: 0.30000000000000004,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[7], {
    scrollTrigger: aboutElements[0],
    delay: 0.35000000000000003,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[8], {
    scrollTrigger: aboutElements[0],
    delay: 0.4,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[9], {
    scrollTrigger: aboutElements[0],
    delay: 0.45,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[10], {
    scrollTrigger: aboutElements[0],
    delay: 0.5,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[11], {
    scrollTrigger: aboutElements[0],
    delay: 0.55,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[12], {
    scrollTrigger: aboutElements[0],
    delay: 0.6000000000000001,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[13], {
    scrollTrigger: aboutElements[0],
    delay: 0.65,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[14], {
    scrollTrigger: aboutElements[0],
    delay: 0.7000000000000001,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[15], {
    scrollTrigger: aboutElements[0],
    delay: 0.75,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[16], {
    scrollTrigger: aboutElements[0],
    delay: 0.8,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[17], {
    scrollTrigger: aboutElements[0],
    delay: 0.8500000000000001,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[18], {
    scrollTrigger: aboutElements[0],
    delay: 0.9,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[19], {
    scrollTrigger: aboutElements[0],
    delay: 0.9500000000000001,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[20], {
    scrollTrigger: aboutElements[0],
    delay: 1.0,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[21], {
    scrollTrigger: aboutElements[0],
    delay: 1.05,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[22], {
    scrollTrigger: aboutElements[0],
    delay: 1.1,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[23], {
    scrollTrigger: aboutElements[0],
    delay: 1.1500000000000001,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[24], {
    scrollTrigger: aboutElements[0],
    delay: 1.2000000000000002,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[25], {
    scrollTrigger: aboutElements[0],
    delay: 1.25,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[26], {
    scrollTrigger: aboutElements[0],
    delay: 1.3,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[27], {
    scrollTrigger: aboutElements[0],
    delay: 1.35,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[28], {
    scrollTrigger: aboutElements[0],
    delay: 1.4000000000000001,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[29], {
    scrollTrigger: aboutElements[0],
    delay: 1.4500000000000002,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[30], {
    scrollTrigger: aboutElements[0],
    delay: 1.5,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[31], {
    scrollTrigger: aboutElements[0],
    delay: 1.55,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[32], {
    scrollTrigger: aboutElements[0],
    delay: 1.6,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[33], {
    scrollTrigger: aboutElements[0],
    delay: 1.6500000000000001,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[34], {
    scrollTrigger: aboutElements[0],
    delay: 1.7000000000000002,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[35], {
    scrollTrigger: aboutElements[0],
    delay: 1.75,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[36], {
    scrollTrigger: aboutElements[0],
    delay: 1.8,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[37], {
    scrollTrigger: aboutElements[0],
    delay: 1.85,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[38], {
    scrollTrigger: aboutElements[0],
    delay: 1.9000000000000001,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[39], {
    scrollTrigger: aboutElements[0],
    delay: 1.9500000000000002,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[40], {
    scrollTrigger: aboutElements[0],
    delay: 2.0,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(aboutElements[41], {
    scrollTrigger: aboutElements[0],
    delay: 2.0500000000000003,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})
gsap.to(knowledgeLabel, {
    scrollTrigger: aboutElements[0],
    delay: 0,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

// Contact Section (11 elements + 1 illustration)
gsap.to(contactElements[0], {
    scrollTrigger: contactElements[0],
    delay: 0,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(contactElements[1], {
    scrollTrigger: contactElements[0],
    delay: 0.05,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(contactElements[2], {
    scrollTrigger: contactElements[0],
    delay: 0.1,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(contactElements[3], {
    scrollTrigger: contactElements[0],
    delay: 0.15000000000000002,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(contactElements[4], {
    scrollTrigger: contactElements[0],
    delay: 0.2,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(contactElements[5], {
    scrollTrigger: contactElements[0],
    delay: 0.25,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(contactElements[6], {
    scrollTrigger: contactElements[0],
    delay: 0.30000000000000004,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(contactElements[7], {
    scrollTrigger: contactElements[0],
    delay: 0.35000000000000003,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(contactElements[8], {
    scrollTrigger: contactElements[0],
    delay: 0.4,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(contactElements[9], {
    scrollTrigger: contactElements[0],
   delay: 0.45,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(contactElements[10], {
    scrollTrigger: contactElements[0],
    delay: 0.5,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})

gsap.to(contactElements[11], {
    scrollTrigger: contactElements[0],
    delay: 0.55,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: "power1.out"
})
gsap.to(illustration[1], {
    scrollTrigger: contactElements[0],
    delay: 0.6,
    duration: 0.25, 
    y: 0, 
    opacity: 1,  
    ease: "power1.out"
})

// Contact Button Wrapper (1 element)
gsap.to(contactButton[0], {
    scrollTrigger: contactElements[0],
    delay: 0.65,
    duration: 0.25, 
    y: 0, 
    opacity: 1,  
    ease: "power1.out"
})


