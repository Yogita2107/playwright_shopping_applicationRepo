import { test, expect } from '../../fixture/app.fixture';
import '../../config'; 

test.use({
    storageState: 'playwright/.auth/user.json'
});

test('Update fashion quantity in cart', async ({ page, fashionPage, cartPage }) => {
    await page.goto(process.env.BASE_URL);

    await fashionPage.fashionLink.click();
    await fashionPage.fashionProduct.click();

    page.once('dialog', async (dialog) => {
        console.log('Popup message:', dialog.message());
        await dialog.accept();
    });

    await fashionPage.fashionAddToCart.click();

    await fashionPage.checkCart.click();
    await fashionPage.myCart.click();

    await expect(cartPage.cartQuantity).toBeVisible();
    await cartPage.cartQuantity.fill('2');
    await cartPage.updateCartButton.click();

    const quantity = await cartPage.cartQuantity.inputValue();

    if (quantity === '2') {
        console.log('Pass: Quantity updated to 2');
    } else {
        console.log(`Fail: Expected quantity 2, but got ${quantity}`);
    }

    const totalCount = await cartPage.grandTotal.count();
    console.log('Grand total elements:', totalCount);

    if (totalCount > 0) {
        console.log('Grand total:', await cartPage.grandTotal.first().innerText());
    } else {
        console.log('Grand total element was not found');
    }
});