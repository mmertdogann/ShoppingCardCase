class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
    this.deliveryCost = 0;
    this.totalDiscount = 0;
  }

  addToBasket = (product, quantity) => {
    let cost, discount;
    cost = this.calculateCost(quantity, product.price);
    this.total += cost;
    discount = this.applyDiscount(cost, quantity);
    cost -= discount;

    this.products.push({
      product,
      quantity,
      discount,
      cost,
    });

    return cost;
  };

  calculateCost = (quantity, price) => {
    return quantity * price;
  };

  applyDiscount = (cost, quantity) => {
    let discountAmount = 0;

    if (quantity >= 3 && quantity < 5) {
      discountAmount = (cost * 15) / 100;
      this.total -= discountAmount;
    }
    if (quantity >= 5) {
      discountAmount = (cost * 20) / 100;
      this.total -= discountAmount;
    }
    this.totalDiscount += discountAmount;
    return discountAmount;
  };

  applyCoupon = () => {
    let couponDiscount = 0;
    if (this.total >= 300) {
      couponDiscount = (this.total * 10) / 100;
      this.total -= couponDiscount;
    }
    this.totalDiscount += couponDiscount;
    return this.total;
  };

  calculateDeliveryCost = () => {
    if (this.total >= 150) this.deliveryCost = 0;
    else if (this.total < 150 && this.total > 50) this.deliveryCost = 5;
    else this.deliveryCost = 10;
    this.total += this.deliveryCost;
    return this.deliveryCost;
  };
}

module.exports = Cart;
