import BasePage from "./base.page";


class LogInPage extends BasePage {
    get emailInput() {
        return $('input#email')
    }

    get passwordInput() {
        return $('input[placeholder="Password"]')
    }

    get continueButton() {
        return $('button[type="submit"]')
    }

    async inputEmail(email: string) {
        this.allure.startStep(`Input email: ${email}`);
        await this.emailInput.setValue(email)
        this.allure.endStep();
    }

    async inputPassword(password: string) {
        this.allure.startStep(`Input password: ${password}`);
        await this.passwordInput.setValue(password)
        this.allure.endStep();
    }

    async clickContinueButton() {
        this.allure.startStep('Click "Continue" button');
        await this.continueButton.click()
        this.allure.endStep();
    }
}

export const logInPage = new LogInPage();