class cartPage {
    constructor(page) {
        this.page = page;
        
        //Navigation to Cart
        this.checkCart = page.locator('//i[@class="glyphicon glyphicon-shopping-cart"]'); 
        this.myCart = page.locator('//a[text()="My Cart" and @class="btn btn-upper btn-primary btn-block m-t-20"]');       


        this.cartQuantity = page.locator('//input[@name = "quantity[16]"]'); 

        this.updateCartButton = page.locator('//input[@value="Update shopping cart"]')

        
       this.grandTotal = page.locator('td.cart-product-grand-total');

       this.remove = page.locator('//input[@name="remove_code[]"]')  
       
    }
}
export default cartPage