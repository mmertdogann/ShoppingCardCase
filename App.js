const Category = require('./Category');
const Product = require('./Product');
const Cart = require('./Cart.js');

const food = new Category('food');
const clothes = new Category('clothes');
const electronics = new Category('laptop');

const apple = new Product('Apple', 10.0, food);
const sweater = new Product('Sweater', 40.0, clothes);
const dell = new Product('Dell', 2500.0, electronics);

const cart = new Cart();

cart.addToBasket(apple, 4);
cart.addToBasket(sweater, 10);
cart.addToBasket(dell, 4);

cart.applyCoupon();
cart.calculateDeliveryCost();

console.log('Products:', cart.products);
console.log('Delivery Cost:', cart.deliveryCost);
console.log('Total Discount Amount:', cart.totalDiscount);
console.log('Total Cost:', cart.total);
