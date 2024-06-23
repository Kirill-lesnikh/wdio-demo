import BasePage from "./base.page";


class HomePage extends BasePage {
    get startForFreeButton() {
        return $('//a[@href="/compare-plans"][span[text()="Start for free"]][preceding-sibling::p]')
    }

    get logInButton() {
        return $('(//a[span[text()="Log in"]])[1]')
    }

    /* Steps */
    async clickStartForFreeButton() {
        this.allure.startStep('Click "Start for free" button');
        await this.startForFreeButton.click();
        this.allure.endStep();
    }

    async clickLogInButton() {
        this.allure.startStep('Click "Log in" button');
        await this.logInButton.click();
        this.allure.endStep();
    }

}

export const homePage = new HomePage();