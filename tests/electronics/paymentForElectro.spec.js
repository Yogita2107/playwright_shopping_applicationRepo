import { test, expect } from '../../fixture/app.fixture';
import '../../config'; 

test.use({ storageState: 'playwright/.auth/user.json' });

test('Checkout and select COD payment for Electronics', async ({ page, electronicsPage, paymentMethodPage, confirmProductPage }) => {
    
    // 1. Use the environment variable for the base URL
    await page.goto(process.env.BASE_URL);

    // 2. Add an electronics product to cart using the injected electronicsPage fixture
    await electronicsPage.electronicLink.click();
    await electronicsPage.ElectroCartProductName.click();

    page.once('dialog', async (dialog) => {
        await dialog.accept();
    });

    await electronicsPage.electroAddToCart.click();
    
    await electronicsPage.checkCart.click();
    await electronicsPage.myCart.click();
    
    // 3. Proceed to checkout using the injected confirmProductPage fixture
    await confirmProductPage.proceedToCheckOUT.click();

    // 4. Verify payment page using the injected paymentMethodPage fixture
    await expect(paymentMethodPage.paymentHeading).toBeVisible();

    // Select COD
    await paymentMethodPage.codRadio.check();

    if (await paymentMethodPage.codRadio.isChecked()) {
        console.log('Pass: COD payment selected');
    } else {
        console.log('Fail: COD payment not selected');
    }

    // Submit payment method
    await paymentMethodPage.submitButton.click();

    console.log('Payment method submitted');

    await page.waitForURL('**/order-history.php');

    // 5. Use the environment variable for dynamic URL validation
    if (page.url().includes(`${process.env.BASE_URL}order-history.php`)) {
        console.log('Pass: After payment, Order History page opened');
    } else {
        console.log('Fail: Order History page did not open');
    }
});