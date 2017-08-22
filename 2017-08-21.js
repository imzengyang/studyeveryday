/**
 * autoit 辅助自动化测试
 * 
 * 
 * download：https://www.autoitscript.com/site/autoit/downloads/
 * 
 * api：https://www.autoitscript.com/autoit3/docs/functions.htm
 */



require("chromedriver")
var webdriver  = require('selenium-webdriver')
var driver = new webdriver.Builder().forBrowser('chrome').build();
var By = webdriver.By;
const process = require('child_process')
const path = require('path')
let exepath = path.join(__dirname,'autoit','autoitdemo.exe')
driver.get('http://www.baidu.com');
driver.findElement(By.className('soutu-btn')).click();
driver.findElement(By.className('upload-pic')).click().then(function(){
    process.execFileSync(exepath)
});