const Category = require('../Category');
const Product = require('../Product');
const Cart = require('../Cart');

const food = new Category('food');
const clothes = new Category('clothes');
const electronics = new Category('laptop');

const apple = new Product('Apple', 10.0, food);
const sweater = new Product('Sweater', 40.0, clothes);
const dell = new Product('Dell', 2500.0, electronics);

const cart = new Cart();

const testAddToBasketWDeliveryCost = () => {
  test('Properly add item to the basket and check whether the discount applied to the cost with delivery price', () => {
    expect(cart.addToBasket(apple, 4)).toBe(34);
  });
};

const testcalculateExtraDeliveryCost = () => {
  test('Properly calculate delivery cost when price is less than 50', () => {
    expect(cart.calculateDeliveryCost()).toBe(10);
  });
};

const testAddToBasketWoutDeliveryCost = () => {
  test('Properly add item to the basket and check whether the discount applied to the cost without delivery price', () => {
    expect(cart.addToBasket(sweater, 10)).toBe(320);
  });
};

const testcalculateNoDeliveryCost = () => {
  test('Properly calculate delivery cost when price is greater than 150', () => {
    expect(cart.calculateDeliveryCost()).toBe(0);
  });
};

const testCalculateCouponDiscount = () => {
  test('Properly apply coupon to the basket and check whether the coupon discount applied to the cost', () => {
    expect(cart.applyCoupon()).toBe(327.6);
  });
};

testAddToBasketWDeliveryCost();
testcalculateExtraDeliveryCost();
testAddToBasketWoutDeliveryCost();
testcalculateNoDeliveryCost();
testCalculateCouponDiscount();
