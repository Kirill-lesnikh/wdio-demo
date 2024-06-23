import BasePage from "./base.page";


class CookiesBanner extends BasePage {
    get acceptAllCookies() {
        return $('//button[span[text()="Accept all cookies"]]')
    }

    /* Steps */
    async acceptAllCookiesIfPresent() {
        this.allure.startStep('Wait for cookie banner and accept it if present');
        try {
            await this.acceptAllCookies.waitForExist({timeout: 5000})
            await this.acceptAllCookies.click()
        } catch(e) {}
        this.allure.endStep();
    }
}

export const cookiesBanner = new CookiesBanner();