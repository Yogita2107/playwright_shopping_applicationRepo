class wishList{

    constructor(page){

this.wishlistLink = page.locator('//i[@class="icon fa fa-heart"]')
this.wishlistProduct = page.locator('//div[contains(@class,"my-wishlist")]//tbody/tr')
this.removeWishlist = page.locator('//i[@class="fa fa-times"]')
   
}
}
export default wishList;

