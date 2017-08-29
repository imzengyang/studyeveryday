/**
 * selenium-webdriver 文件上传
 */

 require("chromedriver")
 var webdriver  = require('selenium-webdriver')
 var path = require('path')
 var driver = new webdriver.Builder().forBrowser('chrome').build();
 var By = webdriver.By;

 driver.get('http://www.baidu.com')
 driver.findElement(By.className('soutu-btn')).click();

let filepath = path.join(__dirname,'..','baidu.png')
console.log(filepath)
 driver.findElement(By.className('upload-pic')).sendKeys(filepath);
//  D:\tranning\03\baidu.png