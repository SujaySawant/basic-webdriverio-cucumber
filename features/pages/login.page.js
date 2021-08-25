/*
Create and export a module with class "LoginPage".
This class behaves as a Child class, which contains the selectors of Login page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/
const BasePage = require('./base.page')

class LoginPage extends BasePage {
    get userNameTextBox() { return $('#username') }
    get passwordTextBox() { return $('#password') }
    get loginButton() { return $('button[type="submit"]') }

    get loginPageElement() { return $('div[class="example"] h2') }
    get messageElement() { return $('#flash') }

    async open() {
        await super.open('https://the-internet.herokuapp.com/login')
    }
}

module.exports = new LoginPage();