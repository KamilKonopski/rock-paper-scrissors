export default class Result {
    static checkWinner(player, ai) {
        if (player === ai) {
            return null;
        }
        else if ((player === "paper" && ai === "rock") ||
            (player === "scissors" && ai === "paper") ||
            (player === "rock" && ai === "scissors")) {
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=Result.js.map