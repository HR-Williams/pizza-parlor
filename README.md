# Pizza Parlor

##### A little program that takes a pizza order with size and toppings and determines the price.

#### By HR Williams

## Description

This application allows the user to choose a pizza size and add toppings and then evaluates the total price.

## Setup

Install pizza-parlor by cloning this repository.

## Tests
**Describe: function Pizza(size, toppingOne, toppingTwo)** <br>
Test: "It should create a Pizza object"
Expect(let myPizza = new Pizza(10, 2, 2, 3)).toEqual(Pizza{size: 10, toppingOne: 2, toppingTwo: 2, toppingThree: 2})

**Describe: Pizza(sizePrice)** <br>
Test: "It returns 10 for a small pizza" <br>
Expect(myPizza(10)).toEqual(10);

Test: "It returns (10, 2, 2) for a small pizza with 2 toppings" <br>
Expect(myPizza(10, 2, 2)).toEqual(10, 2, 2);


**Describe Pizza.prototype.totalCost()** <br>
Test: Add each property value within Pizza object together to calculate totalPrice <br>
Expect myPizza.totalCost().toEqual(14)



## Technologies Used

JavaScript and jQuery


### Legal

Copyright (c) 2021 **HR Williams**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.