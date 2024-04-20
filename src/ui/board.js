import { PLAYER_COUNT } from "../constants.js";
import { PlayerBlock } from "./playerblock.js";
import { TileBlock } from "./tileblock.js";
import { CenterBlock } from "./centerblock.js";

export class Board {
    constructor(container) {
        this.container = container;
        this.initElement();
    }

    initElement() {
        this.playerBlocks = this.initPlayerBlocks(PLAYER_COUNT);
        const tileBlocks = this.initTileBlocks();
        this.centerBlock = this.initCenterBlock();

        this.element = document.createElement("div");
        this.element.classList.add("game-board");

        this.element.appendChild(this.playerBlocks[0].element);
        this.element.appendChild(tileBlocks[0].element);
        this.element.appendChild(this.playerBlocks[1].element);
        this.element.appendChild(tileBlocks[1].element);
        this.element.appendChild(this.centerBlock.element);
        this.element.appendChild(tileBlocks[2].element);
        this.element.appendChild(this.playerBlocks[2].element);
        this.element.appendChild(tileBlocks[3].element);
        this.element.appendChild(this.playerBlocks[3].element);

        this.container.appendChild(this.element);
    }

    initPlayerBlocks() {
        const playerBlocks = [];
        playerBlocks.push(new PlayerBlock(0, 72));
        playerBlocks.push(new PlayerBlock(1, 76));
        playerBlocks.push(new PlayerBlock(2, 80));
        playerBlocks.push(new PlayerBlock(3, 84));
        return playerBlocks;
    }

    initCenterBlock() {
        return new CenterBlock();
    }

    initTileBlocks() {
        const tileBlocks = [];
        tileBlocks.push(new TileBlock([ // top
            10, 11, 12,
            9, 57, 13,
            8, 58, 14,
            7, 59, 15,
            6, 60, 16,
            5, 61, 17,
        ], "game-board-section vertical"));
        tileBlocks.push(new TileBlock([ // left
            51, 0, 1, 2, 3, 4,
            50, 52, 53, 54, 55, 56,
            49, 48, 47, 46, 45, 44,
        ], "game-board-section horizontal"));
        tileBlocks.push(new TileBlock([ // right
            18, 19, 20, 21, 22, 23,
            66, 65, 64, 63, 62, 24,
            30, 29, 28, 27, 26, 25,
        ], "game-board-section horizontal"));
        tileBlocks.push(new TileBlock([ // bottom
            43, 71, 31,
            42, 70, 32,
            41, 69, 33,
            40, 68, 34,
            39, 67, 35,
            38, 37, 36,
        ], "game-board-section vertical"));
        return tileBlocks;
    }
}