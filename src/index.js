import "./burger.scss";
import "./index.scss";

const body = document.querySelector("body");

const burger = function(classs) {
  return `<div class="burgerParent">
  <button class="burger ${classs}">
    <span></span>
  </button>
  </div>`;
};

const classes = ["boring", "fade", "spin"];

const amountofburgs = 3;
let burgers = ``;

for (let index = 0; index < amountofburgs; index++) {
  burgers += burger(classes[index]);
}

body.innerHTML = `
  <div id="app">
  ${burgers}
  </div>
`;

document.querySelectorAll(".burger").forEach(burger => {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });
});
