"use strict";
// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`${this.name} is making sound ${this.sound}`);
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} is making sound ${this.sound}`);
    }
}
const dog = new Animal("Kalu", "dog", "GHew GHEW");
console.log(dog.sound);
//# sourceMappingURL=class.js.map