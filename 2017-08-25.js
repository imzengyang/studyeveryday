/**
 * selenium-webdriver
 * 
 * 显式等待与隐式等待
 * 
 * 显式等待：sleep
 * driver.sleep(1000)
 * 隐式等待：wait
 * https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#wait
 * 
 * wait的用法
 */


require('chromedriver');
let webdriver = require('selenium-webdriver');
let until = webdriver.until;
let By = webdriver.By;

let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().window().maximize();
driver.get('http://map.baidu.com/');
driver.findElement(By.id('sole-input')).sendKeys('书店');
driver.findElement(By.id('search-button')).click();

//
let firstsearch = driver.wait(until.elementLocated(By.css('ul.poilist > li[map-on-click]:nth-child(1)')),10*1000)
firstsearch.click();
// driver.quit();

