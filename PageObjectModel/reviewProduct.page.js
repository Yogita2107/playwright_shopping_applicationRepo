
class reviewProduct {
    constructor(page) {
        this.reviewButton = page.locator('//a[text()="REVIEW"]')
        // Rating options: Quality, Price, Value
        this.qualityRating = page.locator('//input[@name="quality"]');
        this.priceRating = page.locator('//input[@name="price"]');
        this.valueRating = page.locator('//input[@name="value"]');

        // Review form fields
        this.yourNameTF = page.locator('//input[@id="exampleInputName"]');
        this.summaryTF = page.locator('//input[@id="exampleInputSummary"]');
        this.reviewTF = page.locator('//textarea[@id="exampleInputReview"]');

        // Submit review
        this.submitReviewButton =page.locator('//button[text()="SUBMIT REVIEW"]')
    }
}

export default reviewProduct;
