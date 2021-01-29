function Pizza(sizePrice, toppingOne, toppingTwo) {
  this.size = size;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
}

Pizza.prototype.totalCost = function () {
  return (this.sizePrice + this.toppingOne + this.toppingTwo)
}


$(document).ready(function() {
  $("form#pizzaForm").submit(function(e) {
    e.preventDefault();
    let size = parseInt($("#size").val());
  })
})
