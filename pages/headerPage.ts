import { Page, expect } from "@playwright/test";

export class HeaderPage {
    constructor(private page: Page) { }

    // products
    jobOffersBtn = this.page.getByRole('link', { name: 'Job offers' });
    topCompaniesBtn = this.page.getByRole('link', { name: 'Top Companies' });
    geekBtn = this.page.getByRole('link', { name: 'Geek' });
    postAJobBtn = this.page.getByRole('link', { name: 'Post a job' });
    starOfSubscribe = this.page.getByRole('button', { name: 'Subscribe' });
    currencyList = this.page.getByRole('button', { name: 'PLN' });

    // menu
    menuBtn = this.page.locator('button[name="sidebar-open"]');
    pressRoomBtn = this.page.getByRole('link', { name: 'Press Room' });
    salaryReportBtn = this.page.getByRole('link', { name: 'IT Salary Report' });
    careerBtn = this.page.getByRole('link', { name: 'Career' });
    helpBtn = this.page.getByRole('button', { name: 'Help' });
    termsBtn = this.page.getByRole('link', { name: 'Terms' });
    signInAsCandidate = this.page.getByRole('button', { name: "Sign in to Candidate's profile" });
    signInAsCompany = this.page.getByRole('button', { name: "Sign in to Employer's panel" });

    async chooseItSalaryReportFromMenu() {
        await this.menuBtn.click();
        await this.salaryReportBtn.click();
    }
    // await page.locator('button[name="sidebar-open"]').click();

    async clickTopCompaniesButtonOnTheMainPage() {
        await this.topCompaniesBtn.click();
            }
}