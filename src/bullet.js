// Bullet.js
// Part of the Age of Destruction game

class Bullet {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speed = 10;
    }

    update() {
        // Update bullet position based on speed and direction
        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;
    }

    draw(context) {
        // Code to draw the bullet on canvas
        context.fillStyle = 'red';
        context.beginPath();
        context.arc(this.x, this.y, 5, 0, Math.PI * 2);
        context.fill();
    }
}

export default Bullet;