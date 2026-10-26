import { test, expect } from '../../fixture/app.fixture';
import '../../config'; 

test.use({ storageState: 'playwright/.auth/user.json' });

// Inject both booksPage and cartPage
test('Remove book from cart', async ({ page, booksPage, cartPage }) => {
    
    // Use environment variable for URL
    await page.goto(process.env.BASE_URL);

    // Book specific actions
    await booksPage.booksLink.click();
    await booksPage.bookProduct.click();

    page.once('dialog', async (dialog) => {
        await dialog.accept();
    });

    await booksPage.bookAddToCart.click();
    
    await booksPage.checkCart.click();
    await booksPage.myCart.click();

    // Verify selected book is present
    await expect(booksPage.cartProductName).toBeVisible();

    // 1. Remove the product using the new Cart POM!
    await cartPage.remove.click();

    // 2. Click Update Shopping Cart using the new Cart POM!
    await cartPage.updateCartButton.click();

    const isProductVisible = await booksPage.cartProductName.isVisible();

    if (isProductVisible) {
        console.log("Fail: Product is still visible in the cart");
    } else {
        console.log("Pass: Product removed successfully from the cart");
    }

    console.log('Remove product action completed');
});