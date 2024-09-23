const container = document.querySelector(".container");
const nav = container.children[0];
const menu = nav.children[0];

const sectionContainer = document.querySelector(".section-container");
const description = sectionContainer.querySelectorAll(".description");

const slides = document.querySelectorAll(".image-slide");
const dots = document.querySelector(".dots");
const swiperBtns = document.querySelector(".swiper-pagination");

// 메뉴에 dataset index 부여
[...menu.children].forEach((el, idx)=>{
    el.setAttribute("data-index", idx);
});

// 선택한 클래스의 부모 클래스 중 이전 클래스명을 제거, 선택한 요소에 클래스명을 추가
const updateActiveEl = (parent, newActive, className ="active" )=> {
  parent.querySelector(`.${className}`).classList.remove(className);
  newActive.classList.add(className);
};

const showSlide = (index) => {
  updateActiveEl(slides[0].parentElement, slides[index]);
  updateActiveEl(dots, dots.children[index]);
}

// 슬라이드 전환을 위한 변수
let currentIndex;
let slideInterval;

// 슬라이드 전환을 위한 함수
const startSlide = () => {
  currentIndex = [...slides].indexOf(
    slides[0].parentElement.querySelector(".active")
  );

  slideInterval = setInterval(()=> {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 3000);
};

// 슬라이드 중지 및 재시작
const restartSlide = () => {
  clearInterval(slideInterval); // 슬라이드 중지
  startSlide();
}

swiperBtns.addEventListener("click", (e)=>{
    let newIndex = 0;
    const clickTarget = e.target.closest("button");
    
    if(!clickTarget) return;

    let activeIndex = [...slides].indexOf(slides[0].parentElement.querySelector(".active"));

    if(clickTarget.id === "imageNext") {
        // 다음 버튼
        // 0 => 1 => 2 => 3 => 0 => 1 => 2 => 3
        newIndex = (activeIndex + 1) % slides.length;
        // activeIndex + 1 => 다음 슬라이드로 이동하기 위해 인덱스를 1씩 증가
        // % slides.length => 인덱스 범위를 유지하기 위해서

    } else {
        // 이전 버튼
        // 3 => 2 => 1 => 0 => 3 => 2 => 1 => 0
        newIndex = (activeIndex - 1 + slides.length) % slides.length;
        // activeIndex - 1 => 이전 슬라이드로 이동하기 위해서
        // + slides.length => 음수가 되지 않도록 슬라이드의 총 길이를 더함
        // % slides.length => 인덱스 범위를 유지하기 위해
    }

    showSlide(newIndex);
    restartSlide();
})

dots.addEventListener("click", (e)=>{
    const clickDot = e.target.closest("span");

    if(!clickDot || clickDot.classList.contains("active")) return;

    // 클릭한 dot의 인덱스 번호
    const clickedIndex = [...dots.children].indexOf(clickDot);

    showSlide(clickedIndex);
    restartSlide();
})

menu.addEventListener("click", (e)=>{
    e.preventDefault(); // 이벤트 디폴트 중지
    console.log(e.target.parentElement)
    // li태그에 on클래스를 추가
    // 2.클릭한 태그의 가까운 li를 가져옴

    // element.closest(selectors)
    // - element: 기준 요소, selectors: 찾고자 하는 요소의 CSS 선택자
    // - selectors와 일치하는 가장 가까운 조상 요소 또는 자기자신을 반환,
    //   일치하는 요소가 없으면 null 반환

    const clickTarget = e.target.closest("li");
    // li태그에 on클래스를 추가(조건: 이미 on클래스가 있으면 추가X)
    if(!clickTarget || clickTarget.classList.contains("on")) return;
    const clickIndex = clickTarget.dataset.index;

    updateActiveEl(sectionContainer, description[clickIndex], "on");
    updateActiveEl(menu, clickTarget, "on");
});

// 페이지 로드 시 자동 슬라이드 시작
startSlide();