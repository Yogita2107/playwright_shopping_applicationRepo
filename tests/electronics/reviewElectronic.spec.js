import { test, expect } from '../../fixture/app.fixture';
import '../../config';

test.use({ storageState: 'playwright/.auth/user.json' });

test('Submit electronics product review', async ({ page, electronicsPage, reviewPage }) => {
    // Navigate using the base URL
    await page.goto(process.env.BASE_URL);

    await electronicsPage.electronicLink.click();
    await electronicsPage.electroProduct.click();
    
    await reviewPage.reviewButton.click();
    
    // Select 5-star ratings
    await reviewPage.qualityRating.nth(3).check();
    await reviewPage.priceRating.nth(2).check();
    await reviewPage.valueRating.nth(1).check();

    // Fill review details
    await reviewPage.yourNameTF.fill('Abhi');
    await reviewPage.summaryTF.fill('Good Product');
    await reviewPage.reviewTF.fill('The product quality is good.');

    // Submit review
    await reviewPage.submitReviewButton.click();

    console.log('Review form submitted');
});