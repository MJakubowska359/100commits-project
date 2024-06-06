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
  experienceInput = this.page.getByPlaceholder('Write or choose');
  plusIcon = this.page.locator('button[name="wizard-experience-plus"]');
  minusIcon = this.page.locator('button[name="wizard-experience-minus"]');
  hybridCheckbox = this.page.getByRole('checkbox').first();
  remotelyCheckbox = this.page.getByRole('checkbox').nth(1);
  b2bCheckbox = this.page.getByRole('checkbox').first();
  minimumSalaryInput = this.page.getByPlaceholder(
    'Please enter your minimum expected monthly salary.',
  );
  englishB2 = this.page.getByText('B2 Advanced');

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

  async fillYearsOfExperienceByClickPlusIcon(): Promise<void> {
    const inputExperience = await this.experienceInput.inputValue();

    if (inputExperience === '') {
      await this.plusIcon.dblclick();
      await this.nextBtn.click();
    } else {
      await this.experienceInput.press('Control+a');
      await this.experienceInput.press('Backspace');
      await this.plusIcon.dblclick();
      await this.nextBtn.click();
    }
  }

  async checkRemotelyWorkplace(): Promise<void> {
    await this.remotelyCheckbox.check();
    await this.nextBtn.click();
  }

  async checkB2BType(): Promise<void> {
    await this.b2bCheckbox.check();
    const inputSalary = await this.minimumSalaryInput.inputValue();

    if (inputSalary === '') {
      await this.minimumSalaryInput.fill('7000');
      await this.nextBtn.click();
    } else {
      await this.minimumSalaryInput.press('Control+a');
      await this.minimumSalaryInput.press('Backspace');
      await this.minimumSalaryInput.fill('7000');
      await this.nextBtn.click();
    }
  }

  async chooseLevelOfEnglish(): Promise<void> {
    await this.englishB2.click();
    await this.nextBtn.click();
  }
}
