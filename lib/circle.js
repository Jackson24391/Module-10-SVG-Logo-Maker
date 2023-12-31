const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(characters, textColor, color, formation) {
        super(characters, textColor, color, formation)

    }
    
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

module.exports = Circle;