const { Circle, Square, Triangle } = require("./shapes.js");

describe("triangle test", () => {
    test("test for blue triangle no text", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})