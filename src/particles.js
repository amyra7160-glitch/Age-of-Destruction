// Particle effects for Age of Destruction game

class Particle {
    constructor(x, y, lifespan, color) {
        this.x = x;
        this.y = y;
        this.lifespan = lifespan;
        this.color = color;
        this.age = 0;
    }

    update() {
        this.age++;
        this.lifespan--;
    }

    isAlive() {
        return this.lifespan > 0;
    }
}

class ParticleSystem {
    constructor() {
        this.particles = [];
    }

    addParticle(x, y, lifespan, color) {
        this.particles.push(new Particle(x, y, lifespan, color));
    }

    update() {
        this.particles = this.particles.filter(p => p.isAlive());
        this.particles.forEach(p => p.update());
    }

    draw(context) {
        this.particles.forEach(p => {
            context.fillStyle = p.color;
            context.fillRect(p.x, p.y, 2, 2); // Draw each particle as a small square
        });
    }
}

// Example usage:
// const particleSystem = new ParticleSystem();
// particleSystem.addParticle(100, 100, 100, 'red');
// particleSystem.update();
// particleSystem.draw(context);