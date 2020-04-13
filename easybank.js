//toggle menu open and closed when hamburger button is clicked
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

//load portions of page on scrolling




var controller = new ScrollMagic.Controller();

function createScrollMagicScene(trigger, animatedElement) {
    let transition = gsap.from(animatedElement, 1, {y: 200, opacity: 0});
    new ScrollMagic.Scene({
        triggerElement: trigger,
        reverse: false
    }) 
        .setTween(transition)
        .addTo(controller);
}

createScrollMagicScene("#section2", ".whyEasybank");
createScrollMagicScene("#section3", "article");

// let whyEasybankTransition = gsap.from('.whyEasybank', 1, {y: 200, opacity: 0});

// new ScrollMagic.Scene({
//     triggerElement: "#section2",
//     reverse: false
// }) 
//     .setTween(whyEasybankTransition)
//     .addTo(controller);

// let articleTransition = gsap.from('article', 1, {y: 200, opacity: 0});

// new ScrollMagic.Scene({
//     triggerElement: "#section3",
//     reverse: false
// }) 
//     .setTween(articleTransition)
//     .addTo(controller)