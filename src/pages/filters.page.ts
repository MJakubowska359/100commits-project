import { NameOfCompanyModel } from '../models/form.model';
import { Page } from '@playwright/test';

export class FiltersPage {
  constructor(private page: Page) {}

  // main page - technology
  rubyBtn = this.page.getByRole('link', { name: 'Ruby' });
  pythonBtn = this.page.getByRole('link', { name: 'Python' });

  // main page - basic filters, top companies page
  searchBtn = this.page.getByRole('combobox', { name: 'Search' });
  searchCompany = this.page.getByPlaceholder('Search company');
  locationBtn = this.page.getByRole('button', { name: 'Location' });
  withSalaryBtn = this.page.getByRole('tab', { name: 'With salary' });
  alloffersBtn = this.page.getByRole('button', { name: 'All offers' });
  remoteCheckbox = this.page.getByRole('checkbox');

  // main page - subscribe
  subscribeOption = this.page.getByRole('button', { name: 'Subscribe' });
  subscribeCheckbox = this.page.getByRole('checkbox', { name: 'Subscribe' });
  saveSearchCheckbox = this.page.locator('#save-filters');
  turnNotificationsCheckbox = this.page.locator(
    'button[name="job_alerts_switcher_popup_add_email_button"]',
  );

  // more filters
  moreFiltersBtn = this.page.getByRole('button', { name: 'More filters' });
  salaryMinField = this.page.getByRole('textbox').first();
  salaryMaxField = this.page.getByRole('textbox').nth(1);
  ukraineFriendlyChecbox = this.page.getByRole('checkbox', {
    name: 'Show only Friendly Offers',
  });
  //// experience
  juniorCheckbox = this.page.getByRole('checkbox', { name: 'Junior' });
  midCheckbox = this.page.getByRole('checkbox', { name: 'Mid' });
  seniorCheckbox = this.page.getByRole('checkbox', { name: 'Senior' });
  clevelCheckbox = this.page.getByRole('checkbox', { name: 'C-level' });
  //// employment type
  b2bCheckbox = this.page.getByRole('checkbox', { name: 'B2B' });
  permanentCheckbox = this.page.getByRole('checkbox', { name: 'Permanent' });
  internshipCheckbox = this.page.getByRole('checkbox', {
    name: 'Internship',
  });
  mandateContractCheckbox = this.page.getByRole('checkbox', {
    name: 'Mandate contract',
  });
  specificContractCheckbox = this.page.getByRole('checkbox', {
    name: 'Specific-task contract',
  });
  //// type of work
  fullTimeCheckbox = this.page.getByRole('checkbox', { name: 'Full-time' });
  partTimeCheckbox = this.page.getByRole('checkbox', { name: 'Part-time' });
  practiceCheckbox = this.page.getByRole('checkbox', {
    name: 'Practice / Intership',
  });
  freelanceCheckbox = this.page.getByRole('checkbox', { name: 'Freelance' });
  goToOffersBtn = this.page.getByRole('button', { name: 'Go to offers' });
  showOffersBtn = this.page.getByRole('button', { name: 'Show offers' });
  clearBtn = this.page.getByRole('button', { name: 'Clear filters' });

  async fillNameOfCompanyInSearch(
    companyData: NameOfCompanyModel,
  ): Promise<void> {
    await this.searchCompany.fill(companyData.companyName);
    await this.searchCompany.press('Enter');
  }

  async clickPythonLogo(): Promise<void> {
    await this.pythonBtn.click();
  }

  async clickRemoteCheckbox(): Promise<void> {
    await this.remoteCheckbox.click();
  }

  async clickWithSalaryButton(): Promise<void> {
    await this.withSalaryBtn.click();
  }

  async clickSubscribeOption(): Promise<void> {
    await this.subscribeOption.click();
  }

  async clickSaveYourSearchCheckbox(): Promise<void> {
    await this.saveSearchCheckbox.click();
  }

  async clickTurnOnEmailNotificationsButton(): Promise<void> {
    await this.turnNotificationsCheckbox.click();
  }

  async clickGoToOffersButton(): Promise<void> {
    await this.goToOffersBtn.click();
  }
}
