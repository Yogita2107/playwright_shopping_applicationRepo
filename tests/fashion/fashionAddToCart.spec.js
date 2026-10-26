import { test, expect } from '../../fixture/app.fixture';
import '../../config'; 

test.use({
    storageState: 'playwright/.auth/user.json'
});

test('Select a fashion product and add it to cart', async ({ page, homePage, fashionPage }) => {
    
      // Handle JavaScript dialog if Add to Cart triggers one
    page.once('dialog', async (dialog) => {
        console.log('Popup message:', dialog.message());
        await dialog.accept();
    });
    await page.goto(process.env.BASE_URL);

    await expect(page.getByText('Logout', { exact: true })).toBeVisible();

    // Navigate using homePage, then interact using fashionPage
    await fashionPage.fashionLink.click()
    
    const productCount = await fashionPage.allProducts.count();
    expect(productCount).toBeGreaterThan(0);

    await fashionPage.fashionProduct.click();

    await expect(fashionPage.fashionAddToCart).toBeVisible();
    await fashionPage.fashionAddToCart.click();

    await fashionPage.checkCart.click();
    await fashionPage.myCart.click();

    await expect(page).toHaveURL(`${process.env.BASE_URL}my-cart.php`);
    await expect(fashionPage.fashionProductName).toBeVisible();
});