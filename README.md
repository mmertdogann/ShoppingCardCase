# ShoppingCart Case
A simple Nodejs application to implement a shopping cart
## Installation
You need to install `nodejs` and `npm` into your local machine to run this project.
Feel free to install node js via using this [link](https://nodejs.org/)

> After installation of node js and npm, you need to type ``` npm install ``` to install dependencies for starting the project

Then start project with `node App.js`
If you want to see and try the unit test written by using `Jest` type `npm test`


## About Project
* Node: For implementing Class Hierarchy
### Unit Test
* Jest

 
# Discounts
I have used 2 rules:
* %15 If quantity of items is between 3 and 5
* %20 If quantity of items is greater than 5


# Coupons 
* %10 discount coupon for purchase amount 300 TL or more

 
> Campaign Discounts are applied first, Then Coupons

# Delivery 

* Fixed cost is 10 TL

* If total cost is less than 50 TL, delivery cost is 10 TL
* If total cost is between 50 TL and 150 TL, delivery cost is 5 TL
* If total cost is greater than 150 TL, delivery cost is 0 TL

# Final Result (Simple Command Line Output)

 ![FinalResult](https://i.ibb.co/MBVGq4Z/ss.png)