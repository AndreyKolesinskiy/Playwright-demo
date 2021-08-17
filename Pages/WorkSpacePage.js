class WorkSpacePage{

    constructor(page){
        this.page = page;
    }

    homeMenuItem = "//div[text()='Home']";

    async clickMenuItem(itemName){
        await this.page.click("//div[text()='" + itemName + "']");
    }
}
module.exports = {WorkSpacePage};