class BooksPage{
    constructor(page){
      this.booksLink =  page.locator('//a[text()=" Books"]')
      this.allBooks = page.locator('//a[contains(@href, "product-details.php?pid=")]')
    this.bookProduct = page.locator('div.products div.product h3.name a[href="product-details.php?pid=16"]')
      this.bookAddToCart = page.locator('//a[text()=" ADD TO CART"]')
      this.checkCart = page.locator('//i[@class="glyphicon glyphicon-shopping-cart"]')
      this.myCart = page.locator('//a[@class="btn btn-upper btn-primary btn-block m-t-20"]')
      this.cartProductName = page.locator(
    '//td[@class="cart-product-name-info"]//a[@href="product-details.php?pid=16"]'
);
this.cartQuantity = page.locator('//input[@name="quantity[16]"]');
      // this.cartProductName = page.locator('div.products div.product h3.name a[href="product-details.php?pid=16"]')
   




    }
}
export default BooksPage;