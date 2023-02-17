export default class Score {
    constructor(score) {
        this.score = score;
        this.score = score;
    }
    getScore() {
        return this.score;
    }
    updateScore(isUserWin) {
        if (isUserWin) {
            this.score++;
        }
        else if (!isUserWin && isUserWin !== undefined) {
            this.score--;
        }
    }
}
//# sourceMappingURL=Score.js.map