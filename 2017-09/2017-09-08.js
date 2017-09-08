/**
 * chrome headless
 * https://developers.google.com/web/updates/2017/04/headless-chrome
 * 
 * https://github.com/imzengyang/studyeveryday
 */


// const puppeteer = require('puppeteer');

// (async() => {
//   const browser = await puppeteer.launch();
//   console.log(await browser.version());
//   browser.close();
// })();

require('chromedriver');
const fs = require('fs');
const webdriver = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome')

let driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build()

// This should be the path to your Canary installation.
// I'm assuming Mac for the example.
// const PATH_TO_CANARY = '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary';

// const chromeCapabilities = webdriver.Capabilities.chrome();
// chromeCapabilities.set('chromeOptions', {
//   binary: PATH_TO_CANARY // Screenshots require Chrome 60. Force Canary.
//   'args': [
//     '--headless',
//   ]
// });



// const driver = new webdriver.Builder()
//   .forBrowser('chrome')
//   .withCapabilities(chromeCapabilities)
//   .build();

// Navigate to google.com, enter a search.
driver.get('https://www.baidu.com/');

// Take screenshot of results page. Save to disk.
driver.takeScreenshot().then(base64png => {
  fs.writeFileSync('screenshot.png', new Buffer(base64png, 'base64'));
});

driver.quit();