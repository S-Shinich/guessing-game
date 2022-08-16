class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.greatVal = max;
        this.minVal = min;
        this.node = null;
    }

    guess() {
       return this.node = Math.round((this.greatVal - this.minVal) / 2 ) + this.minVal; 
    }

    lower() {
        return  this.greatVal = this.node;
    }

    greater() {
        return this.minVal = this.node;
    }
}

module.exports = GuessingGame;
