import { test, expect } from '../../fixture/app.fixture';
import '../../config';


test.use({
    storageState: 'playwright/.auth/user.json'
});


test('Update book quantity in cart', async ({ page, booksPage, cartPage}) => {

    await page.goto(process.env.BASE_URL);

    // Open Books category
    await booksPage.booksLink.click();

    // Open the selected book
    await booksPage.bookProduct.click();

    // Handle popup if Add to Cart triggers one
    page.once('dialog', async (dialog) => {
        console.log('Popup message:', dialog.message());
        await dialog.accept();
    });

    // Add book to cart
    await booksPage.bookAddToCart.click();

    await booksPage.checkCart.click()
    await booksPage.myCart.click()

    // Verify cart quantity field is visible
    await expect(cartPage.cartQuantity).toBeVisible();

    // Change quantity to 2
    await cartPage.cartQuantity.fill('2');

    // Click Update Shopping Cart
    await cartPage.updateCartButton.click();

    // Verify quantity is updated
    const quantity = await cartPage.cartQuantity.inputValue();

    if (quantity === '2') {
        console.log('Pass: Quantity updated to 2');
    } else {
        console.log(`Fail: Expected quantity 2, but got ${quantity}`);
    }

    
// Print grand total
const totalCount = await cartPage.grandTotal.count();

console.log('Grand total elements:', totalCount);

if (totalCount > 0) {
    console.log('Grand total:', await cartPage.grandTotal.first().innerText());
} else {
    console.log('Grand total element was not found');
}


});
