import { test, expect } from '../../fixture/app.fixture';
import '../../config';

import addressData from '../../testData/address.json';
import BillingAddress from '../../PageObjectModel/billingAddress.page';
import ShippingAddress from '../../PageObjectModel/shippindAddress.page';

test.use({ storageState: 'playwright/.auth/user.json' });

test('Update Shipping and Billing Address', async ({ page, fashionPage, cartPage }) => {

     // Initialize page objects
    const billingAddress = new BillingAddress(page);
    const shippingAddress = new ShippingAddress(page);

    // Read test data
    console.log('Imported address data:', addressData);


    const billAddress = addressData.billingAddress;
    const billState = addressData.billingState;
    const billCity = addressData.billingCity;
    const billPincode = String(addressData.billingPincode);

    const shipAddress = addressData.shippingAddress;
    const shipState = addressData.shippingState;
    const shipCity = addressData.shippingCity;
    const shipPincode = String(addressData.shippingPincode);

    // Validate data before filling fields
    expect(billAddress, 'billingAddress missing from JSON').toBeDefined();
    expect(billState, 'billingState missing from JSON').toBeDefined();
    expect(billCity, 'billingCity missing from JSON').toBeDefined();
    expect(shipAddress, 'shippingAddress missing from JSON').toBeDefined();
    expect(shipState, 'shippingState missing from JSON').toBeDefined();
    expect(shipCity, 'shippingCity missing from JSON').toBeDefined();


    await page.goto(process.env.BASE_URL);

    await fashionPage.fashionLink.click();
    await fashionPage.fashionProductName.click();

    page.once('dialog', async (dialog) => {
        await dialog.accept();
    });

    await fashionPage.fashionAddToCart.click();
    
    await cartPage.checkCart.click();
    await cartPage.myCart.click();

   
     // 1. Update Billing Address
    await billingAddress.billingAddressTF.fill(billAddress);
    await billingAddress.billingStateTF.fill(billState);
    await billingAddress.billingCityTF.fill(billCity);
    await billingAddress.billingPincodeTF.fill(billPincode);
    await billingAddress.billingUpdateButton.click();

    // 2. Update Shipping Address
    await shippingAddress.shippingAddressTF.fill(shipAddress);
    await shippingAddress.shippingStateTF.fill(shipState);
    await shippingAddress.shippingCityTF.fill(shipCity);
    await shippingAddress.shippingPincodeTF.fill(shipPincode);
    await shippingAddress.shipUpadteButton.click();

    // 3. Update Billing Address again
    await billingAddress.billingAddressTF.fill(billAddress);
    await billingAddress.billingStateTF.fill(billState);
    await billingAddress.billingCityTF.fill(billCity);
    await billingAddress.billingPincodeTF.fill(billPincode);
    await billingAddress.billingUpdateButton.click();

    // 4. Verify Shipping Address
    await expect(shippingAddress.shippingAddressTF).toHaveValue(shipAddress);
    console.log('Pass: Shipping Address updated');

    // 5. Verify Billing Address
    await expect(billingAddress.billingAddressTF).toHaveValue(billAddress);
    console.log('Pass: Billing Address updated');
});