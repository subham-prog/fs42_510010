function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

Animal.prototype.info = function () {
  console.log(`Name: ${this.name}, Weight: ${this.weight}kg`);
};

const elephant = new Animal("Elephant", 600);
elephant.speak();
elephant.info();
