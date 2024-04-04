import { Page } from '@playwright/test';

export class TopCompaniesPage {
    constructor(private page: Page) {}

    // filters
    startUpBtn = this.page.getByRole('button', { name: 'Startup' });
    softwareHouseBtn = this.page.getByRole('button', {
        name: 'Software House',
    });
    eCommerceBtn = this.page.getByRole('button', { name: 'E-commerce' });
    corporationBtn = this.page.getByRole('button', { name: 'Corporation' });
    agencyBtn = this.page.getByRole('button', { name: 'Agency' });
    otherBtn = this.page.getByRole('button', { name: 'Other' });

    // get started option
    getStartedBtn = this.page.getByRole('button', { name: 'Get started' });

    async clickStartipButton() {
        await this.startUpBtn.click();
    }

    async clickSoftwareHouseButton() {
        await this.softwareHouseBtn.click();
    }

    async clickEcommerceButton() {
        await this.eCommerceBtn.click();
    }

    async clickCorporationButton() {
        await this.corporationBtn.click();
    }

    async clickAgencyButton() {
        await this.agencyBtn.click();
    }

    async clickOtherButton() {
        await this.otherBtn.click();
    }

    async clickGetStartedButton() {
        await this.getStartedBtn.click();
    }
}
