import { PLAYER_COLORS } from "../constants.js";
import { House } from "./house.js";

export class Tile {
    static Types = {
        NORMAL: "normal",
        SAFE: "safe",
    };

    static tiles = [];
    static getTileAt(index) {
        return Tile.tiles[index];
    }

    constructor(tileIndex, playerIndex, tileType) {
        this.index = tileIndex;
        this.tileType = tileType;
        
        this.initElement(playerIndex);

        Tile.tiles[this.index] = this;
        House.registerAsHouse(this.index, 'Tile', this);
    }
    
    initElement(playerIndex) {
        this.element = document.createElement("div");
        this.element.classList.add("game-tile");
        // this.element.textContent = `${this.index}`;

        if (this.tileType === Tile.Types.SAFE) {
            this.element.classList.add("safe");
        }

        if (playerIndex >= 0) {
            this.element.style.setProperty("--color-primary", PLAYER_COLORS[playerIndex].primary);
        }
    }
}
