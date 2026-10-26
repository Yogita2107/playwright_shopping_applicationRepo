class billingAddress {
    constructor(page) {
        this.billingAddressTF = page.locator('//textarea[@name="billingaddress"]');
        this.billingStateTF = page.locator('//input[@name="bilingstate"]');
        this.billingCityTF = page.locator('//input[@name="billingcity"]');
        this.billingPincodeTF = page.locator('//input[@name="billingpincode"]');
        this.billingUpdateButton = page.locator('//button[@name="update"]');
    }
}

export default billingAddress;