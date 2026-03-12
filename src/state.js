'use strict';

class GameState {
    constructor() {
        this.state = {};
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
    }

    getState() {
        return this.state;
    }

    resetState() {
        this.state = {};
    }
}

module.exports = GameState;