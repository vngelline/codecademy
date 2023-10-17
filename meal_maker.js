const menu = {
  _meal: "",
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's special is ${this._meal} for ${this._price}!`;
    }
  },
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (this._meal = mealToCheck);
    }
  },
  _price: 0,
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return (this._price = priceToCheck);
    }
  },
};

menu.meal = "Mushroom ravioli";
menu.price = 12;
console.log(menu.todaysSpecial);
