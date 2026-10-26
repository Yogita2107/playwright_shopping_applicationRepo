class BooksPage{
    constructor(page){
      this.booksLink =  page.locator('//a[text()=" Books"]')
      this.allBooks = page.locator('//a[contains(@href, "product-details.php?pid=")]')
    this.bookProduct = page.locator('//a[text()="Thea Stilton and the Tropical Treasure "])')
      this.bookAddToCart = page.locator('//a[text()=" ADD TO CART"]')
      this.checkCart = page.locator('//i[@class="glyphicon glyphicon-shopping-cart"]')
      this.myCart = page.locator('//a[@class="btn btn-upper btn-primary btn-block m-t-20"]')
      this.cartProductName = page.locator('//a[text()="Thea Stilton and the Tropical Treasure "]')
   





    }
}
export default BooksPage;