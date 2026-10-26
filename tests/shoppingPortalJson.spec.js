import {test} from '@playwright/test'
import testdata from '../testData/shoppingdata.json'

import homePage from '../PageObjectModel/homepage.page'
import createAccount from '../PageObjectModel/createAccount.page'
import login from '../PageObjectModel/login.page'
import BooksPage from '../PageObjectModel/BooksPage.page'
import Electronicpage from '../PageObjectModel/Electronicspage.page'
import fashionpage from '../PageObjectModel/fashionpage.page'
import shippingAddress from '../PageObjectModel/shippindAddress.page'
import billingAddress from '../PageObjectModel/billingAddress.page'
import confirmProduct from '../PageObjectModel/ConfirmProduct.page'
import paymentMethod from '../PageObjectModel/paymentMethod.page'
import trackProduct from '../PageObjectModel/trackProducts.page'
import logout from '../PageObjectModel/logout.page'

const fs = require('node:fs');



test("passing data", async({page})=>{

    page.on("dialog", async(dialog)=>{
        console.log(await dialog.message());
        await dialog.accept()
        
    })


    //! for all pages we have to create object 
    let homepage= new homePage(page)
    let signin = new createAccount(page)
    let loginPage = new login(page)
    let books = new BooksPage(page)
    let electronic = new Electronicpage(page)
    let fashion = new fashionpage(page)
    let shipping = new shippingAddress(page)
    let billing = new billingAddress(page)
    let payment= new paymentMethod(page)
    let confirm = new confirmProduct(page)
    let track = new trackProduct(page)
    let logoutpage =  new logout(page)


     //! all data are fetch in json file and store inside a variable
    let url = testdata.url
     let name =testdata.name
     let email =testdata.email
    let contact = testdata.contactNo
     let pass = testdata.password
    let cpass = testdata.cpassword

    let billAddress = testdata.billingAddress
    let billstate =  testdata.billingstate
     let billcity =testdata.billingcity
     let billpincode =testdata.billingpincode
    

    let shipaddress = testdata.shippingAddress
     let shipstate =testdata.shippingstate
     let shipcity = testdata.shippingcity
    let shippincode =  testdata.shippingpincode
     
     

    //! launch the url
    await page.goto(url)

    //! home page
    //? login link
    await homepage.loginLink.click()

    //! create account page
    //? PASS THE NAME TO TEXTFIELD
    await signin.fullNameTF.fill(name)

    //? PASS THE EMAIL TO TF
    await signin.emailAddressTF.fill(email)

    //? fill the contact no
    await signin.contactNoTF.fill(contact)

    //? pass the password
    await signin.passwordTF.fill(pass)

    //? confirm password
    await signin.cpasswordTF.fill(cpass)

    //? click on signup button
    await signin.sinupButton.click()

    //! login with email and password
    //? pass the signin email
    await loginPage.emailTF.fill(email)

    //? pass the password
    await loginPage.passwordTF.fill(pass)

    //? click on login
    await loginPage.loginButton.click()

    //! books
    //? click on book link
    await books.booksLink.click()

    //? click on add to cart
    await books.bookAddToCart.click()

    //! electronic
    //? click on electronic link
    await electronic.electronicLink.click()

    //? click on add to cart
    await electronic.electroAddToCart.click()

    //! fashion
    //? click on fashion link
    await fashion.fashionLink.click()

    //? click on add to cart
    await fashion.fashionAddtocart.click()


    //! billing address:-
      //? fill the shipping address
    await billing.billingAddressTF.fill(billAddress)

    //? fill the state
    await billing.billingStateTF.fill(billstate)

    //? fill the city
    await billing.billingCityTF.fill(billcity)

    //? fill the pancode
    await billing.billingPincodeTF.fill(billpincode)

    //? click on update button
    await billing.billingUpdateButton.click()

    //! shipping address
    //? fill the shipping address
   await shipping.shippingAddressTF.fill(shipaddress)

    //? fill the state
    await shipping.shippingStateTF.fill(shipstate)

    //? fill the city
    await shipping.shippingCityTF.fill(shipcity)

    //? fill the pancode
    await shipping.shippingPincodeTF.fill(shippincode)

   //? click on update button
    await shipping.shipUpadteButton.click()

      //! billing address:-
      //? fill the shipping address
    await billing.billingAddressTF.fill(billAddress)

    //? fill the state
    await billing.billingStateTF.fill(billstate)

    //? fill the city
    await billing.billingCityTF.fill(billcity)

    //? fill the pancode
    await billing.billingPincodeTF.fill(billpincode)

    //? click on update button
    await billing.billingUpdateButton.click()

    //! confirm a Product
    //? click on proceed
    await confirm.proceedToCheckOUT.click()

    

    //! payment Method
    //? click on any payment option
    await payment.selectPaymentMethodRadio.click()

    //? submit 
    await payment.submitButton.click()

    //! track the product

    //? step 1: find all track link and count and use await it will return promise
    let count = await track.trackLinks.count()

    //? step 2:- Create the screenshots folder
    //? recursive:true=allows creation without an error if that folder already exists.
    fs.mkdirSync('screenshots',{recursive: true});

    //? step 3:-Start the for loop
    for(let i=0; i<count; i++){

        //?step 4:- Wait for the popup and click Track
        let[popup] =await Promise.all([
            page.waitForEvent('popup'),
            track.trackLinks.nth(i).click()
        ])  

        //? step 5:- Wait for the popup to load
        await popup.waitForLoadState('load');

        //? step 6: Take a screenshot 
        await popup.screenshot({path: `screenshots/track-order-${i + 1}.png`,fullPage: true});
        //? insert the iteration ${i + 1}-one by one
        
        //? step 7: Close popup before next iteration
        await popup.close();
    }

    //! log out
    //? click on logout link
     await logoutpage.logoutLink.click()

    


})