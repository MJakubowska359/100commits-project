import { FormsPage } from '../pages/formsPage';
import { GeneralPage } from '../pages/generalPage';
import { expect, test } from '@playwright/test';

test.describe('Sending message on live chat', () => {
    let generalPage: GeneralPage;
    let formsPage: FormsPage;

    test.beforeEach(async ({ page }) => {
        generalPage = new GeneralPage(page);
        formsPage = new FormsPage(page);

        await page.goto('/');
        await page.waitForLoadState();
        await generalPage.clickAcceptCookiesOnPage();
        await expect(page.locator('#cookiescript_injected')).toBeHidden();
    });

    test('Should be able to send message on live chat', async ({ page }) => {
        await formsPage.fillFormToSendMessageOnLiveChat();
    });
});
