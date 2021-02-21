const webdriver = require("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome")
const chromedriver = require("chromedriver")

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

async function run(url, username, password) {
  const browser = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build()
  await browser.get(url)
  await browser.executeScript(`
  document.getElementById('username').value = '${username}';
  document.getElementById('password').value = '${password}';
  document.querySelector('[name="submit"]').click();
  `)
  await browser.quit()
}

module.exports = {
  runLogin: run,
}
