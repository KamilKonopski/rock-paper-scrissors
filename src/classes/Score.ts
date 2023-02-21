export default class Score {
	constructor(private score: number) {
		this.score = score;
	}

	getScore() {
		return this.score;
	}

	updateScore(isUserWin: boolean | null) {
		if (this.score < 0) {
			return (this.score = 0);
		}

		if (isUserWin) {
			return this.score++;
		} else if (!isUserWin && isUserWin !== null) {
			return this.score--;
		} else {
			return;
		}
	}
}
