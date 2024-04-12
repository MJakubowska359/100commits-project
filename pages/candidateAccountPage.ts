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

  async clickMyAccount() {
    await this.myAccount.click();
  }

  async goToMyProfile() {
    await this.myProfileTab.click();
  }

  async goToChats() {
    await this.chatsTab.click();
  }

  async goToSavedSearchesTabInCandidateMenu() {
    await this.savedSearchesTab.click();
  }
}
