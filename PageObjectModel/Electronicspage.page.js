class ElectronicsPage{
    constructor(page){


        this.electronicLink = page.locator('//a[text()=" Electronics"]')
        this.allProducts = page.locator('//div[@class="product-image"]');
        this.ElectroCartProductName = page.locator('//a[text()="Micromax 81cm (32) HD Ready LED TV  (32T6175MHD, 2 x HDMI, 2 x USB)"]')
       this.electroAddToCart = page.locator('//a[text()=" ADD TO CART"]')
        this.checkCart = page.locator('//i[@class="glyphicon glyphicon-shopping-cart"]')
      this.myCart = page.locator('//a[@class="btn btn-upper btn-primary btn-block m-t-20"]')
      this.ElectroCartProductName = page.locator('//a[text()="Micromax 81cm (32) HD Ready LED TV  (32T6175MHD, 2 x HDMI, 2 x USB)"]')
    }
}
export default ElectronicsPage