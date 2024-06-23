import AllureReporter from '@wdio/allure-reporter';

class ScreenshotHelper {
    async captureScreenshot(screenShotName: string) {
        let image = null;
		const fileName = `Screenshot_${screenShotName.replace(' ', '_').replace('\n', '_')}`;
        const screenShot = await browser.takeScreenshot();
        image = Buffer.from(screenShot, 'base64');
        AllureReporter.addAttachment(fileName, image, 'image/png');
    }
}

export const screenshotHelper = new ScreenshotHelper();