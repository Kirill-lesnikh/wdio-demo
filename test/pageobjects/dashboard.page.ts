import BasePage from "./base.page";


class DashboardPage extends BasePage {
    get createTaskButton() {
        return $('//div[text()="Task"]')
    }
}

export const dashboardPage = new DashboardPage();