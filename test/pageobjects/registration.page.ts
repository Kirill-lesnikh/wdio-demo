import BasePage from "./base.page";

interface Credentials {
    email: string;
    password: string;
}

class RegistrationPage extends BasePage {
    get emailInput() {
        return $('#email')
    }

    get submitButton() {
        return $('button[type="submit"]')
    }

    get passwordInput() {
        return $('input[type="Password"]')
    }

    /* Steps */
    async inputEmail(email: string) {
        this.allure.startStep(`Input registration email: ${email}`)
        await this.emailInput.setValue(email)
        this.allure.endStep()
    }
    async inputPassword(password: string) {
        this.allure.startStep(`Input registration password: ${password}`)
        await this.passwordInput.setValue(password)
        this.allure.endStep()
    }

    async inputEmailAndPassword(creds: Credentials) {
        await this.inputEmail(creds.email)
        await this.clickSubmitButton()
        await this.inputPassword(creds.password)
    }

    async clickSubmitButton() {
        this.allure.startStep("Click submit button")
        await this.submitButton.click()
        this.allure.endStep();
    }
}

export const registrationPage = new RegistrationPage();