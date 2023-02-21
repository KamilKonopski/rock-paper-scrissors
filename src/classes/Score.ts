export default class Score {
	constructor(private score: number) {
		this.score = score;
	}

	getScore() {
		return this.score;
	}

	updateScore(isUserWin: boolean | null) {
		if (isUserWin) {
			this.score++;
		} else if (!isUserWin && isUserWin !== null) {
			this.score--;
		} else {
			return;
		}
	}
}
