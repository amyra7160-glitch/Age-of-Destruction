// src/ui.js

// Age of Destruction Game UI System

class GameUI {
    constructor() {
        this.score = 0;
        this.health = 100;
        this.level = 1;
    }

    updateScore(points) {
        this.score += points;
        this.render();
    }

    updateHealth(amount) {
        this.health = Math.max(0, this.health + amount);
        this.render();
    }

    nextLevel() {
        this.level += 1;
        this.render();
    }

    render() {
        console.log(`Score: ${this.score}, Health: ${this.health}, Level: ${this.level}`);
        // Code to update the UI visually can be added here
    }
}

// Example usage:
const gameUI = new GameUI();

// Simulating score and health updates
setTimeout(() => gameUI.updateScore(10), 1000);
setTimeout(() => gameUI.updateHealth(-20), 2000);
setTimeout(() => gameUI.nextLevel(), 3000);
