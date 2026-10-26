import { test, expect } from '../../fixture/app.fixture';
import '../../config';

test.use({ storageState: 'playwright/.auth/user.json' });

test('Remove fashion from wishlist', async ({ page, wishListPage }) => {

    // Navigate directly to the base URL
    await page.goto(process.env.BASE_URL);
    
    await wishListPage.wishlistLink.click();

    // Count wishlist products before removing
    const beforeCount = await wishListPage.wishlistProduct.count();
    console.log('Products before removal:', beforeCount);

    // Check whether a product exists
    if (beforeCount > 0) {
        // Handle confirmation popup
        page.once('dialog', async (dialog) => {
            console.log('Confirmation:', dialog.message());
            await dialog.accept();
        });

        // Click the first remove icon
        await wishListPage.removeWishlist.first().click();

        // Wait for the page to update
        await page.waitForLoadState('domcontentloaded');

        // Count products after removal
        const afterCount = await wishListPage.wishlistProduct.count();
        console.log('Products after removal:', afterCount);

        if (afterCount < beforeCount) {
            console.log('Pass: Product removed from wishlist');
        } else {
            console.log('Fail: Product was not removed from wishlist');
        }
    } else {
        console.log('No products available in wishlist');
    }
});