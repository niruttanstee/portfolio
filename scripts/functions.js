/*  function.js
*   All functions for all sections of the website.
*/

// Credit
const author = "Nirutt Anstee"
const site = "nirutt.com"
console.info("Made by " + author + "\n" + site);

// Onload trigger event
window.onload = (event) => {
    defaultDayNightState();
};

// Scroll to certain sections of the page
function scrollToTop() {
    let position = document.getElementById("scroll-section-1");
    window.scrollTo({top: position.offsetTop, behavior: 'smooth'});
}
function scrollWork() {
    let position = document.getElementById("scroll-section-2");
    window.scrollTo({top: position.offsetTop - 110, behavior: 'smooth'});
}
function scrollAbout() {
    let position = document.getElementById("scroll-section-3");
    window.scrollTo({top: position.offsetTop - 145, behavior: 'smooth'});
}
function scrollContact() {
    let position = document.getElementById("scroll-section-4");
    window.scrollTo({top: position.offsetTop, behavior: 'smooth'});
}

// Opens mobile menu
function openMobileMenu() {
    let menu = document.getElementsByClassName("mobile-menu");
    let mobileNav = document.getElementsByClassName("mobile-navigation-bar");
    let mobileButton = document.getElementsByClassName("mobile-menu-button-wrapper")
    gsap.to(menu[0], {
        duration: 1,
        height: "100%",
        ease: "power1.out"
    })
    gsap.to(menu[0], {
        delay: 1,
        duration: 0.25, 
        borderRadius: 0,
        ease: "power1.out"
    })
    gsap.to(mobileNav, {
        delay: 1.2,
        duration: 0.25, 
        opacity: 1,
        visibility: "visible",
        ease: "power1.out"
    })
    gsap.to(mobileButton, {
        delay: 1.2,
        duration: 0.25, 
        opacity: 1,
        visibility: "visible",
        ease: "power1.out"
    })
}

// Closes mobile menu
function closeMobileMenu() {
    let menu = document.getElementsByClassName("mobile-menu");
    let mobileNav = document.getElementsByClassName("mobile-navigation-bar");
    let mobileButton = document.getElementsByClassName("mobile-menu-button-wrapper")
    gsap.to(menu[0], {
        delay: 0.2,
        duration: 1,
        height: "0%",
        ease: "power1.out"
    })
    gsap.to(menu[0], {
        duration: 0.25, 
        borderBottomLeftRadius: "2rem",
        borderBottomRightRadius: "2rem",
        ease: "power1.out"
    })
    gsap.to(mobileNav, {
        duration: 0.25, 
        opacity: 0,
        visibility: "hidden",
        ease: "power1.out"
    })
    gsap.to(mobileButton, {
        duration: 0.25,
        opacity: 0,
        visibility: "hidden",
        ease: "power1.out"
    })
}

// Triggers the day/night mode depending on the time
function defaultDayNightState() {
    let contentDiv = document.getElementsByClassName("day-night-wrapper");
    let status = contentDiv[0].id;
    let date = new Date();
    let hour = date.getHours();
    // if hours are between 8:00am and 18:00pm set day mode state,
    // otherwise set night mode state
    if (hour > 7 && hour < 18) {
        // set day mode
        if (status === 'day') {
            return;
        }
        enableDayMode(contentDiv);
    } else {
        // set night mode
        if (status === 'night') {
            return;
        }
        enableNightMode(contentDiv);
    }
}

// Triggered by interaction with the day/night radio button, switches
// between modes depending on the current state.
function dayNightSwitch() {
    // check day-night wrapper id state and enable opposite
    let contentDiv = document.getElementsByClassName("day-night-wrapper");
    let status = contentDiv[0].id;
    if (status === 'day') {
        // set night mode
        enableNightMode(contentDiv);
    } else {
        // set day mode
        enableDayMode(contentDiv);
    }
}  

