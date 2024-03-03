import { Page } from "@playwright/test";

export class FormsPage {
    constructor(private page: Page) { }

    // 
    emailField = this.page.getByPlaceholder('forexample@domain.com') // raport.justjoin.it
    passwordBtn = this.page.getByPlaceholder('At least 8 characters')

    // raport.justjoin.it
    nameAndSurnameBtn = this.page.getByPlaceholder('Wypełnij').first()
    companyBtn = this.page.getByPlaceholder('Wypełnij').nth(1)

    // live chat
    openChatBtn = this.page.getByLabel('Open LiveChat chat widget')
    yourNameField = this.page.getByLabel('Your name')
    subjectField = this.page.getByLabel('Subject')
    messageField = this.page.getByLabel('Message')
    openMenu = this.page.getByLabel('Open menu')
    minimizeWindow = this.page.getByLabel('Minimize window')
    leaveMessageBtn = this.page.getByRole('button', {name: 'Leave a message'})

    // checboxy terms/privacy policy and handel informations

    async fillEmailField() {
        await this.emailField.fill('');
    }

    async sendMessageOnLiveChat() {
        await this.openChatBtn.click();
        await this.openMenu.click();
        await this.yourNameField.fill('Tamara');
        await this.emailField.fill('');
        await this.subjectField.fill('Usuwanie konta kandydata');
        await this.messageField.fill('Dzień dobry. Chciałam dowiedzieć się jak usunąć konto kandydata, proszę o odpowiedź. Pozdrawiam');
        await this.leaveMessageBtn.click();
    } 
}