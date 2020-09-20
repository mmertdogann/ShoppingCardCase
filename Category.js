class Category {
  constructor(title, parentCategory = 'N/A') {
    this.title = title;
    this.parentCategory = parentCategory;
  }
}

module.exports = Category;
