import { testConfig } from "../../config/test.config";
import { comparePlansPage } from "../pageobjects/compare.plans.page";
import { homePage } from "../pageobjects/home.page";
import { cookiesBanner } from "../pageobjects/cookies.banner";
import {registrationPage} from "../pageobjects/registration.page.ts";
import {welcomeBanner} from "../pageobjects/welcome.banner.ts";


describe('Sign up feature', () => {
    it('User can sign up using email and password', async () => {
        await browser.navigateTo(testConfig.host)
        await cookiesBanner.acceptAllCookiesIfPresent()
        await homePage.clickStartForFreeButton()
        await comparePlansPage.clickGetStartedFreePlanButton()
        await registrationPage.inputEmailAndPassword(
            {
                email: testConfig.email,
                password: testConfig.password
            })
        await welcomeBanner.solveWelcomeBanner()
    });
});