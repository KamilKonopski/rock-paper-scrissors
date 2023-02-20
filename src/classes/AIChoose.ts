export default class AIChoose {
	AIOption: string;
	options: string[];
	constructor() {
		this.options = ["paper", "scissors", "rock"];
		this.AIOption = this.getAIOption();
	}

	getAIOption() {
		const option = Math.floor(Math.random() * this.options.length);
		const aiOption = this.options[option];

		return aiOption;
	}
}
