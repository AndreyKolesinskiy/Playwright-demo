class DrivePage{

    constructor(page){
        this.page = page;
    }

    buttonUpload = "//*[text()='Upload file']";
    buttonUploadInModal = "//*[@data-testid='save']";
    titleField = "//input[@placeholder='Enter title']";

    async uploadFile(filePath){
        const [fileChooser] = await Promise.all([
            page.waitForEvent('filechooser'),
            page.click(this.buttonUpload)
        ]);
        await fileChooser.setFiles(filePath);
        var fileName = new Date(Date.now()).toISOString();
        await page.fill(this.titleField, fileName);
        await page.click(this.buttonUploadInModal);
        await page.waitForSelector("//div[contains(text(), '"+ fileName + "')]")
        
    }
}
module.exports = {DrivePage};