// Enables day mode state.
function enableDayMode(contentDiv) {
    // day-night wrapper set source srcset media and img src
    let button = document.getElementsByClassName("day-night-button"); 
    let content = contentDiv[0];
    let firstChild = content.firstElementChild;
    let lastChild = content.lastElementChild;
    firstChild.setAttribute('srcset', './assets/logos/mobile-logo.svg');
    lastChild.setAttribute('src', './assets/logos/desktop-logo.svg');
    // set day-night wrapper id to day
    content.id = "day";
    
    // get elements
    let mainContentWrapper = document.getElementsByClassName("main-content-wrapper");
    let mobileMenuButton = document.getElementsByClassName("mobile-menu-button-white");
    let headerLetter = document.getElementsByClassName("letter");
    let projectLinkDescriptor = document.getElementsByClassName("project-link-descriptor");
    let aboutLetter = document.getElementsByClassName("about-letter");
    let knowledgeDescriptor = document.getElementsByClassName("knowledge-descriptor");
    let knowledgeLabel = document.getElementsByClassName("knowledge-label");
    let contactLetter = document.getElementsByClassName("contact-letter");
    let contactButton = document.getElementsByClassName("contact-button-light");
    let websiteText = document.getElementsByClassName("website-text");
    let copyrightText = document.getElementsByClassName("copyright-text");
    let desktopMenuButton = document.getElementsByClassName("desktop-menu-button-white");

    // day/night radio button
    button[0].style.backgroundImage = "url('./assets/images/day-mode-switch.svg')";

    // mobile menu button
    mobileMenuButton[0].classList.replace("mobile-menu-button-white", "mobile-menu-button");
    // desktop menu button - work
    desktopMenuButton[0].classList.replace("desktop-menu-button-white", "desktop-menu-button");
    // desktop menu button - about
    desktopMenuButton[0].classList.replace("desktop-menu-button-white", "desktop-menu-button");
    // desktop menu button - contact
    desktopMenuButton[0].classList.replace("desktop-menu-button-white", "desktop-menu-button");
    // email button
    contactButton[0].classList.replace("contact-button-light", "contact-button");
    // linkedIn button
    contactButton[0].classList.replace("contact-button-light", "contact-button");
    // github button
    contactButton[0].classList.replace("contact-button-light", "contact-button");

    // gsap - set day mode
    gsap.to(mainContentWrapper[0], {
        duration: 1,
        backgroundColor: "#F0F1F2",
        ease: "power1.out"
    })

    // header section
    gsap.to(headerLetter[0], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(headerLetter[1], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(headerLetter[2], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(headerLetter[3], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(headerLetter[4], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(headerLetter[5], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(headerLetter[6], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(headerLetter[7], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    // projects section
    gsap.to(projectLinkDescriptor[0], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    // about section
    gsap.to(aboutLetter[0], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[1], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[2], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[3], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[4], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[5], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[6], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[7], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[8], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[9], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[10], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[11], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[12], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[13], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[14], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[15], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[16], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[17], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[18], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[19], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[20], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[21], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[22], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[23], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[24], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[25], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[26], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[27], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[28], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[29], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[30], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[31], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[32], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[33], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[34], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[35], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[36], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[37], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[38], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[39], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[40], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[41], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(knowledgeDescriptor[0], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[0], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#000",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[1], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#000",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[2], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#000",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[3], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#000",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[4], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#000",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[5], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#000",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[6], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#000",
        ease: "power1.out"
    })

    // contact section
    gsap.to(contactLetter[0], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(contactLetter[1], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(contactLetter[2], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(contactLetter[3], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(contactLetter[4], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(contactLetter[5], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(contactLetter[6], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(contactLetter[7], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(contactLetter[8], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(contactLetter[9], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(contactLetter[10], {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })

    // footer section
    gsap.to(websiteText, {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
    gsap.to(copyrightText, {
        duration: 1,
        color: "#000",
        ease: "power1.out"
    })
}

// Enables night mode state.
function enableNightMode(contentDiv) {
    // day-night wrapper set source srcset media and img src 
    let button = document.getElementsByClassName("day-night-button");
    let content = contentDiv[0];
    let firstChild = content.firstElementChild;
    let lastChild = content.lastElementChild;
    firstChild.setAttribute('srcset', './assets/logos/mobile-logo-light.svg');
    lastChild.setAttribute('src', './assets/logos/desktop-logo-light.svg');
    // set day-night wrapper id to night
    content.id = "night";

    // get elements
    let mainContentWrapper = document.getElementsByClassName("main-content-wrapper");
    let mobileMenuButton = document.getElementsByClassName("mobile-menu-button");
    let headerLetter = document.getElementsByClassName("letter");
    let projectLinkDescriptor = document.getElementsByClassName("project-link-descriptor");
    let aboutLetter = document.getElementsByClassName("about-letter");
    let knowledgeDescriptor = document.getElementsByClassName("knowledge-descriptor");
    let knowledgeLabel = document.getElementsByClassName("knowledge-label");
    let contactLetter = document.getElementsByClassName("contact-letter");
    let contactButton = document.getElementsByClassName("contact-button");
    let websiteText = document.getElementsByClassName("website-text");
    let copyrightText = document.getElementsByClassName("copyright-text");
    let desktopMenuButton = document.getElementsByClassName("desktop-menu-button");

    // day/night radio button
    button[0].style.backgroundImage = "url('./assets/images/night-mode-switch.svg')";
    // menu Button
    mobileMenuButton[0].classList.replace("mobile-menu-button", "mobile-menu-button-white");
    // desktop menu button - Work
    desktopMenuButton[0].classList.replace("desktop-menu-button", "desktop-menu-button-white");
    // desktop menu button - About
    desktopMenuButton[0].classList.replace("desktop-menu-button", "desktop-menu-button-white");
    // desktop menu button - Contact
    desktopMenuButton[0].classList.replace("desktop-menu-button", "desktop-menu-button-white");
    // Email button
    contactButton[0].classList.replace("contact-button", "contact-button-light");
    // LinkedIn button
    contactButton[0].classList.replace("contact-button", "contact-button-light");
    // Github button
    contactButton[0].classList.replace("contact-button", "contact-button-light");

    // gsap - set night mode
    gsap.to(mainContentWrapper[0], {
        duration: 1,
        backgroundColor: "#131313",
        ease: "power1.out"
    })

    // header section
    gsap.to(headerLetter[0], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(headerLetter[1], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(headerLetter[2], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })  
    gsap.to(headerLetter[3], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })   
    gsap.to(headerLetter[4], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })  
    gsap.to(headerLetter[5], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    }) 
    gsap.to(headerLetter[6], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })   
    gsap.to(headerLetter[7], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })

    // projects section
    gsap.to(projectLinkDescriptor[0], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })

    // about section
    gsap.to(aboutLetter[0], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })   
    gsap.to(aboutLetter[1], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })   
    gsap.to(aboutLetter[2], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })   
    gsap.to(aboutLetter[3], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[4], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[5], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[6], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[7], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[8], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[9], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[10], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[11], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[12], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[13], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[14], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[15], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[16], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[17], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[18], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[19], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[20], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[21], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[22], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[23], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[24], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[25], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[26], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[27], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[28], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(aboutLetter[29], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })    
    gsap.to(aboutLetter[30], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })    
    gsap.to(aboutLetter[31], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })    
    gsap.to(aboutLetter[32], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })    
    gsap.to(aboutLetter[33], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })    
    gsap.to(aboutLetter[34], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })    
    gsap.to(aboutLetter[35], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })    
    gsap.to(aboutLetter[36], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })    
    gsap.to(aboutLetter[37], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })    
    gsap.to(aboutLetter[38], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })    
    gsap.to(aboutLetter[39], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })    
    gsap.to(aboutLetter[40], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })    
    gsap.to(aboutLetter[41], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(knowledgeDescriptor[0], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[0], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#222529",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[1], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#222529",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[2], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#222529",
        ease: "power1.out"
    })  
    gsap.to(knowledgeLabel[3], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#222529",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[4], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#222529",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[5], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#222529",
        ease: "power1.out"
    })
    gsap.to(knowledgeLabel[6], {
        duration: 1,
        color: "#F0F1F2",
        backgroundColor: "#222529",
        ease: "power1.out"
    })
    
    // contact section
    gsap.to(contactLetter[0], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(contactLetter[1], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(contactLetter[2], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(contactLetter[3], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(contactLetter[4], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(contactLetter[5], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(contactLetter[6], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(contactLetter[7], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(contactLetter[8], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(contactLetter[9], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(contactLetter[10], {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })

    // footer section
    gsap.to(websiteText, {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
    gsap.to(copyrightText, {
        duration: 1,
        color: "#F0F1F2",
        ease: "power1.out"
    })
}