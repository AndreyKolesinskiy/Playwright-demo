jest.setTimeout(15000);
jest.retryTimes(1);
const {LoginPage} = require ("../../../Pages/LoginPage");
const testData = require("../../../TestData/TestData.json");
const {WorkSpacePage} = require ("../../../Pages/WorkSpacePage");

it("Should login", async () => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(testData.users.user1.Email, testData.users.user1.Password);
    const workSpacePage = new WorkSpacePage(page);
    await workSpacePage.clickMenuItem("Home1");
    
});

beforeEach(async()=>{
    await context.clearCookies();
});