import AllureReporter from '@wdio/allure-reporter';
import { screenshotHelper } from '../../utils/screenshotHelper';

export default class BasePage {
	public allure
	public screenshotHelper

	constructor() {
		this.allure = AllureReporter
		this.screenshotHelper = screenshotHelper
	}
}