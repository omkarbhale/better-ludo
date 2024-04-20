// Non-ui static utils to keep track of places where a marker can go
export class House {
    static houses = [];
    static registerAsHouse(index, type, component) {
        House.houses[index] = {
            type: type,
            component: component
        }
    }
    static getNextHouseIndex(index, playerIndex) {
        if (index === -1) {
            throw new Error("Index of -1 represents player has won! You can't get next house index from -1");
        }
        // From Player 1 houses
        if (index >= 72 && index <= 75) {
            return 0;
        }
        // From Player 2 houses
        if (index >= 76 && index <= 79) {
            return 13;
        }
        // From Player 3 houses
        if (index >= 80 && index <= 83) {
            return 39;
        }
        if (index >= 84 && index <= 87) {
            return 26;
        }
        // Player carpets
        if (index === 50 && playerIndex === 0) {
            return 52;
        }
        if (index === 11 && playerIndex === 1) {
            return 57;
        }
        if (index === 11 && playerIndex === 1) {
            return 57;
        }
        if (index === 24 && playerIndex === 2) {
            return 62;
        }
        if (index === 37 && playerIndex === 3) {
            return 67;
        }
        // Wrap around last tile
        if (index === 51) {
            return 0;
        }
        // Player winnings
        if (index === 56 || index === 61 || index === 66 || index === 71) {
            return -1;
        }
        return index + 1;
    }
}
window.House = House;