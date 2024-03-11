import { test, expect } from '@playwright/test';
import { GeneralPage } from '../pages/generalPage';

test.describe('Choosing cookies', () => {
    let generalPage: GeneralPage;

    test.beforeEach(async ({ page }) => {
        generalPage = new GeneralPage(page);

        await page.goto('/');
    })

    test.only('Should be able to choose performance and functionality cookies', async ({ page }) => {
        await generalPage.choosePerformanceAndFunctionalityCookiesOnPage()
    });
});