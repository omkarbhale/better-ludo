import { House } from "./house.js"
import { PLAYER_COLORS } from "../constants.js";

class PlayerHouse {
    constructor(houseIndex) {
        this.element = document.createElement('div');
        this.element.classList.add("housecontainer");
        
        const house = document.createElement("div");
        house.classList.add("house");
        house.textContent = houseIndex;

        this.element.appendChild(house);
        House.registerAsHouse(houseIndex, 'PlayerHouse', this);
    }
}

export class PlayerBlock {
    constructor(playerIndex, startingHouseIndex) {
        this.houses = [];
        this.playerIndex = playerIndex;
        this.initElement(playerIndex, startingHouseIndex);
    }

    initElement(playerIndex, startingHouseIndex) {
        this.element = document.createElement("div");
        this.element.classList.add("playerblock");
        this.element.style.setProperty("--color-primary", PLAYER_COLORS[playerIndex].primary);
        this.element.style.setProperty("--color-dark", PLAYER_COLORS[playerIndex].dark);
        this.element.style.setProperty("--color-light", PLAYER_COLORS[playerIndex].light);
        for (let i = 0; i < 4; i++) {
            this.houses[i] = new PlayerHouse(startingHouseIndex + i).element;
            this.element.appendChild(this.houses[i]);
        }
    }
}