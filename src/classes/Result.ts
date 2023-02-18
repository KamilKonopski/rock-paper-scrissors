export default class Result {
	static checkWinner(player: string, ai: string) {
		if (player === ai) {
			return null;
		} else if (
			(player === "paper" && ai === "rock") ||
			(player === "scissors" && ai === "paper") ||
			(player === "rock" && ai === "scissors")
		) {
			return true;
		} else {
			return false;
		}
	}
}
