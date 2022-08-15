// transition objects when in viewport
gsap.registerPlugin(ScrollTrigger);
let project = document.getElementsByClassName("project-wrapper");
let knowledgeLabel = document.getElementsByClassName("knowledge-label");
let contactButton = document.getElementsByClassName("contact-button");
// project 1
gsap.to(project[0], {
    scrollTrigger: project[0],
    duration: 1, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
// project 2
gsap.to(project[1], {
    scrollTrigger: project[1],
    duration: 1, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
// project 3
gsap.to(project[2], {
    scrollTrigger: project[2],
    delay: 0.25,
    duration: 1, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
// project 4
gsap.to(project[3], {
    scrollTrigger: project[3],
    duration: 1, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
// project 5
gsap.to(project[4], {
    scrollTrigger: project[4],
    delay: 0.25,
    duration: 1, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
// knowledge labels
gsap.to(knowledgeLabel[0], {
    scrollTrigger: knowledgeLabel[0],
    delay: 0,
    duration: 1, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
gsap.to(knowledgeLabel[1], {
    scrollTrigger: knowledgeLabel[0],
    delay: 0.25,
    duration: 1, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
gsap.to(knowledgeLabel[2], {
    scrollTrigger: knowledgeLabel[0],
    delay: 0.5,
    duration: 1, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
gsap.to(knowledgeLabel[3], {
    scrollTrigger: knowledgeLabel[0],
    delay: 0.75,
    duration: 1, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
gsap.to(knowledgeLabel[4], {
    scrollTrigger: knowledgeLabel[0],
    delay: 1,
    duration: 1, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
gsap.to(knowledgeLabel[5], {
    scrollTrigger: knowledgeLabel[0],
    delay: 1.25,
    duration: 1, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
gsap.to(knowledgeLabel[6], {
    scrollTrigger: knowledgeLabel[0],
    delay: 1.5,
    duration: 1, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})

// contact buttons
gsap.to(contactButton[0], {
    scrollTrigger: contactButton[0],
    duration: 0.25, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
gsap.to(contactButton[1], {
    scrollTrigger: contactButton[0],
    delay: 0.25,
    duration: 0.25, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})
gsap.to(contactButton[2], {
    scrollTrigger: contactButton[0],
    delay: 0.5,
    duration: 0.25, 
    y: 0, 
    opacity: 100, 
    ease: "expo.out"
})

