import { Page } from "@playwright/test";

export class FiltersPage {
    constructor(private page: Page) { }

    // main page - technology
    rubyBtn = this.page.getByRole('link', { name: 'Ruby' })
    pythonBtn = this.page.getByRole('link', { name: 'Python' })

    // main page - basic filters, top companies page
    searchBtn = this.page.getByRole('combobox', { name: 'Search' });
    locationBtn = this.page.getByRole('button', { name: 'Location' });
    withSalaryBtn = this.page.getByRole('button', { name: 'With salary' });
    alloffersBtn = this.page.getByRole('button', { name: 'All offers' });
    remoteCheckbox = this.page.getByRole('checkbox', { name: 'Remote' });

    // main page - main page - subscribe
    subscribeCheckbox = this.page.getByRole('checkbox', { name: 'Subscribe' });
    saveSearchCheckbox = this.page.getByRole('checkbox', { name: 'Save your search' });
    turnNotificationsCheckbox = this.page.getByRole('checkbox', { name: 'Turn on email notifications' });

    // more filters
    moreFiltersBtn = this.page.getByRole('button', { name: 'More filters' });
    salaryMinField = this.page.getByRole('textbox').first().click();
    salaryMaxField = this.page.getByRole('textbox').nth(1).click();
    ukraineFriendlyChecbox = this.page.getByRole('checkbox', { name: 'Show only Friendly Offers' });
    //// experience
    juniorCheckbox = this.page.getByRole('checkbox', { name: 'Junior' });
    midCheckbox = this.page.getByRole('checkbox', { name: 'Mid' });
    seniorCheckbox = this.page.getByRole('checkbox', { name: 'Senior' });
    clevelCheckbox = this.page.getByRole('checkbox', { name: 'C-level' });
    //// employment type
    b2bCheckbox = this.page.getByRole('checkbox', { name: 'B2B' });
    permanentCheckbox = this.page.getByRole('checkbox', { name: 'Permanent' });
    internshipCheckbox = this.page.getByRole('checkbox', { name: 'Internship' });
    mandateContractCheckbox = this.page.getByRole('checkbox', { name: 'Mandate contract' });
    specificContractCheckbox = this.page.getByRole('checkbox', { name: 'Specific-task contract' });
    //// type of work
    fullTimeCheckbox = this.page.getByRole('checkbox', { name: 'Full-time' });
    partTimeCheckbox = this.page.getByRole('checkbox', { name: 'Part-time' });
    practiceCheckbox = this.page.getByRole('checkbox', { name: 'Practice / Intership' });
    freelanceCheckbox = this.page.getByRole('checkbox', { name: 'Freelance' });

    showOffersBtn = this.page.getByRole('button', { name: 'Show offers' });
    clearBtn = this.page.getByRole('button', { name: 'Clear filters' });

    // assertion ready to use on tests
    // await page.getByRole('heading', { name: 'More filters' }).click();
    // await page.getByRole('heading', { name: 'Friendly Offer' }).click();

    async fillNameCompanyInSearch() {
        await this.searchBtn.fill('PKO');
    }

    async clickPythonLogo() {
        await this.pythonBtn.click();
    }

    async clickRemoteCheckbox() {
        await this.remoteCheckbox.click();
    }

    async clickWithSalaryButton() {
        await this.withSalaryBtn.click();
    }

    async clickSubscribeOption() {
        await this.subscribeCheckbox.click();
    }

    async clickSaveYourSearchCheckbox() {
        await this.saveSearchCheckbox.click();
    }

    async clickTurnOnEmailNotificationsButton() {
        await this.saveSearchCheckbox.click();
    }
}