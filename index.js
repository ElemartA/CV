let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector(".slider__container");
const track = document.querySelector(".slider__track");
const btnPrev = document.querySelector(".slider__buttons-prev");
const btnNext = document.querySelector(".slider__buttons-next");
const items = document.querySelectorAll(".slider__track-item");
const itemCount = items.length;

const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", () => {
  const itemLeft =
    itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
  setPosition();
  checkBtns();
});

btnPrev.addEventListener("click", () => {
  const itemLeft = Math.abs(position) / itemWidth;
  position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
  console.log(position);
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth;

  if (btnPrev.disabled) {
    btnPrev.style.backgroundImage = "url(./assets/unionWhiteRight.svg)";
    btnPrev.style.transform = "rotate(180deg)";
  } else {
    btnPrev.style.backgroundImage = "url(./assets/UnionRight.svg)";
  }
  if (btnNext.disabled) {
    btnNext.style.backgroundImage = "url(./assets/unionWhiteRight.svg)";
  } else {
    btnNext.style.backgroundImage = "url(./assets/UnionRight.svg)";
  }
};

checkBtns();
