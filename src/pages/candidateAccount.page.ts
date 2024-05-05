/* eslint-disable @typescript-eslint/explicit-function-return-type */
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

  async clickMyProfileOnHeaderOfPage() {
    await this.myAccount.click();
  }

  async goToMyProfileFromTopMenu() {
    await this.myProfileTab.click();
  }

  async goToChartsFromTopMenu() {
    await this.chatsTab.click();
  }

  async goToSavedSearchesFromTopMenu() {
    await this.savedSearchesTab.click();
  }

  async goToSettingsFromTopMenu() {
    await this.settingsTab.click();
  }

  async clickLogoutInTopMenu() {
    await this.logoutTab.click();
  }

  async goToChartsFromSideMenu() {
    await this.chatsSideMenu.click();
  }

  async goToSavedSearchesFromSideMenu() {
    await this.savedSearchesSideMenu.click();
  }

  async goToSettingsFromSideMenu() {
    await this.settingsSideMenu.click();
  }

  async clickLogoutInSideMenu() {
    await this.logoutSideMenu.click();
  }

  async clickChangeBtnForChangingPassword() {
    await this.firstChangeBtn.click();
  }

  async clickChangePasswordBtn() {
    await this.changePasswordBtn.click();
  }

  async changePassword(userPassword: ResetPasswordModel): Promise<void> {
    await this.currentPassword.fill(userPassword.currentPassword);
    await this.newPassword.fill(userPassword.newPassword);
    await this.repeatNewPassword.fill(userPassword.repeatNewPassword);
    await this.changePasswordBtn.click();
  }

  async changeConsent() {
    await this.secondChangeBtn.click();
    await this.moreInformation.click();
    await this.lessInformation.click();
    await this.commercialCorrespondenceCheckbox.check();
    await this.commercialCorrespondenceCheckbox.uncheck();
  }
}
