let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}


let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}
function setBackground(index) {
  const carousel = document.querySelector('.carousel');
  carousel.classList.remove('bg-1','bg-2','bg-3','bg-4');
  carousel.classList.add(`bg-${index}`);
}

gsap.registerPlugin(ScrollTrigger);


gsap.registerPlugin(ScrollTrigger);

gsap.from(".item img", {
  y: 50,    
  duration: 3,  
  ease: "power2.out",
  stagger: 0.2
});
gsap.utils.toArray(".carousel-item").forEach((slide) => {
  gsap.from(slide, {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: slide,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});

gsap.from(".hero-content > *", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.3, 
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});


gsap.utils.toArray(".card_box").forEach(card => {
  gsap.from(card, {
    y: 50,
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });
});
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".detail").forEach((detail, index) => {  
  ScrollTrigger.create({
    trigger: detail,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: () => setBackground(index + 1),  
    onEnterBack: () => setBackground(index + 1),
    onLeave: () => {},
    onLeaveBack: () => {}
  });
});

