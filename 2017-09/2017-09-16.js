/**
 * 
 * selenium-webdriver元素验证的几种方式
 */

require('chromedriver')
let webdriver = require('selenium-webdriver')
let assert = require('assert');
let By = webdriver.By;
let Key = webdriver.Key;
let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get("http://192.168.219.129:3000")
driver.findElement(By.css('a[href="/signin"]')).click();
driver.findElement(By.id('name')).sendKeys("imzack")
driver.findElement(By.id('pass')).sendKeys('123456')
driver.findElement(By.css('.span-primary')).click();
driver.findElement(By.css('.span-success')).click();

driver.findElement(By.css('.eicon-bold')).click();
driver.findElement(By.css('.CodeMirror-scroll')).click();
driver.actions().mouseMove(driver.findElement(By.css('.CodeMirror-scroll'))).sendKeys(Key.LEFT).perform();
driver.actions().mouseMove(driver.findElement(By.css('.CodeMirror-scroll'))).sendKeys(Key.LEFT).perform();
driver.actions().mouseMove(driver.findElement(By.css('.CodeMirror-scroll'))).sendKeys("helloworld").perform();

driver.findElement(By.css('.eicon-preview')).click();
driver.findElement(By.css('div.editor-preview.editor-preview-active > p > strong')).getTagName().then((tagName)=>{
    assert.deepEqual("strong",tagName)
})

driver.findElement(By.css('#content > div > div.header > ol > li:nth-child(1) > a')).getCssValue("color").then((color)=>{
    assert.deepEqual("rgba(128, 189, 1, 1)",color)
})