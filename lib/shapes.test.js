const { Circle, Square, Triangle } = require("./shapes.js");

describe("triangle test", () => {
    test("test for blue triangle with white text", () => {
        const shape = new Triangle();
        shape.setShapeFill("blue");
        shape.setTextContent("A");
        shape.setTextColor("white");
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0, 200 150, 0 300, 200" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>');
    })
})

describe("circle test", () => {
    test("test for purple circle with black text", () => {
        const shape = new Circle();
        shape.setShapeFill("purple");
        shape.setTextContent("LOL");
        shape.setTextColor("black");
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="purple" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">LOL</text></svg>');
    })
})

describe("square test", () => {
    test("test for yellow square with pink text", () => {
        const shape = new Square();
        shape.setShapeFill("yellow");
        shape.setTextContent("LL");
        shape.setTextColor("pink");
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="0" width="200" height="200" fill="yellow"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">LL</text></svg>');
    })
})