// Enemy class for Age of Destruction

class Enemy {
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }

    attack() {
        console.log(`${this.name} attacks with ${this.attackPower} power!`);
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} takes ${amount} damage! Remaining health: ${this.health}`);
    }
}

// Exporting the Enemy class for use in other modules
module.exports = Enemy;