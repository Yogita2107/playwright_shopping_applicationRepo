import { test, expect } from '../../fixture/app.fixture';
import '../../config'; 

test.use({ storageState: 'playwright/.auth/user.json' });

test('Add book to wishlist', async ({ page, booksPage, wishListPage }) => {

    // Handle popup if Add to Cart triggers one
    page.once('dialog', async (dialog) => {
        console.log('Popup message:', dialog.message());
        await dialog.accept();
    });

    // Use the environment variable for the base URL
    await page.goto(process.env.BASE_URL);

    await booksPage.booksLink.click();
    await booksPage.bookProduct.click();

    // Add book to wishlist
    await wishListPage.wishlist.click();

    // Verify product visibility
    const isProductVisible = await booksPage.cartProductName.first().isVisible();

    if (isProductVisible) {
        console.log('Pass: Book is visible in wishlist');
    } else {
        console.log('Fail: Book is not visible in wishlist');
    }
});