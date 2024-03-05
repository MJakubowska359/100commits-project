import { test, expect } from '@playwright/test';
import { FormsPage } from '../pages/formsPage';

test.describe('Sending message on live chat', () => {
    let formsPage: FormsPage;

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);

        await page.goto('/');
        await page.getByRole('button', { name: 'ACCEPT ALL' }).click()
    })

    test('Should be able to send message on live chat', async ({ page }) => {
        await formsPage.fillFormToSendMessageOnLiveChat()
    });
});