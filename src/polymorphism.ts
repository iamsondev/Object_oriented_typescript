class Person {
  getPlaying() {
    console.log(`Person playing cricket 4 hours per day`);
  }
}

class Student extends Person {
  getPlaying() {
    console.log(`Student playing cricket 8 hours per day`);
  }
}

class WebDeveloper extends Person {
  getPlaying() {
    console.log(`Web Developer playing cricket 2 hours per day`);
  }
}

const getPlayingHours = (param: Person) => {
  param.getPlaying();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new WebDeveloper();

getPlayingHours(person2);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}
const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(20);
const shape3 = new Rectangle(10, 20);
getArea(shape3);
