import { FormsPage } from '../pages/formsPage';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { expect, test } from '@playwright/test';

test.describe('Sending message on live chat', () => {
    let generalPage: GeneralPage;
    let headerPage: HeaderPage;
    let formsPage: FormsPage;

    test.beforeEach(async ({ page }) => {
        generalPage = new GeneralPage(page);
        headerPage = new HeaderPage(page);
        formsPage = new FormsPage(page);

        await page.goto('/');
        await generalPage.clickAcceptCookiesOnPage();
        await expect(page.locator('#cookiescript_injected')).toBeHidden();
    });

    test.only('Should be able to send message on live chat', async ({ page }) => {
        await headerPage.openMenuAndLiveChat();
        await formsPage.fillFormToSendMessageOnLiveChat();
    });
});
