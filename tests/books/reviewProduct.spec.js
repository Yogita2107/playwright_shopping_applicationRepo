import { test, expect } from '../../fixture/app.fixture';
import '../../config';

test.use({ storageState: 'playwright/.auth/user.json' });

test('Submit book product review', async ({ page, booksPage, reviewPage }) => {
    // Navigate using the base URL
    await page.goto(process.env.BASE_URL);

    await booksPage.booksLink.click();
    await booksPage.bookProduct.click();
    
    await reviewPage.reviewButton.click();
    
    // Select 5-star ratings
    await reviewPage.qualityRating.nth(4).check();
    await reviewPage.priceRating.nth(4).check();
    await reviewPage.valueRating.nth(4).check();

    // Fill review details
    await reviewPage.yourNameTF.fill('Yogita');
    await reviewPage.summaryTF.fill('Good Product');
    await reviewPage.reviewTF.fill('The product quality is good.');

    // Submit review
    await reviewPage.submitReviewButton.click();

    console.log('Review form submitted');
});


