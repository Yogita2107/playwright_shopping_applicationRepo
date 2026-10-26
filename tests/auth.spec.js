import { test as setup, expect } from '@playwright/test';
import login from '../PageObjectModel/login.page';
import data from '../testData/logindata.json';

setup('Login and save authentication state', async ({ page }) => {

    const loginPage = new login(page);
    const testdata = data[0];
    
   await page.goto(testdata.url);

    await loginPage.emailTF.fill(testdata.email);
    await loginPage.passwordTF.fill(testdata.password);
    await loginPage.loginButton.click();

    // confirm that login succeeded
    await expect(loginPage.welcomeText).toBeVisible();
    await expect(loginPage.logoutLink).toBeVisible();

    // Save the logged-in browser session
    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });

    console.log('Authentication state saved successfully!');
});
