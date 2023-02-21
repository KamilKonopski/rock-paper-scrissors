import Score from "./Score.js";
import AIChoose from "./AIChoose.js";
import Result from "./Result.js";
import ResultGameView from "./ResultGameView.js";

export default class Game {
	score: Score;
	aiChoose: AIChoose;
	optionButtons: NodeListOf<HTMLButtonElement>;
	scoreText: HTMLSpanElement;
	constructor(score: number) {
		this.score = new Score(score);
		this.aiChoose = new AIChoose();
		this.scoreText = document.querySelector(".score__number")!;
		this.optionButtons = document.querySelectorAll(".game__start .btn");

		this.optionButtons.forEach((button) => {
			button.addEventListener("click", this.startGame.bind(this));
		});
	}
	startGame(event: Event) {
		const target = event.currentTarget as HTMLButtonElement;
		const playerPick = target.dataset.option!;

		const aiPick = this.aiChoose.getAIOption();

		document.querySelector(".game__start")?.classList.add("hidden");

		const winner = Result.checkWinner(playerPick, aiPick);

		let winnerText = "";

		if (winner) {
			winnerText = "you win";
		} else if (!winner && winner !== null) {
			winnerText = "you lose";
		} else {
			winnerText = "draw";
		}

		document
			.querySelector(".main")
			?.appendChild(
				ResultGameView.createResultGameView(
					playerPick,
					aiPick,
					winnerText,
					this.playAgain
				)
			);

		this.score.updateScore(winner);

		this.scoreText.innerText = this.score.getScore().toString();
	}

	playAgain() {
		document.querySelector(".game__result")?.remove();
		document.querySelector(".game__start")?.classList.remove("hidden");
	}
}
