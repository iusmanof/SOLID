// Open Close principle

// Cущности (классы, модули, функции) должны быть открыты для расширения, но не для модификации.
class Shape {
  area() {
    throw new Error("Area method should be implemented");
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    // this.type = "square";
    this.size = size;
  }
  // redefine !!!
  area() {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    // this.type = "circle";
    super();
    this.radius = radius;
  }
  // redefine !!!
  area() {
    return this.radius ** 2 * Math.PI;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    // this.type = "rectangle";
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

// Открыт для расширений но закрыт для модификаций
class AreaCalaculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area();
      //   if (shape.type === "circle") {
      //     acc += shape.radius ** 2 * Math.PI;
      //   } else if (shape.type === "square") {
      //     acc += shape.size ** 2;
      //   } else if (shape.type === "rectangle") {
      //     acc += shape.width * shape.height;
      //   }
      return acc;
    }, 0);
  }
}

const cals = new AreaCalaculator([
  new Square(10),
  new Circle(1),
  new Circle(5),
  new Rectangle(10, 20),
]);

console.log(cals.sum());
