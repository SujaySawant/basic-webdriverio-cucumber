/*
Create and export a module with class "SecurePage".
This class behaves as a Child class, which contains the selectors of Secure page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/
const BasePage = require('./base.page')

class SecurePage extends BasePage {

    get secureAreaElement() { return $('div[class="example"] h2') }
    get messageElement() { return $('#flash') }

}

module.exports = new SecurePage();