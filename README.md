# Pizza Parlor

##### A little program that takes a pizza order with size and toppings and determines the price.

#### By HR Williams

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_


## Description

This application allows the user to choose a pizza size and add toppings and then evaluates the total price.

## Setup

* _clone this repository to your desktop_
* _navigate to the top level of the directory_
* _open index.html in web browser_

## Tests
**Describe: function Pizza(size, toppingOne, toppingTwo)** <br>
Test: "It should create a Pizza object"
Expect(let myPizza = new Pizza(10, 2, 2, 2)).toEqual(Pizza{size: 10, toppingOne: 2, toppingTwo: 2, toppingThree: 2})

<!-- **Describe: Pizza.prototype.totalCost()<br>
Test: "It returns 10 for a small pizza" <br>
Expect(myPizza(10.)).toEqual(10);

Test: "It returns (10, 2, 2) for a small pizza with 2 toppings" <br>
Expect(myPizza(10, 2, 2)).toEqual(10, 2, 2); -->

**Describe Pizza.prototype.totalCost()** <br>
Test: Add each property value within Pizza object together to calculate totalPrice <br>
Expect myPizza.totalCost().toEqual(16)

## Known Bugs

* _I am working on the "check-boxes branch" to turn the topping options into check boxes as this would allow user to easily pick as few or as many toppings as they would like_

