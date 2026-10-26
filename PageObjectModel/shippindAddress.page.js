class shippingAddress{
    constructor(page){

  this.shippingAddressTF =  page.locator('//textarea[@name="shippingaddress"]')
  this.shippingStateTF =  page.locator('//input[@name="shippingstate"]')
  this.shippingCityTF =  page.locator('//input[@name="shippingcity"]')
   this.shippingPincodeTF = page.locator('//input[@name="shippingpincode"]')
   this.shipUpadteButton =  page.locator('//button[@name="shipupdate"]')

    }
}
export default shippingAddress