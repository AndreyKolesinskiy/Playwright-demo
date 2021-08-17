jest.setTimeout(30000);
//jest.retryTimes(1);
const {LoginPage} = require ("../../../Pages/LoginPage");
const {WorkSpacePage} = require ("../../../Pages/WorkSpacePage");
const {DrivePage} = require ("../../../Pages/DrivePage");
const testData = require("../../../TestData/TestData.json");

it("Should upload file", async () => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login(testData.users.user1.Email, testData.users.user1.Password);
    const workSpacePage = new WorkSpacePage(page);
    await workSpacePage.clickMenuItem("Drive");
    const drivePage = new DrivePage(page);
    await drivePage.uploadFile("./TestData/TestFiles/test.jpg");
});