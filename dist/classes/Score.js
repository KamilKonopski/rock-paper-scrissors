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
        else if (!isUserWin && isUserWin !== null) {
            this.score--;
        }
        else {
            return;
        }
    }
}
//# sourceMappingURL=Score.js.map