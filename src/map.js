// Map system for Age of Destruction Game

class GameMap {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.grid = this.createGrid();
    }

    createGrid() {
        return Array.from({ length: this.height }, () => Array(this.width).fill(null));
    }

    setTile(x, y, tile) {
        if (this.isValidPosition(x, y)) {
            this.grid[y][x] = tile;
        }
    }

    getTile(x, y) {
        if (this.isValidPosition(x, y)) {
            return this.grid[y][x];
        }
        return null;
    }

    isValidPosition(x, y) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }

    displayMap() {
        this.grid.forEach(row => {
            console.log(row.join(' | '));
        });
    }
}

// Example of using the GameMap
const gameMap = new GameMap(10, 10);
gameMap.setTile(0, 0, 'Start');
gameMap.displayMap();