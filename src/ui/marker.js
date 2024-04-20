import { PLAYER_COLORS } from "../constants.js";
import { findCenterOf } from "../utils/dom.js";

export class Marker {
    static markers = [[], [], [], []];
    static getMarkerBy(playerIndex, markerIndex) {
        return Marker.markers[playerIndex][markerIndex];
    }

    constructor(associatedHouse, playerIndex, markerIndex, board) {
        this.associatedHouse = associatedHouse;
        this.playerIndex = playerIndex;
        this.markerIndex = markerIndex;
        this.board = board;

        Marker.markers[playerIndex][markerIndex] = this;
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
            await new Promise((res, rej) => setTimeout(res, 1000));
        }
        const svgElement = obj.contentDocument.querySelector("svg");
        svgElement.querySelectorAll("path")[1].setAttribute("fill", PLAYER_COLORS[playerIndex].marker);
        this.element.style.opacity = 1;
    }

    setAssociatedHouse(associatedHouse) {
        this.associatedHouse = associatedHouse;
        this.updateSelf();
    }

    updateSelf() {
        const { x, y } = findCenterOf(this.associatedHouse.component.element, this.board.element);
        this.element.style.setProperty("--top", `${y}px`);
        this.element.style.setProperty("--left", `${x}px`);
    }
}