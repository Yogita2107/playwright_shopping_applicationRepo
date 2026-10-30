import { test, expect } from '../../fixture/app.fixture';
import '../../config'; 

test.use({ storageState: 'playwright/.auth/user.json' });

test('Remove electronics from cart', async ({ page, electronicsPage, cartPage }) => {
    await page.goto(process.env.BASE_URL);

    await electronicsPage.electronicLink.click();
    await electronicsPage.ElectroCartProductName.click();

    page.once('dialog', async (dialog) => { await dialog.accept(); });

    await electronicsPage.electroAddToCart.click();
    await electronicsPage.checkCart.click();
    await electronicsPage.myCart.click();

    await expect(electronicsPage.cartProductName).toBeVisible();

    // Use cartPage for cart actions
    await cartPage.remove.click();
    await cartPage.updateCartButton.click();

    const isProductVisible = await electronicsPage.cartProductName.isVisible();

    if (isProductVisible) {
        console.log("Fail: Product is still visible in the cart");
    } else {
        console.log("Pass: Product removed successfully from the cart");
    }
});