import { PersonalInfoModel } from '../models/form.model';
import { ResetPasswordModel } from '../models/user.model';
import { Page } from '@playwright/test';

export class CandidateAccountPage {
  constructor(private page: Page) {}
  // locators for top menu
  myAccount = this.page.getByRole('button', { name: 'My profile' });
  myProfileTab = this.page.getByRole('menuitem', { name: 'My profile' });
  chatsTab = this.page.getByRole('menuitem', { name: 'Chats' });
  savedSearchesTab = this.page.getByRole('menuitem', {
    name: 'Saved searches',
  });
  settingsTab = this.page.getByRole('menuitem', { name: 'Settings' });
  logoutTab = this.page.getByRole('menuitem', { name: 'Log out' });

  // locators for side menu
  chatsSideMenu = this.page.getByRole('link', { name: 'Chats' });
  savedSearchesSideMenu = this.page.getByRole('link', {
    name: 'Saved searches',
  });
  settingsSideMenu = this.page.getByRole('link', { name: 'Settings' });
  logoutSideMenu = this.page.getByRole('button', { name: 'Log out' });

  // locators for change password
  firstChangeBtn = this.page.locator('#change-password-button');
  currentPassword = this.page.getByPlaceholder('Your current password to');
  newPassword = this.page.getByPlaceholder('At least 8 characters');
  repeatNewPassword = this.page.getByPlaceholder('Same password as above');
  changePasswordBtn = this.page.getByRole('button', {
    name: 'Change password',
  });

  // locators for change consent
  secondChangeBtn = this.page.locator('#notifications-button');
  moreInformation = this.page.getByText('more', { exact: true });
  lessInformation = this.page.getByText('less');
  commercialCorrespondenceCheckbox = this.page.getByRole('checkbox');

  // locators for delete account
  deleteAccountBtnInSettings = this.page.locator('#button');
  deleteAccountBtn = this.page.getByRole('button', { name: 'Delete account' });

  // locators for personal information form
  editInformationBtn = this.page.locator(
    'button[name="personal-informations-edit"]',
  );
  addPhoto = this.page.locator('.css-fy324q');
  // addPhoto = this.page.getByRole('presentation');
  name = this.page.getByPlaceholder('First name');
  surname = this.page.getByPlaceholder('Last name');
  messageToEmployer = this.page.getByPlaceholder('Type something about you');
  saveChangesBtn = this.page.getByRole('button', { name: 'Save' });

  async clickMyProfileOnHeaderOfPage(): Promise<void> {
    await this.myAccount.click();
  }

  async goToMyProfileFromTopMenu(): Promise<void> {
    await this.myProfileTab.click();
  }

  async goToChartsFromTopMenu(): Promise<void> {
    await this.chatsTab.click();
  }

  async goToSavedSearchesFromTopMenu(): Promise<void> {
    await this.savedSearchesTab.click();
  }

  async goToSettingsFromTopMenu(): Promise<void> {
    await this.settingsTab.click();
  }

  async clickLogoutInTopMenu(): Promise<void> {
    await this.logoutTab.click();
  }

  async goToChartsFromSideMenu(): Promise<void> {
    await this.chatsSideMenu.click();
  }

  async goToSavedSearchesFromSideMenu(): Promise<void> {
    await this.savedSearchesSideMenu.click();
  }

  async goToSettingsFromSideMenu(): Promise<void> {
    await this.settingsSideMenu.click();
  }

  async clickLogoutInSideMenu(): Promise<void> {
    await this.logoutSideMenu.click();
  }

  async clickChangeBtnForChangingPassword(): Promise<void> {
    await this.firstChangeBtn.click();
  }

  async clickChangePasswordBtn(): Promise<void> {
    await this.changePasswordBtn.click();
  }

  async changePassword(userPassword: ResetPasswordModel): Promise<void> {
    await this.currentPassword.fill(userPassword.currentPassword);
    await this.newPassword.fill(userPassword.newPassword);
    await this.repeatNewPassword.fill(userPassword.repeatNewPassword);
    await this.changePasswordBtn.click();
  }

  async changeConsent(): Promise<void> {
    await this.secondChangeBtn.click();
    await this.moreInformation.click();
    await this.lessInformation.click();
    await this.commercialCorrespondenceCheckbox.check();
    await this.commercialCorrespondenceCheckbox.uncheck();
  }

  async clickDeleteAccountButton(): Promise<void> {
    await this.deleteAccountBtnInSettings.click();
    await this.deleteAccountBtn.click();
  }

  async clickEditPersonalInformationButton(): Promise<void> {
    await this.editInformationBtn.click();
  }

  async addProfilePhotoToAccount(): Promise<void> {
    await this.addPhoto.setInputFiles(
      'E:/100commits-project/src/test-data/tru.jpeg',
    );
  }

  async fillBasicPersonalInformation(
    personalInfo: PersonalInfoModel,
  ): Promise<void> {
    await this.name.fill(personalInfo.name);
    await this.surname.fill(personalInfo.surname);
    await this.messageToEmployer.fill(personalInfo.message);
  }

  async clickSaveChangesButton(): Promise<void> {
    await this.saveChangesBtn.click();
  }
}
