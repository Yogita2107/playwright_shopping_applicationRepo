import { test, expect } from '../../fixture/app.fixture';
import '../../config';

test.use({
    storageState: 'playwright/.auth/user.json'
});

test('Select an electronics product and add it to cart', async ({page,electronicsPage}) => {

    // Handle JavaScript dialog if Add to Cart triggers one
    page.once('dialog', async (dialog) => {
        console.log('Popup message:', dialog.message());
        await dialog.accept();
    });

    await page.goto(process.env.BASE_URL);

    await expect(
        page.getByText('Logout', { exact: true })
    ).toBeVisible();

    // Click Electronics category
    await electronicsPage.electronicLink.click();

    // Count all product image containers
    const productCount = await electronicsPage.allProducts.count();
    console.log('Total products:', productCount);

    expect(productCount).toBeGreaterThan(0);

    // Open the selected electronics product
    await electronicsPage.electroProduct.click();

    // Verify Add to Cart is visible
    await expect(electronicsPage.electroAddToCart).toBeVisible();

    // Add product to cart
    await electronicsPage.electroAddToCart.click();

    // Open cart
    await electronicsPage.checkCart.click();
    await electronicsPage.myCart.click();

    //? verify url
    console.log(page.url());
    
   await expect(page).toHaveURL(
    `${process.env.BASE_URL}my-cart.php`
);

    // Verify selected electronics product is in the cart
    await expect(
        electronicsPage.ElectroCartProductName
    ).toBeVisible();
});
