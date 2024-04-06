import { Page, expect } from '@playwright/test';

export class GeneralPage {
    constructor(private page: Page) {}

    // cookies
    acceptAllBtn = this.page.getByRole('button', { name: 'Accept all' });
    customizeBtn = this.page.getByRole('button', { name: 'Customize' });
    cookieDeclaration = this.page.getByText('Cookie declaration');
    aboutCookies = this.page.getByText('About cookies');
    showCookies = this.page.getByRole('button', { name: 'Show cookies' });
    hideCookies = this.page.getByRole('button', {
        name: 'Hide cookies',
        exact: true,
    });
    // hideCookies = this.page.getByText('Hide cookies')
    switchBtn = this.page.getByRole('switch');
    declineAllBtn = this.page.getByRole('button', {
        name: 'Decline all',
        exact: true,
    });
    saveAndCloseBtn = this.page.getByRole('button', {
        name: 'Save & Close',
        exact: true,
    });

    logoJustJoin = this.page.locator('#Warstwa_1')

    async choosePerformanceAndFunctionalityCookiesOnPage() {
        await this.aboutCookies.click();
        await this.cookieDeclaration.click();
        await this.showCookies.nth(2).click();
        await this.hideCookies.click();
        await this.showCookies.nth(4).click();
        await this.hideCookies.click();
        await this.switchBtn.nth(1).click();
        await this.switchBtn.nth(3).click();
    }

    async clickCustomizeCookiesOnPage() {
        await this.customizeBtn.click();
    }

    async clickAcceptCookiesOnPage() {
        await this.acceptAllBtn.click();
    }

    async saveSettingsOfCookiesAndClose() {
        await this.saveAndCloseBtn.click();
    }

    async clickDeclineCookies() {
        await this.declineAllBtn.click();
    }

    async clickLogoJustJoin() {
        await this.logoJustJoin.first().click();
    }

}
