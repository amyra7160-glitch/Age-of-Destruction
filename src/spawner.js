// src/spawner.js

class EnemySpawner {
    constructor() {
        this.enemies = [];
    }

    spawnEnemy(type) {
        const enemy = new Enemy(type);
        this.enemies.push(enemy);
        console.log(`Spawned an enemy of type: ${type}`);
    }

    update() {
        this.enemies.forEach(enemy => enemy.update());
    }
}

class Enemy {
    constructor(type) {
        this.type = type;
    }

    update() {
        // Update enemy position, behavior, etc.
        console.log(`Updating enemy of type: ${this.type}`);
    }
}

// Exporting the EnemySpawner for use in other parts of the game
export default EnemySpawner;