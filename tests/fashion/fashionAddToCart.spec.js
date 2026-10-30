import { test, expect } from '../../fixture/app.fixture';
import '../../config';

test.use({
    storageState: 'playwright/.auth/user.json'
});

test('Select a fashion product and add it to cart', async ({
    page,
    fashionPage,
    cartPage
}) => {

    await page.goto(process.env.BASE_URL);

    await expect(
        page.getByText('Logout', { exact: true })
    ).toBeVisible();

    await fashionPage.fashionLink.click();

    // await fashionPage.fashionLink.click();

await page.waitForLoadState('domcontentloaded');

console.log('Product count:', await fashionPage.allProducts.count());

    const productCount = await fashionPage.allProducts.count();

    expect(productCount).toBeGreaterThan(0);

    await fashionPage.fashionProductName.click();

    await expect(fashionPage.fashionAddToCart).toBeVisible();

    page.once('dialog', async (dialog) => {
        console.log('Popup message:', dialog.message());
        await dialog.accept();
    });

    await fashionPage.fashionAddToCart.click();

    await cartPage.checkCart.click();

    await cartPage.myCart.click();

    await expect(page).toHaveURL(
        `${process.env.BASE_URL}my-cart.php`
    );

    await expect(fashionPage.cartFashionProductName).toBeVisible();

    console.log('Pass: Fashion product added successfully to cart');

});