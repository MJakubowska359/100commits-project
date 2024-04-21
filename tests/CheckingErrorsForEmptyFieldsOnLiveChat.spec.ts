import { GeneralPage } from '../pages/generalPage';
import { expect, test } from '@playwright/test';

test.describe('Checking require fields on live chat', () => {
  let generalPage: GeneralPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
  });

  test('Should not be able to send message if field on live chat form are empty', async ({
    page,
  }) => {
    await page.goto('/');
    await page.waitForLoadState();
    await generalPage.clickAcceptCookiesOnPage();
    await expect(page.locator('#cookiescript_injected')).toBeHidden();
    await expect(page.locator('#chat-widget-minimized')).toBeVisible();
    await page
      .frameLocator('iframe[name="chat-widget-minimized"]')
      .getByLabel('Open LiveChat chat widget')
      .click();
    await expect(page.locator('#chat-widget-container')).toBeVisible();
    await page
      .frameLocator('iframe[name="chat-widget"]')
      .getByLabel('Your name')
      .press('Tab');
    await page
      .frameLocator('iframe[name="chat-widget"]')
      .getByLabel('E-mail')
      .press('Tab');
    await page
      .frameLocator('iframe[name="chat-widget"]')
      .getByLabel('Subject')
      .press('Tab');
    await page
      .frameLocator('iframe[name="chat-widget"]')
      .getByLabel('Message')
      .press('Tab');
    await expect(
      page
        .frameLocator('iframe[name="chat-widget"]')
        .getByText('Please fill in required')
        .first(),
    ).toBeVisible();
    await expect(
      page
        .frameLocator('iframe[name="chat-widget"]')
        .getByText('Please fill in required')
        .nth(1),
    ).toBeVisible();
    await expect(
      page
        .frameLocator('iframe[name="chat-widget"]')
        .getByText('Please fill in required')
        .nth(2),
    ).toBeVisible();
    await expect(
      page
        .frameLocator('iframe[name="chat-widget"]')
        .getByText('Please fill in required')
        .nth(3),
    ).toBeVisible();
  });
});
