import { Page } from "@playwright/test";

export class FooterPage {
    constructor(private page: Page) { }

    // products
    offersBtn = this.page.getByRole('button', { name: 'Offers' });
    topCompaniesBtn = this.page.getByRole('button', { name: 'Top Companies' });
    geekBtn = this.page.getByRole('button', { name: 'Geek' });
    employerPanelBtn = this.page.getByRole('button', { name: 'Employer Panel' });
    candidateProfileBtn = this.page.getByRole('button', { name: 'Candidate Profile' });
    pricingBtn = this.page.getByRole('button', { name: 'Pricing' });

    // resources
    helpBtn = this.page.getByRole('button', { name: 'Help' });
    termsBtn = this.page.getByRole('button', { name: 'Terms' });
    privacyPolicyBtn = this.page.getByRole('button', { name: 'Privacy Policy' });
    cookieSettingsBtn = this.page.getByRole('button', { name: 'Cookie settings' });

    // about us
    aboutUsBtn = this.page.getByRole('button', { name: 'About Us' });
    careerBtn = this.page.getByRole('button', { name: 'Career' });

    // follow us on social media
    facebookBtn = this.page.getByRole('link', {name: 'facebook'});
    instagramBtn = this.page.getByLabel('instagram');
    linkedinBtn = this.page.getByLabel('linkedin');
    youtubeBtn = this.page.getByLabel('youtube');

    async clickButtonAboutUsOnFooter() {
        await this.aboutUsBtn.click();
    }

    async clickFacebookIcon() {
        await this.facebookBtn.click();
    }

    async clickInstagramIcon() {
        await this.instagramBtn.click();
    }

    async clickLinkedinIcon() {
        await this.linkedinBtn.click();
    }

    async clickYoutubeIcon() {
        await this.youtubeBtn.click();
    }
}