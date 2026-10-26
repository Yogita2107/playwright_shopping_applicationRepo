class fashionPage{
    constructor(page){

      this.fashionLink = page.locator('//a[text()=" Fashion"]')
      this.allProducts = page.locator('//div[@class="col-sm-6 col-md-4 wow fadeInUp animated"]')
      this.fashionProductName = page.locator('//a[text()="Asian Casuals  (White, White)"]')
      this.fashionAddToCart = page.locator('//a[text()=" ADD TO CART"]')
       this.checkCart = page.locator('//i[@class="glyphicon glyphicon-shopping-cart"]')
      this.myCart = page.locator('//a[@class="btn btn-upper btn-primary btn-block m-t-20"]')
      this.fashionProductName = page.locator('//a[text()="Asian Casuals  (White, White)"]')
    }
}
export default fashionPage



 
    