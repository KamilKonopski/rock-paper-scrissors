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
        else if (!isUserWin) {
            this.score--;
        }
        else {
            return;
        }
    }
}
//# sourceMappingURL=Score.js.map