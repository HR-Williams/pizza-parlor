function Pizza(sizePrice, toppingOne, toppingTwo) {
  this.sizePrice = sizePrice;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
}

Pizza.prototype.totalCost = function () {
  return (this.sizePrice + this.toppingOne + this.toppingTwo)
}

