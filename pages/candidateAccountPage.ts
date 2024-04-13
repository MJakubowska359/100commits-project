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
    await this.chatsTab.click();
  }

  async clickLogoutInTopMenu() {
    await this.chatsTab.click();
  }
}
