
/*
class Pizza {
  constructor() {
    this.toppings = [];
    this._size = null;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  removeTopping(topping) {
    const index = this.toppings.indexOf(topping);
    if (index > -1) {
      this.toppings.splice(index, 1);
    }
  }

  get toppingsList() {
    return this.toppings.join(', ');
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }

  getSize() {
    return this._size;
  }
}

// DRIVER CODE
const pizza = new Pizza();

pizza.addTopping('mushrooms');
pizza.addTopping('peppers');
pizza.addTopping('onions');
console.log(pizza.toppingsList); // mushrooms, peppers, onions

pizza.removeTopping('peppers');
console.log(pizza.toppingsList); // mushrooms, onions

pizza.size = 'm';
console.log(pizza.getSize()); // m

console.log(pizza.price); // 14


*/

// Refactoring the code based on the exercise  inputs 
class Pizza {
  constructor() {
    this.toppings = [];
    this._size = 'm'; // we use _size to avoid conflicts with the size setter method
  }

  // adds a topping to the toppings array
  addTopping(topping) {
    this.toppings.push(topping);
  }

  // removes a topping from the toppings array
  removeTopping(topping) {
    const index = this.toppings.indexOf(topping);
    if (index !== -1) {
      this.toppings.splice(index, 1);
    }
  }

  // returns the size of the pizza
  getSize() {
    return this._size;
  }

  // sets the size of the pizza, with data validation
  setSize(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }

  // returns the price of the pizza, computed on the fly based on toppings and size
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }
}

// DRIVER CODE
let pizza = new Pizza();
console.log(pizza.getSize()); // 'm'

pizza.setSize('s');
console.log(pizza.getSize()); // 's'

console.log(pizza.price); // 10, base price for a small pizza with no toppings

pizza.addTopping('mushrooms');
console.log(pizza.price); // 12, base price plus 2 dollars for one topping

pizza.addTopping('peppers');
console.log(pizza.price); // 14, base price plus 4 dollars for two toppings

pizza.removeTopping('mushrooms');
console.log(pizza.price); // 12, base price plus 2 dollars for one topping
