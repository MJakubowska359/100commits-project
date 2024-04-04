import { FormsPage } from '../pages/formsPage';
import { GeneralPage } from '../pages/generalPage';
import { HeaderPage } from '../pages/headerPage';
import { PostAJobPage } from '../pages/postAJobPage';
import { expect, test } from '@playwright/test';

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
        await expect(page.locator('#cookiescript_injected')).toBeHidden();
    });

    test('Should be able to navigate and change language, currency on the page', async ({
        page,
    }) => {
        await headerPage.goToPostAJobSubPageOnTheMainPage();
        await expect(
            page.getByText(
                'Do you need a job offers package? Get in touch with us.',
            ),
        ).toBeVisible();
        await postAJobPage.changeLanguageAndCurrency();
        await expect(
            page.getByText(
                'Potrzebujesz pakietu ogłoszeń? Skontaktuj się z nami.',
            ),
        ).toBeVisible();
        const page1Promise = page.waitForEvent('popup');
        await page
            .getByRole('link', {
                name: 'GENERAL TERMS AND CONDITIONS OF SERVICES',
            })
            .click();
        const page1 = await page1Promise;
    });

    test('Should be able to send request about contact to add advertisement of job on the page', async ({
        page,
    }) => {
        await headerPage.goToPostAJobSubPageOnTheMainPage();
        await postAJobPage.clickGetInTouchButton();
        await expect(
            page.getByText('Do you need a job offers package?'),
        ).toBeVisible();
        await formsPage.fillFormToLearnDetailsAdvertisementsOfJobs();
    });

    // test('Should be able to post a job', async ({ page }) => {
    //     await headerPage.goToPostAJobSubPageOnTheMainPage();
    //     await postAJobPage.clickFirstPostAJobButton();
    //     await expect(page).toHaveURL('https://justjoin.it/offer-create/06eef5b7-a0a1-482d-9953-38a551082fc0/form?t=06eef5b7-a0a1-482d-9953-38a551082fc0');
    //     });
});
