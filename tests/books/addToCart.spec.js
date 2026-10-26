
// import { test, expect } from '@playwright/test';
import { test, expect } from '../../fixture/app.fixture';
// import BooksPage from '../PageObjectModel/BooksPage.page';
// import { count } from 'node:console';
import '../../config';


test.use({
    storageState: 'playwright/.auth/user.json'
});

test('Select a book and add it to cart', async ({ page, homePage, booksPage }) => {
// Handle popup if Add to Cart triggers one
    page.once('dialog', async (dialog) => {
        console.log('Popup message:', dialog.message());
        await dialog.accept();
    })
    
    await page.goto(process.env.BASE_URL);

    // Verify logged-in session
    await expect(
        page.getByText('Logout', { exact: true })
    ).toBeVisible();

    // Click Books category
    await booksPage.booksLink.click();

    // Count products
    const productCount = await booksPage.allBooks.count();
    console.log('Total products:', productCount);
    expect(productCount).toBeGreaterThan(0);

    // Open the selected book
    await booksPage.bookProduct.click();


    // Verify Add to Cart is visible
    await expect(booksPage.bookAddToCart).toBeVisible();

    // Add book to cart
    await booksPage.bookAddToCart.click({count:2});

    await booksPage.checkCart.click()
    await booksPage.myCart.click()

    await expect(page).toHaveURL('http://49.249.29.4:8081/AppServer/Online_Shopping_Application/my-cart.php')

  // Verify selected book is present
    await expect(booksPage.cartProductName).toBeVisible();

    
const quantity = Number(await booksPage.cartQuantity.inputValue());

if (quantity >= 2) {
    console.log('Pass: Minimum quantity is 2');
} else {
    console.log('Fail: Quantity is less than 2');
}

    console.log('Book successfully added to cart!');
});
