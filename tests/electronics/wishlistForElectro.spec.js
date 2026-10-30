import { test, expect } from '../../fixture/app.fixture';
import '../../config'; 

test.use({ storageState: 'playwright/.auth/user.json' });

test('Add electronics product to wishlist', async ({ page, electronicsPage, wishListPage }) => {

    // Handle popup if adding to wishlist triggers one
    page.once('dialog', async (dialog) => {
        console.log('Popup message:', dialog.message());
        await dialog.accept();
    });

    // Use the environment variable for the base URL
    await page.goto(process.env.BASE_URL);

    // Navigate to Electronics and select a product
    await electronicsPage.electronicLink.click();
    await electronicsPage.ElectroCartProductName.click();

    // Add product to wishlist
    await wishListPage.wishlistLink.click();

    // Verify product visibility
    const isProductVisible = await electronicsPage.cartProductName.first().isVisible();

    if (isProductVisible) {
        console.log('Pass: Electronics product is visible in wishlist');
    } else {
        console.log('Fail: Electronics product is not visible in wishlist');
    }
});