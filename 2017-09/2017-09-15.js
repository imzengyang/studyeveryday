/**
 * selenium-webdriver 快捷键
 * 
 */

require('chromedriver')
let webdriver = require('selenium-webdriver')
let By = webdriver.By;
let Key = webdriver.Key;
let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get("http://192.168.219.129:3000")
driver.findElement(By.css('a[href="/signin"]')).click();
driver.findElement(By.id('name')).sendKeys("imzack")
driver.findElement(By.id('pass')).sendKeys('123456')
driver.findElement(By.css('.span-primary')).click();
driver.findElement(By.css('.span-success')).click();


driver.findElement(By.css('.CodeMirror-scroll')).click();
driver.actions().mouseMove(driver.findElement(By.css('.CodeMirror-scroll'))).sendKeys(Key.CONTROL + "b").perform();