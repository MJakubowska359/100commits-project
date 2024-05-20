import { Page } from '@playwright/test';

export class TopCompaniesPage {
  constructor(private page: Page) {}

  // filters
  startUpBtn = this.page.getByRole('button', { name: 'Startup' });
  softwareHouseBtn = this.page.getByRole('button', {
    name: 'Software House',
  });
  eCommerceBtn = this.page.getByRole('button', { name: 'E-commerce' });
  corporationBtn = this.page.getByRole('button', { name: 'Corporation' });
  agencyBtn = this.page.getByRole('button', { name: 'Agency' });
  otherBtn = this.page.getByRole('button', { name: 'Other' });

  // get started option
  getStartedBtn = this.page.getByRole('button', { name: 'Get started' });

  async clickStartupButton(): Promise<void> {
    await this.startUpBtn.click();
  }

  async clickSoftwareHouseButton(): Promise<void> {
    await this.softwareHouseBtn.click();
  }

  async clickEcommerceButton(): Promise<void> {
    await this.eCommerceBtn.click();
  }

  async clickCorporationButton(): Promise<void> {
    await this.corporationBtn.click();
  }

  async clickAgencyButton(): Promise<void> {
    await this.agencyBtn.click();
  }

  async clickOtherButton(): Promise<void> {
    await this.otherBtn.click();
  }

  async clickGetStartedButton(): Promise<void> {
    await this.getStartedBtn.click();
  }
}
