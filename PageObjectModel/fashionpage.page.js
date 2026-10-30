class fashionPage{
    constructor(page){

      this.fashionLink = page.locator('//a[text()=" Fashion"]')
      // this.allProducts = page.locator('//div[@class="col-sm-6 col-md-4 wow fadeInUp animated"]')
      this.allProducts = page.locator('//div[@class="products"]/div[@class="product"]');
      // this.fashionProductName = page.locator('//a[@href="product-details.php?pid=19"]');
      this.fashionProductName = page.locator(
    '//div[@class="products"]/div[@class="product"]//h3[@class="name"]/a[@href="product-details.php?pid=19"]'
);
      this.fashionAddToCart = page.locator('//a[text()=" ADD TO CART"]')
       this.checkCart = page.locator('//i[@class="glyphicon glyphicon-shopping-cart"]')
      this.myCart = page.locator('//a[@class="btn btn-upper btn-primary btn-block m-t-20"]')
      // this.fashionProductName = page.locator('//a[@href="product-details.php?pid=19"]');
//       this.cartFashionProductName = page.locator(
//     '//a[@href="product-details.php?pid=19"]'
// );
   this.cartFashionProductName = page.locator(
    '//td[@class="cart-product-name-info"]//a[@href="product-details.php?pid=19"]'
);

    }

}
export default fashionPage



 
    