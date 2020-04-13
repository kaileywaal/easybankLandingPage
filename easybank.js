//TOGGLE HAMBURGER MENU
function toggleMenu() {
    let classes = document.getElementById("toggleNavButtons").classList;
    if(classes.contains("hidden")){
        classes.remove("hidden");
        document.getElementById("hamburgerIcon").src = "images/icon-close.svg";
    } else {
        classes.add("hidden");
        document.getElementById("hamburgerIcon").src = "images/icon-hamburger.svg";
    }   
}

//LOAD PORTIONS OF SCREEN ON SCROLLING

var controller = new ScrollMagic.Controller();

//create function for scrollmagic scenes
function createScrollMagicScene(trigger, animatedElement) {
    let transition = gsap.from(animatedElement, 1, {y: 100, opacity: 0});
    new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.75,
        reverse: false
    }) 
        // .addIndicators()
        .setTween(transition)
        .addTo(controller);
}

//create function to create scrollmagic scene based on window width
function multipleScrollMagicScenes(trigger, className) {
    if(window.innerWidth <= 1200) {
        let elements = Array.from(document.querySelectorAll(className));
        elements.forEach(element => {createScrollMagicScene(element, element)});
    } else {
        createScrollMagicScene(trigger, className);
    }
}

//call functions to create scrollmagic scenes

multipleScrollMagicScenes("#section2", "#whyEasybankTitle");
multipleScrollMagicScenes("#section2", ".whyEasybank");
multipleScrollMagicScenes("#section3", "#latestArticlesTitle");
multipleScrollMagicScenes("section3", "article");