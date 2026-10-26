import { test, expect } from '../../fixture/app.fixture';
import '../../config';

import testdata from '../../testData/address.json';
import billingAddress from '../../PageObjectModel/billingAddress.page'
import shippingAddress from '../../PageObjectModel/shippindAddress.page'


test.use({ storageState: 'playwright/.auth/user.json' });

test('Update Shipping and Billing Address', async ({ page, booksPage, cartPage }) => {

 

    let billAddress = testdata.billingAddress;
    let billstate = testdata.billingstate;
    let billcity = testdata.billingcity;
    let billpincode = testdata.billingpincode;

    let shipaddress = testdata.shippingAddress;
    let shipstate = testdata.shippingstate;
    let shipcity = testdata.shippingcity;
    let shippincode = testdata.shippingpincode;

    await page.goto(process.env.BASE_URL);

    // Open Books
    await booksPage.booksLink.click();

    // Select a book
    await booksPage.bookProduct.click();

    // Handle confirmation popup
    page.once('dialog', async (dialog) => {
        await dialog.accept();
    });

    // Add to cart
    await booksPage.bookAddToCart.click();
    
    // Navigate to cart using cartPage
    await cartPage.checkCart.click();
    await cartPage.myCart.click();

    // 1. Update Billing Address
    await billing.billingAddressTF.fill(billAddress);
    await billing.billingStateTF.fill(billstate);
    await billing.billingCityTF.fill(billcity);
    await billing.billingPincodeTF.fill(billpincode);
    await billing.billingUpdateButton.click();

    // 2. Update Shipping Address
    await shipping.shippingAddressTF.fill(shipaddress);
    await shipping.shippingStateTF.fill(shipstate);
    await shipping.shippingCityTF.fill(shipcity);
    await shipping.shippingPincodeTF.fill(shippincode);
    await shipping.shipUpadteButton.click();

    // 3. Update Billing Address again to test the application bug
    await billing.billingAddressTF.fill(billAddress);
    await billing.billingStateTF.fill(billstate);
    await billing.billingCityTF.fill(billcity);
    await billing.billingPincodeTF.fill(billpincode);
    await billing.billingUpdateButton.click();

    // 4. Verify Shipping Address
    const actualShippingAddress = await shipping.shippingAddressTF.inputValue();
    console.log(actualShippingAddress);
    
    if (actualShippingAddress === shipaddress) {
        console.log('Pass: Shipping Address updated');
    } else {
        console.log('Fail: Shipping Address not updated');
    }

    // 5. Verify Billing Address
    const actualBillingAddress = await billing.billingAddressTF.inputValue();
    console.log(actualBillingAddress);
        
    if (actualBillingAddress === billAddress) {
        console.log('Pass: Billing Address updated');
    } else {
        console.log('Fail: Billing Address not updated');
    }
});