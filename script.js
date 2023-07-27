class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }

  makeSound() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }

  makeSound() {
    console.log("Bark");
  }
}

// Example usage:
const animal = new Animal("Unknown");
console.log("Animal species:", animal.species);
animal.makeSound(); // Output: Animal sound

const cat = new Cat("Cat");
console.log("Cat species:", cat.species);
cat.makeSound(); // Output: Meow
cat.purr(); // Output: purr

const dog = new Dog("Dog");
console.log("Dog species:", dog.species);
dog.makeSound(); // Output: Bark
dog.bark(); // Output: woof