import { Page } from '@playwright/test';

export class PostAJobPage {
  constructor(private page: Page) {}

  languageAndCurrency = this.page.locator('#select-pricing-language');
  polishLanguage = this.page.getByRole('option', { name: 'Polski, PLN' });
  getInTouchBtn = this.page.getByRole('button', { name: 'Get in touch' });
  postAJob = this.page.getByRole('button', { name: 'Post a job' }).first();

  async changeLanguageAndCurrency(): Promise<void> {
    await this.languageAndCurrency.click();
    await this.polishLanguage.click();
  }

  async clickGetInTouchButton(): Promise<void> {
    await this.getInTouchBtn.click();
  }

  async clickFirstPostAJobButton(): Promise<void> {
    await this.postAJob.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}
