import { test, expect } from '@playwright/test';
import { FooterPage } from '../pages/footerPage';

test.describe('Checking active social media buttons', () => {
    let footerPage: FooterPage;

    test.beforeEach(async ({ page }) => {
        footerPage = new FooterPage(page);

        await page.goto('/');
        await page.getByRole('button', { name: 'Yes, I accept Cookies' }).click()
    })

    test('Should be able to click social media buttons from the footer', async ({ page }) => {
        await page.getByRole('link', { name: 'Ruby' }).click();
        await page.getByRole('combobox').fill('San Francisco');
        await page.getByRole('combobox').press('Enter');
        await expect(page.getByText('Follow us on social media')).toBeVisible();
        await footerPage.clickFacebookIcon();
        await footerPage.clickInstagramIcon();
        await footerPage.clickLinkedinIcon();
        await footerPage.clickYoutubeIcon();
    });

    test('Should be able to click social media buttons from more filters option', async ({ page }) => {
        await page.getByTestId('MenuRoundedIcon').click();
        await expect(page.getByRole('heading', {name: 'Menu'})).toBeVisible();
        await expect(page.getByText('Follow us on social media')).toBeVisible();
        const page1Promise = page.waitForEvent('popup');
        await page.locator('.side_menu_facebook_link').click()
        const page1 = await page1Promise;
        const page2Promise = page.waitForEvent('popup');
        await page.locator('.side_menu_instagram_link').click()
        const page2 = await page2Promise;
        const page3Promise = page.waitForEvent('popup');
        await page.locator('.side_menu_linkedin_link').click()
        const page3 = await page3Promise;
        const page4Promise = page.waitForEvent('popup');
        await page.locator('.side_menu_youtube_link').click()
        const page4 = await page4Promise;
    });

    test('Should be able to click social media buttons from the "About us" page', async ({ page }) => {
        await page.getByRole('link', { name: 'Ruby' }).click();
        await page.getByRole('combobox').fill('San Francisco');
        await page.getByRole('combobox').press('Enter');
        await expect(page.getByRole('heading', {name: 'About Us'})).toBeVisible();
        await page.locator('.footer_about_us_link').click()
        const page1Promise = page.waitForEvent('popup');
        await page.locator('#about').getByRole('button').first().click();
        const page1 = await page1Promise;
        const page2Promise = page.waitForEvent('popup');
        await page.locator('#about').getByRole('button').nth(1).click();
        const page2 = await page2Promise;
        const page3Promise = page.waitForEvent('popup');
        await page.locator('#about').getByRole('button').nth(2).click();
        const page3 = await page3Promise;
        const page4Promise = page.waitForEvent('popup');
        await page.locator('#about').getByRole('button').nth(3).click();
        const page4 = await page4Promise;
        const page5Promise = page.waitForEvent('popup');
        await page.locator('#about').getByRole('button').nth(4).click();
        const page5 = await page5Promise;
    });
});