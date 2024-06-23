import BasePage from "./base.page";


class ComparePlansPage extends BasePage {
    get getStartedFreePlanButton() {
        return $('//a[span[text()="Get Started"]]')
    }

    /* Steps */
    async clickGetStartedFreePlanButton() {
        this.allure.startStep('Click "Get started" button on Free plan');
        await this.getStartedFreePlanButton.scrollIntoView({block: "center"})
        await this.screenshotHelper.captureScreenshot("free plan")
        await this.getStartedFreePlanButton.click()
        this.allure.endStep()
    }
}

export const comparePlansPage = new ComparePlansPage();