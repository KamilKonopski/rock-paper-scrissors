export default class AIChoose {
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
//# sourceMappingURL=AIChoose.js.map