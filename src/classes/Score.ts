export default class Score {
	constructor(private score: number) {
		this.score = score;
	}

	getScore() {
		return this.score;
	}

	updateScore(isUserWin?: boolean) {
		if (isUserWin) {
			this.score++;
		} else if (!isUserWin && isUserWin !== undefined) {
			this.score--;
		}
	}
}
