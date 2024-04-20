import { PLAYER_COLORS } from "../constants.js";
import { House } from "./house.js";

export class Tile {
    static tiles = [];
    static getTileAt(index) {
        return Tile.tiles[index];
    }

    constructor(tileIndex, playerIndex) {
        this.index = tileIndex;
        Tile.tiles[this.index] = this;
        
        this.initElement(playerIndex);
        House.registerAsHouse(this.index, 'Tile', this);
    }
    
    initElement(playerIndex) {
        this.element = document.createElement("div");
        this.element.classList.add("game-tile");
        this.element.textContent = `${this.index}`;

        if (playerIndex >= 0) {
            this.element.style.setProperty("--color-primary", PLAYER_COLORS[playerIndex].primary);
        }
    }
}
