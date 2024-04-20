import { Board } from "./ui/board.js";
import { House } from "./ui/house.js";

console.log("Main.js!");

const run = async () => {
    const gameContainer = document.querySelector("#game-container");
    const board = new Board(gameContainer);
};

window.test = async (index) => {
    if (index > 87 || index < 0) return;
    while (true) {
        console.log(index);
        await new Promise((res, rej) => setTimeout(res, 50));
        index = House.getNextHouseIndex(index, 1);
        if (index === -1) {
            console.log("Win!");
            break;
        }
    }
}

run();