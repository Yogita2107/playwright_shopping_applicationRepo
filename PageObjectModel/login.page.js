class login{
    constructor(page){
      this.emailTF =  page.locator('//input[@id="exampleInputEmail1"]')
      this.passwordTF = page.locator('//input[@id="exampleInputPassword1"]')
      this.loginButton = page.locator('//button[text()="Login"]')

      // Successful login elements
        this.welcomeText = page.getByText('Welcome', { exact: false });
        this.logoutLink = page.getByText('Logout', { exact: true });
    }
}
export default login;