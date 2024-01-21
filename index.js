//imports inquirer package
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes.js");
const fs = require("fs");
const shapesList = ["Circle", "Square", "Triangle"]

function runGenerator() {
    inquirer
  .prompt([
    {
        type: 'input',
        name: 'textContent',
        message: 'Enter up to 3 characters for your logo.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or hexadecimal number for the color of your text.',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select the shape for your logo.',
        choices: shapesList
    },
    {
        type: 'input',
        name: 'shapeFill',
        message: 'Enter a color keyword or hexadecimal number for the color of your shape.',
    },
  ])
  .then((data) => {

    const { textContent, textColor, shape, shapeFill } = data;

    if (textContent.length > 3) {
        console.log("Text must be 3 characters or less.");
        runGenerator();
        return
    }

    if(shape === "Circle") {
        const circle = new Circle();
        circle.setShapeFill(shapeFill);
        circle.setTextColor(textColor);
        circle.setTextContent(textContent);
        var logo = circle.render()
    } else if (shape === "Square") {
        const square = new Square();
        square.setShapeFill(shapeFill);
        square.setTextColor(textColor);
        square.setTextContent(textContent);
        var logo = square.render()
    } else if (shape === "Triangle") {
        const triangle = new Triangle();
        triangle.setShapeFill(shapeFill);
        triangle.setTextColor(textColor);
        triangle.setTextContent(textContent);
        var logo = triangle.render()
    }

    fs.writeFile('logo.svg', logo, (err) =>
      err ? console.log(err) : console.log('Generated logo.svg')
    );
});
}

runGenerator();