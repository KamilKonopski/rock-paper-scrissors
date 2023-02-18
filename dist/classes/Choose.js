export default class Choose {
    constructor() {
        document.querySelectorAll(".game__start .btn").forEach((button) => {
            button.addEventListener("click", this.playerOptionPick.bind(this));
        });
        this.playerOption = this.getPlayerOption();
        this.options = ["paper", "scissors", "rock"];
        this.AIOption = this.getAIOption();
    }
    playerOptionPick(event) {
        const target = event.currentTarget;
        const option = target.dataset.option;
        this.getPlayerOption(option);
    }
    getPlayerOption(option) {
        return option;
    }
    getAIOption() {
        const option = Math.floor(Math.random() * this.options.length);
        const aiOption = this.options[option];
        return aiOption;
    }
}
//# sourceMappingURL=Choose.js.map