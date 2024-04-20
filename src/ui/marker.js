import { PLAYER_COLORS } from "../constants.js";

export class Marker {
    constructor(associatedHouse, playerIndex) {
        this.associatedHouse = associatedHouse;

        this.initElement(playerIndex);
        this.updateSelf();
    }

    async initElement(playerIndex) {
        this.element = document.createElement("div");
        this.element.classList.add("marker");

        const obj = document.createElement("object");
        obj.setAttribute("data", "/src/assets/marker_icon.svg");
        obj.setAttribute("type", "image/svg+xml");

        this.element.appendChild(obj);

        while (obj.contentDocument === null) {
            await new Promise((res, rej) => setTimeout(res, 100));
        }
        const svgElement = obj.contentDocument.querySelector("svg");
        svgElement.querySelectorAll("path")[1].setAttribute("fill", PLAYER_COLORS[playerIndex].marker);
    }

    updateSelf() {

    }
}