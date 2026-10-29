import {test, expect} from '@playwright/test'
import createAccount from '../PageObjectModel/createAccount.page'
import homePage from '../PageObjectModel/homepage.page'
import login from '../PageObjectModel/login.page'
import data from '../testData/sigindata.json'

test("register and login with valid details ", async({page})=>{

  page.once('dialog', async (dialog) => {

    console.log('Dialog message:', dialog.message());

    expect(dialog.message()).toBe('You are successfully register');

    await dialog.accept();

})



       let homepage= new homePage(page)
       let signup = new createAccount(page)
      const loginPage = new login(page);

  


    for (let testdata of data) {


    let url = testdata.url
    let name =testdata.name
    let email =testdata.email
    let contact = testdata.contact
    let pass = testdata.password
    let cpass = testdata.cpassword

    


    await page.goto(url)

    await homepage.loginLink.click()

    //? Generate random credentials
    //yogita1234@gmail.com
    let randomEmail = `yogita${Date.now()}@gmail.com`;
    let randomPassword = `Test@${Math.floor(Math.random() * 100000)}`;

    //? 1. register with valid details and print the sigin message 
    //? (account should be created sucessfully)

    await signup.fullNameTF.fill(name)
     await signup.emailAddressTF.fill(randomEmail)
     await signup.contactNoTF.fill(contact)
     await signup.passwordTF.fill(randomPassword)
     await signup.cpasswordTF.fill(randomPassword)
     
     await signup.sinupButton.click();







     //? Verify navigation to login page
     await expect(page).toHaveURL('http://49.249.29.4:8081/AppServer/Online_Shopping_Application/login.php')

  
  
 
      //? Verify login form elements
        await expect(loginPage.emailTF).toBeVisible();
        await expect(loginPage.passwordTF).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();

            //? Print registered details
    console.log('Registered Name:', testdata.name);
    console.log('Registered Email:', randomEmail);



//? Login using the same credentials
await loginPage.emailTF.fill(randomEmail);
await loginPage.passwordTF.fill(randomPassword);
await loginPage.loginButton.click();


await expect(page).toHaveURL('http://49.249.29.4:8081/AppServer/Online_Shopping_Application/my-cart.php')

 await expect(loginPage.welcomeText).toBeVisible();
await expect(loginPage.logoutLink).toBeVisible();

  console.log('Login successful for:', randomEmail);


}

    
})