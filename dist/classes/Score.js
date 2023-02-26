export default class Score {
    constructor(score) {
        this.score = score;
        this.score = score;
    }
    getScore() {
        return this.score;
    }
    updateScore(isUserWin) {
        if (this.score < 0) {
            return (this.score = 0);
        }
        if (isUserWin) {
            return this.score++;
        }
        else if (!isUserWin && isUserWin !== null) {
            return this.score--;
        }
        else {
            return;
        }
    }
}
//# sourceMappingURL=Score.js.map