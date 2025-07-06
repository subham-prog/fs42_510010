function createCar(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
    describeCar: function () {
      console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    }
  };
}
const car1 = createCar("Toyota", "Camry", 2020);
const car2 = createCar("Tesla", "Model 3", 2023);

car1.describeCar();  
car2.describeCar();  
