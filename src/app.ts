import Game from "./classes/Game.js";

const game = new Game(0);

const rulesOpenBtn = document.querySelector(".rules-btn")! as HTMLButtonElement;
const rulesCloseBtn = document.querySelector(
	".rules-btn--close"
)! as HTMLButtonElement;

rulesOpenBtn.addEventListener("click", () => {
	document.querySelector(".rules")?.classList.add("active");
	document.querySelector(".overlay")?.classList.add("active");
});

rulesCloseBtn.addEventListener("click", () => {
	document.querySelector(".rules")?.classList.remove("active");
	document.querySelector(".overlay")?.classList.remove("active");
});
