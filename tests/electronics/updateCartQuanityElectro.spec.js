import { test, expect } from '../../fixture/app.fixture';
import '../../config'; 

test.use({
    storageState: 'playwright/.auth/user.json'
});

test('Update electronics quantity in cart', async ({ page, electronicsPage, cartPage}) => {
    await page.goto(process.env.BASE_URL);

    await electronicsPage.electronicsLink.click();
    await electronicsPage.electronicsProduct.click();

    page.once('dialog', async (dialog) => {
        console.log('Popup message:', dialog.message());
        await dialog.accept();
    });

    await electronicsPage.electronicsAddToCart.click();

    await electronicsPage.checkCart.click();
    await electronicsPage.myCart.click();

    await expect(electronicsPage.cartQuantity).toBeVisible();
    await electronicsPage.cartQuantity.fill('2');
    await electronicsPage.updateCartButton.click();

    const quantity = await electronicsPage.cartQuantity.inputValue();

    if (quantity === '2') {
        console.log('Pass: Quantity updated to 2');
    } else {
        console.log(`Fail: Expected quantity 2, but got ${quantity}`);
    }

    const totalCount = await electronicsPage.grandTotal.count();
    console.log('Grand total elements:', totalCount);

    if (totalCount > 0) {
        console.log('Grand total:', await electronicsPage.grandTotal.first().innerText());
    } else {
        console.log('Grand total element was not found');
    }
});