class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getPlay(numberOfhours: number) {
    console.log(`${this.name}  plays Cricket${numberOfhours} daily`);
  }
}

class Student extends Person {
  rollNo: number;
  constructor(name: string, age: number, address: string, rollNo: number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }
}
const student1 = new Student("Alice", 20, "Dhaka", 5454);
student1.getPlay(3);

class Teacher extends Person {
  designation: number;
  constructor(name: string, age: number, address: string, designation: number) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(numberOfclass: number) {
    console.log(`${this.name} take class per day ${numberOfclass}`);
  }
}

const Teacher1 = new Teacher("Lecturer", 5465, "Senior Teacher", 5);
console.log(Teacher1);
