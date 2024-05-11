import { GeneralPage } from '../src/pages/general.page';
import { expect, test } from '@playwright/test';

test.describe('Choosing cookies', () => {
  let generalPage: GeneralPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);

    await page.goto('/');
    await generalPage.clickCustomizeCookiesOnPage();
  });

  test('Should be able to choose performance and functionality cookies', async ({
    page,
  }) => {
    // Arrange
    const expectedCookieTitle = 'This website uses cookies';
    const cookieModal = '#cookiescript_injected';

    // Act
    await expect(page.getByText(expectedCookieTitle)).toBeVisible();
    await generalPage.choosePerformanceAndFunctionalityCookiesOnPage();
    await generalPage.saveSettingsOfCookiesAndClose();

    // Assert
    await expect(page.locator(cookieModal)).toBeHidden();
  });

  test('Should be able to decline all cookies', async ({ page }) => {
    // Arrange
    const cookieModal = '#cookiescript_injected';
    // Act
    await generalPage.clickDeclineCookies();

    // Assert
    await expect(page.locator(cookieModal)).toBeHidden();
  });
});
