import { Page, expect } from "@playwright/test";

export class HeaderPage {
    constructor(private page: Page) { }

    // products
    jobOffersBtn = this.page.getByRole('link', { name: 'Job offers' });
    topCompaniesBtn = this.page.getByRole('link', { name: 'Top Companies' });
    geekBtn = this.page.getByRole('link', { name: 'Geek' });
    postAJobBtn = this.page.getByRole('link', { name: 'Post a job' });
    signInBtn = this.page.getByRole('button', { name: 'Sign in' });
    starOfSubscribe = this.page.getByRole('button', { name: 'Subscribe' });
    defaultCurrencyPln = this.page.getByRole('banner').getByRole('button').nth(3);
    defaultCurrencyEur = this.page.getByRole('banner').getByRole('button').nth(3);
    defaultCurrencyUsd = this.page.getByRole('banner').getByRole('button').nth(3);
    defaultCurrencyGbp = this.page.getByRole('banner').getByRole('button').nth(3);
    defaultCurrencyChf = this.page.getByRole('banner').getByRole('button').nth(3);
    defaultCurrencyDef = this.page.getByRole('banner').getByRole('button').nth(3);
    plnCurrency = this.page.getByRole('button', { name: 'PLN' });
    eurCurrency = this.page.getByRole('button', { name: 'EUR' });
    usdCurrency = this.page.getByRole('button', { name: 'USD' });
    gbpCurrency = this.page.getByRole('button', { name: 'GBP' });
    chfCurrency = this.page.getByRole('button', { name: 'CHF' });
    defCurrency = this.page.getByRole('button', { name: 'DEF' });

    // menu
    menuBtn = this.page.locator('button[name="sidebar-open"]');
    pressRoomBtn = this.page.getByRole('link', { name: 'Press Room' });
    salaryReportBtn = this.page.getByRole('link', { name: 'IT Salary Report' });
    careerBtn = this.page.getByRole('link', { name: 'Career' });
    helpBtn = this.page.getByRole('button', { name: 'Help' });
    termsBtn = this.page.getByRole('link', { name: 'Terms' });
    signInAsCandidate = this.page.getByRole('button', { name: "Sign in to Candidate's profile" });
    signInAsCompany = this.page.getByRole('button', { name: "Sign in to Employer's panel" });

    async goToSignInPageForCandidateFromPageHeader() {
        await this.signInBtn.click();
        await this.signInAsCandidate.click();
    }

    async goToSignInPageForCandidateFromMenuOnMainPage() {
        await this.menuBtn.click();
        await this.signInAsCandidate.click();
    }

    async goToSignInPageForCompanyFromPageHeader() {
        await this.signInBtn.click();
        await this.signInAsCompany.click();
    }

    async goToSignInPageForCompanyFromMenuOnMainPage() {
        await this.menuBtn.click();
        await this.signInAsCompany.click();
    }

    async chooseItSalaryReportFromMenu() {
        await this.menuBtn.click();
        await this.salaryReportBtn.click();
    }
    // await page.locator('button[name="sidebar-open"]').click();

    async clickTopCompaniesButtonOnTheMainPage() {
        await this.topCompaniesBtn.click();
    }

    async goToPostAJobSubPageOnTheMainPage() {
        await this.postAJobBtn.click();
    }

    async changeCurrencyFromPlnToEurOnMainPage() {
        await this.defaultCurrencyPln.click();
        await this.eurCurrency.click();
        // await this.page.waitForTimeout(3000);
    }

    async changeCurrencyFromEurToUsdOnMainPage() {
        await this.defaultCurrencyEur.click();
        await this.usdCurrency.click();
        // await this.page.waitForTimeout(3000);
    }

    async changeCurrencyFromUsdToGbpOnMainPage() {
        await this.defaultCurrencyUsd.click();
        await this.gbpCurrency.click();
        // await this.page.waitForTimeout(3000);
    }

    async changeCurrencyFromGbpToChfOnMainPage() {
        await this.defaultCurrencyGbp.click();
        await this.chfCurrency.click();
        // await this.page.waitForTimeout(3000);
    }

    async changeCurrencyFromChfToDefOnMainPage() {
        await this.defaultCurrencyChf.click();
        await this.defCurrency.click();
        // await this.page.waitForTimeout(3000);
    }
}