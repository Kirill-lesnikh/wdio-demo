import { testConfig } from "../../config/test.config";
import { homePage } from "../pageobjects/home.page";
import { cookiesBanner } from "../pageobjects/cookies.banner";
import {logInPage} from "../pageobjects/log.in.page.ts";
import {dashboardPage} from "../pageobjects/dashboard.page.ts";


describe('Sign in feature', () => {
    it('User can sign in using email and password', async () => {
        await browser.navigateTo(testConfig.host)
        await cookiesBanner.acceptAllCookiesIfPresent()
        await homePage.clickLogInButton()
        await logInPage.inputEmail(testConfig.email)
        await logInPage.clickContinueButton()
        await logInPage.inputPassword(testConfig.password)
        await logInPage.clickContinueButton()
        await dashboardPage.createTaskButton.waitForDisplayed()
    });
});