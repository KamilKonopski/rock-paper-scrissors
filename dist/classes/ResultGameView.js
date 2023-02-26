export default class ResultGameView {
    static createResultGameView(player, ai, text, playAgain) {
        const resultGameSection = document.createElement("section");
        resultGameSection.classList.add("game__result");
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("info__container");
        const buttonText = document.createElement("span");
        buttonText.classList.add("info__text");
        buttonText.innerText = text;
        buttonContainer.appendChild(buttonText);
        const playAgainButton = document.createElement("button");
        playAgainButton.classList.add("btn__play-again");
        playAgainButton.innerText = "play again";
        playAgainButton.addEventListener("click", playAgain);
        buttonContainer.appendChild(playAgainButton);
        resultGameSection.appendChild(this.createPickElement(player, "you picked"));
        resultGameSection.appendChild(buttonContainer);
        resultGameSection.appendChild(this.createPickElement(ai, "the house picked"));
        return resultGameSection;
    }
    static createPickElement(pick, text) {
        const containerElement = document.createElement("div");
        containerElement.classList.add("pick__container");
        const headingElement = document.createElement("span");
        headingElement.classList.add("pick__heading");
        headingElement.textContent = text;
        containerElement.appendChild(headingElement);
        const pickElement = document.createElement("div");
        pickElement.classList.add("btn", `btn--${pick}`);
        const imgContainerElement = document.createElement("div");
        imgContainerElement.classList.add("btn__image-container");
        const imgElement = document.createElement("img");
        imgElement.src = `/images/icon-${pick}.svg`;
        imgElement.alt = pick;
        imgContainerElement.appendChild(imgElement);
        pickElement.appendChild(imgContainerElement);
        containerElement.appendChild(pickElement);
        return containerElement;
    }
}
//# sourceMappingURL=ResultGameView.js.map