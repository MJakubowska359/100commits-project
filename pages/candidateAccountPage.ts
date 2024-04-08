import { Page } from '@playwright/test';

export class CandidateAccountPage {
    constructor(private page: Page) {}

    myAccount = this.page.getByRole('button', { name: 'My profile' });
    myProfileTab = this.page.getByRole('menuitem', { name: 'My profile' });
    chatsTab = this.page.getByRole('menuitem', { name: 'Chats' });
    savedSearchesTab = this.page.getByRole('menuitem', { name: 'Saved searches' });
    settingsTab = this.page.getByRole('menuitem', { name: 'Settings' });
    logoutTab = this.page.getByRole('menuitem', { name: 'Log out' });

    async goToMyAccount() {
        await this.myAccount.click();
    }

    async clickSavedSearchesTabInCandidateMenu() {
        await this.savedSearchesTab.click();
    }
}
