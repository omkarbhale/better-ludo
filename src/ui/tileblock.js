import { Tile } from "./tile.js";

export class TileBlock {
    constructor(indices, className) {
        if (indices?.length !== 18) throw new Error("There must be 18 indices for tiles");
        this.initElement(indices, className);
    }

    initElement(indices, className) {
        this.element = document.createElement("div");
        this.element.className = className;
        for (let i = 0; i < 18; i++) {
            const tile = this.initTile(indices[i]);
            this.element.appendChild(tile.element);
        }
    }

    initTile(tileIndex) {
        let playerIndex = -1;
        if (tileIndex >= 52 && tileIndex <= 56) { // Player 1
            playerIndex = 0;
        }
        if (tileIndex >= 57 && tileIndex <= 61) { // Player 2
            playerIndex = 1;
        }
        if (tileIndex >= 67 && tileIndex <= 71) { // Player 2
            playerIndex = 2;
        }
        if (tileIndex >= 62 && tileIndex <= 66) { // Player 3
            playerIndex = 3;
        }
        const tile = new Tile(tileIndex, playerIndex);
        return tile;
    }
}