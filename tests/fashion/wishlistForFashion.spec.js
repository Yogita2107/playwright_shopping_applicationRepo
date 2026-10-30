import { test, expect } from '../../fixture/app.fixture';
import '../../config'; 

test.use({ storageState: 'playwright/.auth/user.json' });

test('Add fashion product to wishlist', async ({ page, fashionPage, wishListPage }) => {

    // Handle popup if adding to wishlist triggers one
    page.once('dialog', async (dialog) => {
        console.log('Popup message:', dialog.message());
        await dialog.accept();
    });

    // Use the environment variable for the base URL
    await page.goto(process.env.BASE_URL);

    // Navigate to Fashion and select a product
    await fashionPage.fashionLink.click();
    await fashionPage.fashionProductName.click();

    // Add product to wishlist
    await wishListPage.wishlistLink.click();

    // Verify product visibility
    const isProductVisible = await fashionPage.fashionProductName.first().isVisible();

    if (isProductVisible) {
        console.log('Pass: Fashion product is visible in wishlist');
    } else {
        console.log('Fail: Fashion product is not visible in wishlist');
    }
});