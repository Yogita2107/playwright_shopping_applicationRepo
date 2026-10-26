
import { test, expect } from '@playwright/test';
import trackProduct from '../PageObjectModel/trackProducts.page';
import path from 'node:path';
import fs from 'node:fs';

test.use({ storageState: 'playwright/.auth/user.json' });

test('Track all orders and take screenshots', async ({ page }) => {
    let track = new trackProduct(page);

    await page.goto(
        'http://49.249.29.4:8081/AppServer/Online_Shopping_Application/'
    );

    // Navigate through the UI to Order History
    await page.locator('//a[text()="My Account"]').click();
  
    await page.locator('//a[text()="Order History"]').click()

    const totalLinks = await track.trackLinks.count();
    console.log('Total Track links:', totalLinks);  

    // Create screenshots folder if it does not exist
    fs.mkdirSync('screenshots', { recursive: true });

    for (let i = 0; i < totalLinks; i++) {
        const [popup] = await Promise.all([
            page.waitForEvent('popup'),
            track.trackLinks.nth(i).click()
        ]);

        await popup.waitForLoadState('domcontentloaded');

        // Wait for tracking details to appear
        await expect(
            popup.getByText('Order Tracking Details', { exact: false })
        ).toBeVisible();

        // Take screenshot of the tracking window
        await popup.screenshot({
            path: path.join('screenshots', `trackOrder_${i + 1}.png`)
        });

        console.log(`Screenshot saved for order ${i + 1}`);

        // Close tracking window
        await popup.close();
    }
});
