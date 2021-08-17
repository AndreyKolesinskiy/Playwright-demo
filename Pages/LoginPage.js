const testData = require("../TestData/TestData.json");

class LoginPage{
    
    constructor(page){
        this.page = page;
    }
    
    emailField = "//*[@name='email']";
    passwordField = "//*[@name='password']";
    signInButton = "//button[text()='Sign in']";


    async openLoginPage(){
        await this.page.goto(testData.loginUrl);
    }

    async login(email, password){
        await this.page.fill(this.emailField, email);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.signInButton);
    }
}
module.exports = {LoginPage};