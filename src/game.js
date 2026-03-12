// Main engine for the Age of Destruction game

class GameEngine {
    constructor() {
        this.isRunning = false;
        this.entities = [];
    }

    start() {
        this.isRunning = true;
        this.gameLoop();
    }

    stop() {
        this.isRunning = false;
    }

    gameLoop() {
        if (this.isRunning) {
            this.update();
            this.render();
            requestAnimationFrame(() => this.gameLoop());
        }
    }

    update() {
        // Update game entities
        this.entities.forEach(entity => entity.update());
    }

    render() {
        // Render game entities
        this.entities.forEach(entity => entity.render());
    }

    addEntity(entity) {
        this.entities.push(entity);
    }
}

// Example usage:
const game = new GameEngine();
game.start();