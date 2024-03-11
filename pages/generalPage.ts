import { Page, expect } from "@playwright/test";

export class GeneralPage {
    constructor(private page: Page) { }

    // cookies
    acceptAllBtn = this.page.getByRole('button', { name: 'Accept all' })
    customizeBtn = this.page.getByRole('button', { name: 'Customize' })
    cookieDeclaration = this.page.getByText('Cookie declaration')
    aboutCookies = this.page.getByText('About cookies')
    showCookies = this.page.getByRole('button', { name: 'Show cookies' })
    hideCookies = this.page.getByRole('button', { name: 'Hide cookies', exact: true })
    // hideCookies = this.page.getByText('Hide cookies')
    switchBtn = this.page.getByRole('switch')
    declineAllBtn = this.page.getByRole('button', { name: 'Decline all' })
    saveAndCloseBtn = this.page.getByRole('button', { name: 'Save & Close', exact: true })

    async choosePerformanceAndFunctionalityCookiesOnPage() {
        await this.customizeBtn.click();
        await expect(this.page.getByText('This website uses cookies')).toBeVisible();
        await this.aboutCookies.click();
        await this.cookieDeclaration.click();
        await this.showCookies.nth(2).click();
        await this.hideCookies.click();
        await this.showCookies.nth(4).click();
        await this.hideCookies.click();
        await this.switchBtn.nth(1).click();
        await this.switchBtn.nth(3).click();
        await this.saveAndCloseBtn.click();
    }

    async acceptCookiesOnPage() {
        await this.acceptAllBtn.click();
    }

    async saveAndCloseCookiesOnPage() {
        await this.acceptAllBtn.click();
    }

    async declineCookiesOnPage() {
        await this.declineAllBtn.click();
    }
}