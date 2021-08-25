const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login.page');
const SecurePage = require('../pages/secure.page');

Given('the user is on login page', async () => {
  await LoginPage.open();
  await expect(browser).toHaveTitle('The Internet');
});

When('the user enters username as {string} and password as {string}', async (username, password) => {
  await LoginPage.userNameTextBox.setValue(username);
  await LoginPage.passwordTextBox.setValue(password);
});

When('clicks on login button', async () => {
  await LoginPage.loginButton.click();
});

Then('the user must navigate to secure area page displaying a message {string}', async (successMessage) => {
  await expect(SecurePage.secureAreaElement).toExist();
  await expect(SecurePage.secureAreaElement).toHaveTextContaining('Secure Area');
  await expect(SecurePage.messageElement).toExist();
  await expect(SecurePage.messageElement).toHaveTextContaining(successMessage);
});

Then('the user must remain on login page displaying a message {string}', async (errorMessage) => {
  await expect(LoginPage.loginPageElement).toExist();
  await expect(LoginPage.loginPageElement).toHaveTextContaining('Login Page');
  await expect(LoginPage.messageElement).toExist();
  await expect(SecurePage.messageElement).toHaveTextContaining(errorMessage);
});