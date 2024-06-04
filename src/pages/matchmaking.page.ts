import { MatchingModel } from '../models/form.model';
import { Page } from '@playwright/test';

export class MatchmakingPage {
  constructor(private page: Page) {}

  // locators for preferences form

  fillPreferencesBtn = this.page.getByRole('button', {
    name: 'Go to fill preferences',
  });
  nextBtn = this.page.getByRole('button', { name: 'Next' });

  firstName = this.page.getByPlaceholder('Write your name');
  surname = this.page.getByPlaceholder('Write your surname');
  testingCheckbox = this.page.locator('#checkbox-testing');
  position = this.page.getByRole('combobox');

  async clickGoToYourPreferencesButton(): Promise<void> {
    await this.fillPreferencesBtn.click();
  }

  async fillNameAndSurname(candidate: MatchingModel): Promise<void> {
    const inputName = await this.firstName.inputValue();
    const inputSurname = await this.surname.inputValue();

    if (inputName === candidate.name) {
      await this.firstName.press('Tab');
    } else {
      await this.firstName.fill('');
      await this.firstName.fill(candidate.name);
    }

    if (inputSurname === candidate.surname) {
      await this.nextBtn.click();
    } else {
      await this.surname.fill('');
      await this.surname.fill(candidate.surname);
      await this.nextBtn.click();
    }
  }

  async checkInterestingArea(): Promise<void> {
    await this.testingCheckbox.check();
    await this.nextBtn.click();
  }

  async fillPosition(): Promise<void> {
    const inputPosition = await this.position.inputValue();

    if (inputPosition === 'Automation QA Engineer') {
      await this.nextBtn.click();
    } else {
      await this.position.fill('');
      await this.position.fill('Automation QA Engineer');
      await this.nextBtn.click();
    }
  }
}
