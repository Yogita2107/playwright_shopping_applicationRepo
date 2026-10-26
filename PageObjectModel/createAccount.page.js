class createAccount{
    constructor(page){
     
      this.fullNameTF =   page.locator('#fullname')
      this.emailAddressTF = page.locator('//input[@name="emailid"]')
      this.contactNoTF = page.locator('//input[@id="contactno"]')
      this.passwordTF = page.locator('//input[@id="password"]')
      this.cpasswordTF = page.locator('//input[@id="confirmpassword"]')
      this.sinupButton = page.locator('//button[text()="Sign Up"]')
    }
}
export default createAccount;