const classMove = (element, commonnessClass, className) => {
    if(element.classList.contains(className)) return;
    if(commonnessClass = "image-slide") console.log("a");
    document.querySelector(`.${commonnessClass}.${className}`).classList.remove(className);
    element.classList.add(className);
}

// tab script
document.querySelectorAll("nav .tab").forEach(el=>el.addEventListener("click",(e)=>{
    e.preventDefault();
    
    // button label
    const category = e.currentTarget.innerText;
    classMove(e.currentTarget, "tab", "on");

    // description
    const $description = document.querySelector(`.description.${category}`);
    classMove($description, "description", "on");
}));

// slide script
let intervalId = null;
const $$slideBtn = document.querySelectorAll(".swiper-pagenation > button");
// console.log(document.querySelector(`.image-slide:nth-of-type(${document.querySelectorAll(".image-slide").length})`));
const moveSlide = (prev = true, moveIndex = null) => {
    if(!(moveIndex ?? false)){
        const nextSlide = prev ? "previousElementSibling" : "nextElementSibling";
        const $lastSlide = document.querySelector(`.image-slide:nth-of-type(${document.querySelectorAll(".image-slide").length})`);

        const $currentSlide = document.querySelector(".image-slide.active");
        let $nextSlide = $currentSlide[nextSlide] ?? prev ? $lastSlide : $currentSlide.parentElement.firstElementChild;
        
        // console.log(nextSlide);
        // console.log($currentSlide[nextSlide])
        // console.log($nextSlide)
        classMove($nextSlide, "image-slide", "active");
        
        const $currentDot = document.querySelector(".dot.active");
        const $nextDot = $currentDot[nextSlide] ?? $currentDot.parentElement[prev ? "lastElementChild" : "firstElementChild"];
        classMove($nextDot, "dot", "active");
    }
    }
const setSlideAnimation = () => intervalId = setInterval(()=>{moveSlide();}, 3000);
const clearSlideAnimation = () => clearInterval(intervalId);

$$slideBtn.forEach(el=>el.addEventListener("click", (e)=>{
    const nextSlide = e.target.id;

}))

setSlideAnimation();