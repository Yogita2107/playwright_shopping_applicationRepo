import { test as base, expect as baseExpect } from '@playwright/test';
import login from '../PageObjectModel/login.page';
import HomePage from '../PageObjectModel/homepage.page';
import BooksPage from '../PageObjectModel/BooksPage.page';
import ElectronicsPage from '../PageObjectModel/Electronicspage.page';
import reviewProduct from '../PageObjectModel/reviewProduct.page';
import cartPage from '../PageObjectModel/cartPage.page.js';
import FashionPage from '../PageObjectModel/fashionpage.page'
import wishList from '../PageObjectModel/wishList.page.js'
import confirmProduct from '../PageObjectModel/ConfirmProduct.page.js'
import paymentMethod from '../PageObjectModel/paymentMethod.page.js'
// import dotenv from "dotenv"

// dotenv.config();

   export const test = base.extend({
//     login : async({page}, use) =>{
//         const openApp = async()=>{
//              await page.goto(process.env.BASE_URL)
//         };
//        await use(openApp)
//     },

    loginPage: async ({ page }, use) => { await use(new login(page)); },
    homePage: async ({ page }, use) => { await use(new HomePage(page)); },
    booksPage: async ({ page }, use) => { await use(new BooksPage(page)); },
    electronicsPage: async ({ page }, use) => { await use(new ElectronicsPage(page)); },
    fashionPage: async ({ page }, use) => { await use(new FashionPage(page)); },
    cartPage: async ({ page }, use) => { await use(new cartPage(page)); },
    wishListPage: async ({ page }, use) => { await use(new wishList(page)); },
    reviewPage: async ({ page }, use) => { await use(new reviewProduct(page)); },
    confirmProductPage : async ({ page }, use) => { await use(new confirmProduct(page));},
    paymentMethodPage :  async({page }, use) =>{await use(new paymentMethod(page));}
});

export const expect = baseExpect;


