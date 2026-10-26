
class OrderHistoryPage {
    constructor(page) {
        this.page = page;

        // Order history page
        this.orderHistoryTable = page.locator('//table');
        
        // Order details
        this.productName = page.locator('//table//tbody/tr/td[3]');
        this.quantity = page.locator('//table//tbody/tr/td[4]');
        this.pricePerUnit = page.locator('//table//tbody/tr/td[5]');
        this.shippingCharge = page.locator('//table//tbody/tr/td[6]');
        this.grandTotal = page.locator('//table//tbody/tr/td[7]');
        this.paymentMethod = page.locator('//table//tbody/tr/td[8]');
        
        // Track order
        this.trackOrder = page.getByText('Track', { exact: true });
    }
}

export default OrderHistoryPage;
