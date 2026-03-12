// input.js

// Input handling for Age of Destruction game

export class InputHandler {
    constructor() {
        this.keys = {};
        window.addEventListener('keydown', (event) => this.onKeyDown(event));
        window.addEventListener('keyup', (event) => this.onKeyUp(event));
    }

    onKeyDown(event) {
        this.keys[event.code] = true;
    }

    onKeyUp(event) {
        this.keys[event.code] = false;
    }

    isKeyPressed(key) {
        return !!this.keys[key];
    }
}