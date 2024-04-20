import { Board } from "./ui/board.js";

console.log("Main.js!");

const run = async () => {
    const gameContainer = document.querySelector("#game-container");
    const board = new Board(gameContainer);
};

run();