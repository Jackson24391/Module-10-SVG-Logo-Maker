class Shapes {
    constructor(characters, textColor, color, formation) {
        this.characters = characters;
        this.textColor = textColor;
        this.color = color;
        this.formation = formation

    }
    render() {
        throw new Error('Each shape must implement a render method.');
    }
    setColor(color) {
        return this.color = color
    }

    renderSVG() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

         ${this.formation.render()}

         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>

        </svg>
        `
    }


}
module.exports = Shapes;