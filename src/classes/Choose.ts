export default class Choose {
	playerOption: string | undefined;
	AIOption: string;
	options: string[];
	constructor() {
		document.querySelectorAll(".game__start .btn")!.forEach((button) => {
			button.addEventListener("click", this.playerOptionPick.bind(this));
		});
		this.playerOption = this.getPlayerOption();
		this.options = ["paper", "scissors", "rock"];
		this.AIOption = this.getAIOption();
	}
	playerOptionPick(event: Event) {
		const target = event.currentTarget as HTMLButtonElement;
		const option = target.dataset.option!;
		this.getPlayerOption(option);
	}

	getPlayerOption(option?: string) {
		return option;
	}

	getAIOption() {
		const option = Math.floor(Math.random() * this.options.length);
		const aiOption = this.options[option];

		return aiOption;
	}
}

const choose = new Choose();
