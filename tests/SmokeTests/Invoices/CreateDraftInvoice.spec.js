jest.setTimeout(300 * 1000);
//jest.retryTimes(1);
const {LoginPage} = require ("../../../Pages/LoginPage");
const testData = require("../../../TestData/TestData.json");
const {WorkSpacePage} = require ("../../../Pages/WorkSpacePage");

it("Should login", async () => {
    const loginPage = new LoginPage(page);
    //await loginPage.openLoginPage();
    await page.goto("https://web-client-staging4-t748z32a.weareindy.com/app/workspace/");
    await loginPage.login("andrei.kaliasinski+516@tispr.com", testData.users.user1.Password);
    const workSpacePage = new WorkSpacePage(page);
    await workSpacePage.clickMenuItem("Invoices");

    for (var i = 0; i < 60; i++ ){
        await page.click("//button[@data-testid='create-invoice']");
        await page.click("//div[text()='Select or add a contact']");
        await page.click("//div[text()='andrei.kaliasinski+123124@tispr.com']");
        await page.click("//button[text()='Continue']");
        await page.click("//button[@data-testid='back']");
    }
});

beforeEach(async()=>{
    await context.clearCookies();
});