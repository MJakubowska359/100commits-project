/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Page } from '@playwright/test';

export class CandidateAccountPage {
  constructor(private page: Page) {}

  myAccount = this.page.getByRole('button', { name: 'My profile' });
  myProfileTab = this.page.getByRole('menuitem', { name: 'My profile' });
  chatsTab = this.page.getByRole('menuitem', { name: 'Chats' });
  savedSearchesTab = this.page.getByRole('menuitem', {
    name: 'Saved searches',
  });
  settingsTab = this.page.getByRole('menuitem', { name: 'Settings' });
  logoutTab = this.page.getByRole('menuitem', { name: 'Log out' });

  changeBtn = this.page.locator('#change-password-button');
  currentPassword = this.page.getByPlaceholder('Your current password to');
  newPassword = this.page.getByPlaceholder('At least 8 characters');
  sameNewPassword = this.page.getByPlaceholder('Same password as above');
  changePasswordBtn = this.page.getByText('Current passwordNew');

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
    await this.chatsTab.click();
  }

  async goToSavedSearchesFromSideMenu() {
    await this.savedSearchesTab.click();
  }

  async goToSettingsFromSideMenu() {
    await this.settingsTab.click();
  }

  async clickLogoutInSideMenu() {
    await this.logoutTab.click();
  }

  async changePassword() {
    await this.changeBtn.click();
    await this.currentPassword.fill('');
    await this.newPassword.fill('');
    await this.sameNewPassword.fill('');
    await this.changePasswordBtn.click();
  }
}
