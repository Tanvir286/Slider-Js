let slides = document.querySelectorAll('.slide');
let slidesArr = Array.from(slides);

let previous = document.querySelector("#prev");
let next = document.querySelector("#next");



let prevnext = () => {
    // Find the currently active slide and its index in the array
    let activeSlide = document.querySelector('.active');
    let currentIndex = slidesArr.indexOf(activeSlide);

    let prev;
    let next;

    // Determine the previous slide

    if (currentIndex == 0) {
        prev = slidesArr[slidesArr.length - 1];
    } else {
        prev = slidesArr[currentIndex - 1];
    }

    // Determine the next slide

    if (currentIndex == slidesArr.length - 1) {
        next = slidesArr[0];
    } else {
        next = slidesArr[currentIndex + 1];
    }

    // Return an array the next and previous slides
    return [next, prev];
}


let koijabo = () => {
    let activeSlide = document.querySelector('.active');
    let currentIndex = slidesArr.indexOf(activeSlide);

    let [next, prev] = prevnext();

    // Apply styles and transitions to each slide
    slidesArr.map((item, index) => {
        if (currentIndex == index) {
             // If the current index matches the slide index, set it as
            item.style.transform = "translateX(0)";
        } else if(item == prev){
            // If the slide is the previous one, move it to the left
            item.style.transform = "translateX(-100%)";
        } else if(item == next){
            // If the slide is the next one, move it to the right
            item.style.transform = "translateX(100%)";
        }

        // Remove the 'smooth' class after the transition ends
        item.addEventListener('transitionend', function(){
            item.classList.remove("smooth");
        });
    });
}

next.addEventListener('click', () => {
    let activeSlide = document.querySelector('.active');
    let [next] = prevnext();

    // Apply styles and transitions for the 'Next' button click
    activeSlide.classList.add("smooth");
    next.classList.add("smooth");

    activeSlide.classList.remove("active");
    next.classList.add("active");
     //translating the activeSlide to the right by 100% of its own width
    activeSlide.style.transform = "translateX(100%)";
    next.style.transform = "translateX(0%)";

    koijabo();
});


previous.addEventListener("click",() =>{
    
    let activeSlide = document.querySelector('.active');
    let [,prev] = prevnext();

    // Find the currently active slide and the previous slide
    activeSlide.classList.add("smooth");
    prev.classList.add("smooth");

    activeSlide.classList.remove("active");
    prev.classList.add("active");
    //translating the activeSlide to the left by 100% of its own width
    activeSlide.style.transform = "translateX(-100%)";
    prev.style.transform = "translateX(0%)";


    // Update the slider
    koijabo();

})



// Initial setup
koijabo();


// Set interval to automatically advance to the next slide every 2000 milliseconds (2 seconds)

setInterval(() => {
    let activeSlide = document.querySelector('.active');
    let [next] = prevnext();

    activeSlide.classList.add("smooth");
    next.classList.add("smooth");

    activeSlide.classList.remove("active");
    next.classList.add("active");
    activeSlide.style.transform = "translateX(100%)";
    next.style.transform = "translateX(0%)";

    koijabo();
}, 3000);