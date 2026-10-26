import { test, expect } from '../../fixture/app.fixture';
import '../../config';
import shippingAddress from '../../PageObjectModel/shippindAddress.page';
import billingAddress from '../../PageObjectModel/billingAddress.page';
import testdata from '../../testData/address.json';

test.use({ storageState: 'playwright/.auth/user.json' });

test('Update Shipping and Billing Address', async ({ page, fashionPage, cartPage }) => {

    let shipping = new shippingAddress(page);
    let billing = new billingAddress(page);

    let billAddress = testdata.billingAddress;
    let billstate = testdata.billingstate;
    let billcity = testdata.billingcity;
    let billpincode = testdata.billingpincode;

    let shipaddress = testdata.shippingAddress;
    let shipstate = testdata.shippingstate;
    let shipcity = testdata.shippingcity;
    let shippincode = testdata.shippingpincode;

    await page.goto(process.env.BASE_URL);

    await fashionPage.fashionLink.click();
    await fashionPage.fashionProduct.click();

    page.once('dialog', async (dialog) => {
        await dialog.accept();
    });

    await fashionPage.fashionAddToCart.click();
    
    await cartPage.checkCart.click();
    await cartPage.myCart.click();

    await billing.billingAddressTF.fill(billAddress);
    await billing.billingStateTF.fill(billstate);
    await billing.billingCityTF.fill(billcity);
    await billing.billingPincodeTF.fill(billpincode);
    await billing.billingUpdateButton.click();

    await shipping.shippingAddressTF.fill(shipaddress);
    await shipping.shippingStateTF.fill(shipstate);
    await shipping.shippingCityTF.fill(shipcity);
    await shipping.shippingPincodeTF.fill(shippincode);
    await shipping.shipUpadteButton.click();

    await billing.billingAddressTF.fill(billAddress);
    await billing.billingStateTF.fill(billstate);
    await billing.billingCityTF.fill(billcity);
    await billing.billingPincodeTF.fill(billpincode);
    await billing.billingUpdateButton.click();

    const actualShippingAddress = await shipping.shippingAddressTF.inputValue();
    console.log(actualShippingAddress);
    
    if (actualShippingAddress === shipaddress) {
        console.log('Pass: Shipping Address updated');
    } else {
        console.log('Fail: Shipping Address not updated');
    }

    const actualBillingAddress = await billing.billingAddressTF.inputValue();
    console.log(actualBillingAddress);
        
    if (actualBillingAddress === billAddress) {
        console.log('Pass: Billing Address updated');
    } else {
        console.log('Fail: Billing Address not updated');
    }
});