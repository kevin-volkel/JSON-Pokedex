const forwardBtn = document.querySelector(".forward");
const backBtn = document.querySelector(".back");
let curSlide = 0;

const sliderComponent = function () {
  const slides = document.querySelectorAll(".card");
  const maxSlide = slides.length - 1;

  const sliderDirection = function (slide) {
    slides.forEach(function (s, i) {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
      console.log(s, i);
    });
  };
  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    sliderDirection(curSlide);
  };
  //Next slide

  // 1:0,2:200,3:300

  //probe
  const prevSlide = function (e) {
    if (curSlide == 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    slides.forEach(function (s, i) {
      s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
    //0:-1
    /**
     * 0 - -1
     * -1 * 100 = -100%
     * -2 -1 = -1
     * -1 * 100 = 100%
     * -100% is viewable
     */
  };
  sliderDirection(0);
  backBtn.addEventListener("click", prevSlide);
  forwardBtn.addEventListener("click", nextSlide);
};
sliderComponent();


const str = 'joshua'
const reverseStr = str.split('').reverse().join('')
console.log(reverseStr)