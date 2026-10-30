import { test, expect } from '../../fixture/app.fixture';
import '../../config'; 

test.use({ storageState: 'playwright/.auth/user.json' });

test('Remove fashion from cart', async ({ page, fashionPage, cartPage }) => {
    await page.goto(process.env.BASE_URL);

    await fashionPage.fashionLink.click();
    await fashionPage.fashionProductName.click();

    page.once('dialog', async (dialog) => { await dialog.accept(); });

    await fashionPage.fashionAddToCart.click();
    await fashionPage.checkCart.click();
    await fashionPage.myCart.click();

    await expect(fashionPage.cartFashionProductName).toBeVisible();

    // Use cartPage for cart actions
    await cartPage.remove.click();
    await cartPage.updateCartButton.click();

    const isProductVisible = await fashionPage.cartFashionProductName.isVisible();

    if (isProductVisible) {
        console.log("Fail: Product is still visible in the cart");
    } else {
        console.log("Pass: Product removed successfully from the cart");
    }
});