function Pizza(size, toppingOne, toppingTwo) {
  this.size = size;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
}

Pizza.prototype.totalCost = function () {
  let total = (this.size + this.toppingOne + this.toppingTwo)
  return total
}


$(document).ready(function() {
  $("form#pizzaForm").submit(function(e) {
    e.preventDefault();
    let size = parseInt($("#size").val());
    let toppingOne = parseInt($("#toppingOne").val());
    let toppingTwo = parseInt($("#toppingTwo").val());
    let totalPrice = new Pizza(size, toppingOne, toppingTwo);
    $("#show-price").show();
    $("#price").text(totalPrice.totalCost());
    
  });
});
