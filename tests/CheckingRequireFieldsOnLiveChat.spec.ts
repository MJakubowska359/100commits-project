import { test, expect } from '@playwright/test';
import { FormsPage } from '../pages/formsPage';

test.describe('Checking require fields on live chat', () => {
    let formsPage: FormsPage;

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);
    })

    test.only('Should not be able to send message if field on live chat formm are empty', async ({ page }) => {
        await page.goto('/');
        await page.waitForTimeout(3000)
        await page.locator('#chat-widget-container').click();
        await expect(page.getByRole('button', {name: 'submit'})).toBeVisible();
        await formsPage.clickEveryFieldAndstayItEmpty();
        await expect(page.getByRole('alert', {name: 'Please fill in required fields.'}).first()).toBeVisible();
        await expect(page.getByRole('alert', {name: 'Please fill in required fields.'}).nth(1)).toBeVisible();
        await expect(page.getByRole('alert', {name: 'Please fill in required fields.'}).nth(2)).toBeVisible();  
        await expect(page.getByRole('alert', {name: 'Please fill in required fields.'}).nth(3)).toBeVisible();
      });
});