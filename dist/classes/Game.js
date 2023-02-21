import Score from "./Score.js";
import AIChoose from "./AIChoose.js";
import Result from "./Result.js";
import ResultGameView from "./ResultGameView.js";
export default class Game {
    constructor(score) {
        this.score = new Score(score);
        this.aiChoose = new AIChoose();
        this.scoreText = document.querySelector(".score__number");
        this.optionButtons = document.querySelectorAll(".game__start .btn");
        this.optionButtons.forEach((button) => {
            button.addEventListener("click", this.startGame.bind(this));
        });
    }
    startGame(event) {
        var _a, _b;
        const target = event.currentTarget;
        const playerPick = target.dataset.option;
        const aiPick = this.aiChoose.getAIOption();
        (_a = document.querySelector(".game__start")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
        const winner = Result.checkWinner(playerPick, aiPick);
        let winnerText = "";
        if (winner) {
            winnerText = "you win";
        }
        else if (!winner && winner !== null) {
            winnerText = "you lose";
        }
        else {
            winnerText = "draw";
        }
        (_b = document
            .querySelector(".main")) === null || _b === void 0 ? void 0 : _b.appendChild(ResultGameView.createResultGameView(playerPick, aiPick, winnerText, this.playAgain));
        this.score.updateScore(winner);
        if (this.score.getScore() < 0) {
            this.scoreText.innerText = "0";
        }
        else {
            this.scoreText.innerText = this.score.getScore().toString();
        }
    }
    playAgain() {
        var _a, _b;
        (_a = document.querySelector(".game__result")) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = document.querySelector(".game__start")) === null || _b === void 0 ? void 0 : _b.classList.remove("hidden");
    }
}
//# sourceMappingURL=Game.js.map