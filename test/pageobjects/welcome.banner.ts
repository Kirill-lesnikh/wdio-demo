import BasePage from "./base.page";

class WelcomeBanner extends BasePage {
    get continueButton() {
        return $('//button[text()="Continue"]')
    }

    get skipForNowButton() {
        return $('//button[text()="Skip for now"]')
    }

    get continueWithFreeTrialButton() {
        return $('//button[text()="Continue with Free Trial"]')
    }

    async radioOption(option: string) {
       return $(`//div[text()="${option}"]`)
    }

    /* Steps */

    async selectRadioOption(option: string) {
        this.allure.startStep(`Select ${option} option`);
        await(await this.radioOption(option)).click();
        this.allure.endStep();

    }

    async clickSkipForNowButton() {
        this.allure.startStep(`Click skip Skip for now`)
        await this.skipForNowButton.click();
        this.allure.endStep();

    }

    async clickSkipForFreeTrialButton() {
        this.allure.startStep('Click "Skip for free trial" button');
        await this.skipForNowButton.click();
        this.allure.endStep();

    }

    async solveWelcomeBanner() {
        this.allure.startStep(`Solve welcome banner`);
        await this.selectRadioOption("Personal")
        await this.selectRadioOption("Store and organize info")
        await this.selectRadioOption("It was recommended")
        await this.clickSkipForNowButton()
        await this.clickSkipForFreeTrialButton()
        this.allure.endStep();

    }
}

export const welcomeBanner = new WelcomeBanner();