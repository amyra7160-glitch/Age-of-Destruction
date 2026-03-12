// weapon.js

class Weapon {
    constructor(name, damage, range) {
        this.name = name;
        this.damage = damage;
        this.range = range;
    }

    attack() {
        console.log(`${this.name} attacks with ${this.damage} damage!`);
    }
}

export default Weapon;