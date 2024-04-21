import { Board } from "./ui/board.js";
import { House } from "./ui/house.js";
import { Marker } from "./ui/marker.js";

console.log("Main.js!");

const run = async () => {
    const gameContainer = document.querySelector("#game-container");
    const board = new Board(gameContainer);
};

window.test = async (markerIndex=0, playerIndex=0) => {
    let marker = Marker.getMarkerBy(playerIndex, markerIndex);
    while (true) {
        const index = marker.associatedHouse.component.index;
        const nextHouseIndex = House.getNextHouseIndex(index, playerIndex);
        if (nextHouseIndex === -1) {
            console.log('win');
            break;
        }
        const nextHouse = House.houses[nextHouseIndex];
        await marker.setAssociatedHouse(nextHouse);
        await new Promise((res, rej) => setTimeout(res, 200));
        if (Math.random() < .1) break;
    }
}

run();