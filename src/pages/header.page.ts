import { Page } from '@playwright/test';

export class HeaderPage {
  constructor(private page: Page) {}

  // products
  jobOffersBtn = this.page.getByRole('link', { name: 'Job offers' });
  topCompaniesBtn = this.page.getByRole('link', { name: 'Top Companies' });
  geekBtn = this.page.getByRole('link', { name: 'Geek' });
  postAJobBtn = this.page.getByRole('link', { name: 'Post a job' });
  signInBtn = this.page.getByRole('button', { name: 'Sign in' });
  starOfSubscribe = this.page.getByLabel('Saved searches');
  closeSavedSearchesBtn = this.page.locator(
    'button[name="header_job_alerts_close_button"]',
  );

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
  helpBtn = this.page.getByText('Help');
  termsBtn = this.page.getByRole('link', { name: 'Terms' });
  signInAsCandidate = this.page.getByRole('button', {
    name: "Sign in to Candidate's profile",
  });
  signInAsCompany = this.page.getByRole('button', {
    name: "Sign in to Employer's panel",
  });

  async goToSignInPageForCandidateFromPageHeader(): Promise<void> {
    await this.signInBtn.click();
    await this.signInAsCandidate.click();
  }

  async goToSignInPageForCandidateFromMenuOnMainPage(): Promise<void> {
    await this.menuBtn.click();
    await this.signInAsCandidate.click();
  }

  async goToSignInPageForCompanyFromPageHeader(): Promise<void> {
    await this.signInBtn.click();
    await this.signInAsCompany.click();
  }

  async goToSignInPageForCompanyFromMenuOnMainPage(): Promise<void> {
    await this.menuBtn.click();
    await this.signInAsCompany.click();
  }

  async chooseItSalaryReportFromMenu(): Promise<void> {
    await this.menuBtn.click();
    await this.salaryReportBtn.click();
  }
  // await page.locator('button[name="sidebar-open"]').click();

  async clickTopCompaniesButtonOnTheMainPage(): Promise<void> {
    await this.topCompaniesBtn.click();
  }

  async goToPostAJobSubPageOnTheMainPage(): Promise<void> {
    await this.postAJobBtn.click();
  }

  async changeCurrencyFromPlnToEurOnMainPage(): Promise<void> {
    await this.defaultCurrencyPln.click();
    await this.eurCurrency.click();
  }

  async changeCurrencyFromEurToUsdOnMainPage(): Promise<void> {
    await this.defaultCurrencyEur.click();
    await this.usdCurrency.click();
  }

  async changeCurrencyFromUsdToGbpOnMainPage(): Promise<void> {
    await this.defaultCurrencyUsd.click();
    await this.gbpCurrency.click();
  }

  async changeCurrencyFromGbpToChfOnMainPage(): Promise<void> {
    await this.defaultCurrencyGbp.click();
    await this.chfCurrency.click();
  }

  async changeCurrencyFromChfToDefOnMainPage(): Promise<void> {
    await this.defaultCurrencyChf.click();
    await this.defCurrency.click();
  }

  async changeCurrencyFromDefToPlnOnMainPage(): Promise<void> {
    await this.defaultCurrencyDef.click();
    await this.plnCurrency.click();
  }

  async clickStarIconOnHeaderOfPage(): Promise<void> {
    await this.starOfSubscribe.click();
  }

  async closeSavedSearches(): Promise<void> {
    await this.closeSavedSearchesBtn.click();
  }

  async openMenuAndLiveChat(): Promise<void> {
    await this.menuBtn.click();
    await this.helpBtn.click();
  }
}
