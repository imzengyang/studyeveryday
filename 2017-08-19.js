/**
 * 读取json 文件
 * 
 */

require("chromedriver")
var webdriver  = require('selenium-webdriver')
var driver = new webdriver.Builder().forBrowser('chrome').build();
var By = webdriver.By;

driver.get('http://www.baidu.com');


//read json
var data = require('./data.json')
console.log(data.baidusearch)
let info = data.baidusearch;
for(var searchval of info){
    console.log(searchval.key)
    driver.findElement(By.id('kw')).clear()
    driver.findElement(By.id('kw')).sendKeys(searchval.key)
    driver.findElement(By.id('kw')).submit();
}

