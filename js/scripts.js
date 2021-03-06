function Pizza(size, toppingOne, toppingTwo, toppingThree) {
  this.size = size;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
}

Pizza.prototype.totalCost = function () {
  let total = (this.size + this.toppingOne + this.toppingTwo + this.toppingThree)
  return total
}


$(document).ready(function() {
  $("form#pizzaForm").submit(function(e) {
    e.preventDefault();
    let size = parseInt($("#size").val());
    let toppingOne = parseInt($("#toppingOne").val());
    let toppingTwo = parseInt($("#toppingTwo").val());
    let toppingThree = parseInt($("#toppingThree").val());
    let totalPrice = new Pizza(size, toppingOne, toppingTwo, toppingThree);
    $("#show-price").show();
    $("#price").text(totalPrice.totalCost());
    
  });
});
