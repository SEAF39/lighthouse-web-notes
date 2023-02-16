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
