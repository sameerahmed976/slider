import { getElement } from "./src/getElement.js";
import { data } from "./src/data.js";

const buttonLeft = getElement(".btn-left");
const buttonRight = getElement(".btn-right");
const sliderContainer = getElement(".slider-container");

sliderContainer.innerHTML = data
  .map((ele) => {
    return `
           <article class="card ${ele.class} ">
            <img src=${ele.img}  alt="image" class="image" />
            <h1 class="card-heading">${ele.name}</h1>
            <h2 class="card-heading" >${ele.job}</h2>
            <p class="card-paragraph">
            ${ele.text}
            </p>
          </article> `;
  })
  .join(" ");
// console.log(
//   "🚀 ~ file: script.js ~ line 21 ~ sliderContainer",
//   sliderContainer
// );
let index = 0;

buttonLeft.addEventListener("click", () => {
  console.log("click");
  index++;
  if (index > 1) {
    index = 1;
  }

  console.log(index);

  sliderContainer.style.transform = `translateX(${index}00%)`;
  sliderContainer.style.transition = `all 1s ease-in-out`;
});
buttonRight.addEventListener("click", () => {
  console.log("click");
  index--;
  if (index < -1) {
    index = -1;
  }
  console.log(index);

  sliderContainer.style.transform = `translateX(${index}00%)`;
  sliderContainer.style.transition = `all 1s ease-in-out`;
});
