import { test, expect } from '@playwright/test';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { PostAJobPage } from '../pages/postAJobPage';
import { FormsPage } from '../pages/formsPage';

test.describe('Checking post a job subpage', () => {
    let generalPage: GeneralPage;
    let headerPage: HeaderPage;
    let postAJobPage: PostAJobPage;
    let formsPage: FormsPage;

    test.beforeEach(async ({ page }) => {
        generalPage = new GeneralPage(page);
        headerPage = new HeaderPage(page);
        postAJobPage = new PostAJobPage(page);
        formsPage = new FormsPage(page);

        await page.goto('/');
        await generalPage.clickAcceptCookiesOnPage();
        await expect(page.locator('#cookiescript_injected')).not.toBeVisible();
    })

    test('Should be able to navigate and change language, currency on the page', async ({ page }) => {
        await headerPage.goToPostAJobSubPageOnTheMainPage();
        await expect(page.getByText('Do you need a job offers package? Get in touch with us.')).toBeVisible();
        await postAJobPage.changeLanguageAndCurrency();
        await expect(page.getByText('Potrzebujesz pakietu ogłoszeń? Skontaktuj się z nami.')).toBeVisible();
    });
});