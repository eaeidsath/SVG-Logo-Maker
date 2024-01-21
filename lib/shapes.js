class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

class Rectangle extends Shape {
    constructor(color, height, width) {
        super(color);
        this.height = height;
        this.width - width;
    }
}

class Triangle extends Shape {
    constructor(color, points) {
        super(color);
        this.poinst = points;
    }
}