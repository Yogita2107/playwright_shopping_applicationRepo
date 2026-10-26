
import { test, expect } from '@playwright/test';
import BooksPage from '../../PageObjectModel/BooksPage.page';
import paymentMethod from '../../PageObjectModel/paymentMethod.page'
import confirmProduct from '../../PageObjectModel/ConfirmProduct.page';

test.use({ storageState: 'playwright/.auth/user.json' });

test('Checkout and select COD payment', async ({ page, booksPage, paymentMethodPage, confirmProductPage }) => {
    
    await page.goto(process.env.BASE_URL);
    

    // Add a book to cart
    await booksPage.booksLink.click();
    await booksPage.bookProduct.click();

    page.once('dialog', async (dialog) => {
        await dialog.accept();
    });

    await books.bookAddToCart.click();
    
    await booksPage.checkCart.click()
    await booksPage.myCart.click()
    

    // Proceed to checkout
    await confirmProductPage.proceedToCheckOUT.click();

    // Verify payment page
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

if (page.url().includes('http://49.249.29.4:8081/AppServer/Online_Shopping_Application/order-history.php')) {
    console.log('Pass: After payment, Order History page opened');
} else {
    console.log('Fail: Order History page did not open');
}
});
