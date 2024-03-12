import { test, expect } from '@playwright/test';
import { GeneralPage } from '../pages/generalPage';
import { FormsPage } from '../pages/formsPage';

test.describe('Sending message on live chat', () => {
    let generalPage: GeneralPage;
    let formsPage: FormsPage;

    test.beforeEach(async ({ page }) => {
        generalPage = new GeneralPage(page)
        formsPage = new FormsPage(page);

        await page.goto('/');
        await generalPage.clickAcceptCookiesOnPage();
        await expect(page.locator('#cookiescript_injected')).not.toBeVisible();
    })

    test('Should be able to send message on live chat', async ({ page }) => {
        await formsPage.fillFormToSendMessageOnLiveChat()
    });
});