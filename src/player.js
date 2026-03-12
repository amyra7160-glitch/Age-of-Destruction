// Player class for Age of Destruction game
class Player {
    constructor(name, health, level) {
        this.name = name;
        this.health = health;
        this.level = level;
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) this.health = 0;
    }

    levelUp() {
        this.level += 1;
    }

    isAlive() {
        return this.health > 0;
    }
}

// Export the Player class
module.exports = Player;
