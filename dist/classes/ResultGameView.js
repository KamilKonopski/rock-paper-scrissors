export default class ResultGameView {
    static createResultGameView(player, ai) {
        const resultGameSection = document.createElement("section");
        resultGameSection.classList.add("game__result");
        const playerContainer = document.createElement("div");
        playerContainer.classList.add("player__container");
        const playerHeading = document.createElement("span");
        playerHeading.classList.add("player__heading");
        playerHeading.textContent = "you picked";
        playerContainer.appendChild(playerHeading);
        const playerPick = document.createElement("div");
        playerPick.classList.add("btn", `btn--${player}`);
        const playerImgContainer = document.createElement("div");
        playerImgContainer.classList.add("btn__image-container");
        const playerImg = document.createElement("img");
        playerImg.src = `../../images/icon-${player}.svg`;
        playerImg.alt = player;
        playerImgContainer.appendChild(playerImg);
        playerPick.appendChild(playerImgContainer);
        playerContainer.appendChild(playerPick);
        const AIContainer = document.createElement("div");
        AIContainer.classList.add("ai__container");
        const AIHeading = document.createElement("span");
        AIHeading.classList.add("ai__heading");
        AIHeading.textContent = "the house picked";
        AIContainer.appendChild(AIHeading);
        const AIPick = document.createElement("div");
        AIPick.classList.add("btn", `btn--${ai}`);
        const AIImgContainer = document.createElement("div");
        AIImgContainer.classList.add("btn__image-container");
        const AIImg = document.createElement("img");
        AIImg.src = `../../images/icon-${ai}.svg`;
        AIImg.alt = ai;
        AIImgContainer.appendChild(AIImg);
        AIPick.appendChild(AIImgContainer);
        AIContainer.appendChild(AIPick);
        resultGameSection.appendChild(playerContainer);
        resultGameSection.appendChild(AIContainer);
        return resultGameSection;
    }
}
//# sourceMappingURL=ResultGameView.js.map