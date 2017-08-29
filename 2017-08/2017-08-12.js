/**
 * 回顾本周所讲内容，基础内容与selenium-webdriver 结合使用
 * 
 */
require('chromedriver');

const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder().forBrowser('chrome').build();

// driver.get('http://www.baidu.com');
// driver.findElement({id:'kw'}).sendKeys("test01");

// driver.get('http://www.baidu.com');
// driver.findElement({id:'kw'}).sendKeys("test02");

// driver.get('http://www.baidu.com');
// driver.findElement({id:'kw'}).sendKeys("test02");

let array = ["test01","test02","test03",4]
console.log(array.length)

for (var i = 0; i < array.length; i++) {
    driver.get('http://www.baidu.com');
    driver.findElement({id:'kw'}).sendKeys(array[i]);
}