"use strict";
const rulesOpenBtn = document.querySelector(".rules-btn");
const rulesCloseBtn = document.querySelector(".rules-btn--close");
rulesOpenBtn.addEventListener("click", () => {
    var _a, _b;
    (_a = document.querySelector(".rules")) === null || _a === void 0 ? void 0 : _a.classList.add("active");
    (_b = document.querySelector(".overlay")) === null || _b === void 0 ? void 0 : _b.classList.add("active");
});
rulesCloseBtn.addEventListener("click", () => {
    var _a, _b;
    (_a = document.querySelector(".rules")) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
    (_b = document.querySelector(".overlay")) === null || _b === void 0 ? void 0 : _b.classList.remove("active");
});
//# sourceMappingURL=app.js.map