import { Page } from "@playwright/test";

export class PostAJobPage {
    constructor(private page: Page) { }

    languageAndCurrency = this.page.locator('#select-pricing-language')
    polishLanguage = this.page.getByRole('option', {name: 'Polski, PLN'})
    writeToUs = this.page.getByRole('button', {name: 'Napisz do nas'})

    async changeLanguageAndCurrency() {
        await this.languageAndCurrency.click();
        await this.polishLanguage.click();
    }
}