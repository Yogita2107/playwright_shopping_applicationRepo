class ElectronicsPage{
    constructor(page){


        this.electronicLink = page.locator('//a[text()=" Electronics"]')
        this.allProducts = page.locator('//div[@class="product-image"]');
        this.ElectroCartProductName = page.locator('div.products > div.product h3.name a[href="product-details.php?pid=1"]')
       this.electroAddToCart = page.locator('//a[text()=" ADD TO CART"]')
        this.checkCart = page.locator('//i[@class="glyphicon glyphicon-shopping-cart"]')
      this.myCart = page.locator('//a[@class="btn btn-upper btn-primary btn-block m-t-20"]')
    this.cartProductName = page.locator('(//a[text()="Micromax 81cm (32) HD Ready LED TV  (32T6175MHD, 2 x HDMI, 2 x USB)"])[2]');
    // this.cartProductName = page.locator( 'h3.name a:has-text("Micromax 81cm (32) HD Ready LED TV")')
    }}
export default ElectronicsPage