class Product {
  constructor(title, price, category) {
    this.title = title;
    this.price = price;
    this.category = category.title;
  }
}

module.exports = Product;
