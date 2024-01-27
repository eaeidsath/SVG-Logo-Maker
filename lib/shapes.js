//shape class with shared properties for all the shapes and functions for setting colors and text
class Shape {
    constructor(parameters) {
        this.parameters = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    }
    setShapeFill(fill) {
        this.shapeFill = fill;
    }
    setTextColor(color) {
        this.textColor = color;
    }
    setTextContent(content) {
        this.textContent = content;
    }
}

//render function returns circle parameters
class Circle extends Shape {
    constructor(parameters, shapeFill, textColor, textContent) {
        super(parameters, shapeFill, textColor, textContent);
    }
    render() {
        return  `${this.parameters}<circle cx="150" cy="100" r="100" fill="${this.shapeFill}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text></svg>`
    };
}

//render function returns square parameters
class Square extends Shape {
    constructor(parameters, shapeFill, textColor, textContent) {
        super(parameters, shapeFill, textColor, textContent);
    }
    render() {
        return  `${this.parameters}<rect x="50" y="0" width="200" height="200" fill="${this.shapeFill}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text></svg>`
    };
}

//render function returns triangle parameters
class Triangle extends Shape {
    constructor(parameters, shapeFill, textColor, textContent) {
        super(parameters, shapeFill, textColor, textContent);
    }
    render() {
        return  `${this.parameters}<polygon points="0, 200 150, 0 300, 200" fill="${this.shapeFill}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text></svg>`
    };
}

//export the classes
module.exports = { Circle, Square, Triangle };