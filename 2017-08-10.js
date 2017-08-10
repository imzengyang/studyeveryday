/**
 * 
 * selenium-webdriver 定位元素方法
 * id：
 * css：
 * className
 * tagName
 * 
 */

require('chromedriver');
var webdriver = require('selenium-webdriver')
let drvier = new webdriver.Builder().forBrowser('chrome').build();
let By = webdriver.By;

drvier.get("http://www.baidu.com")

// drvier.findElement({id: "kw"}).sendKeys("test");
// drvier.findElement(By.id('kw')).sendKeys("test")


// drvier.findElement(By.className('s_ipt')).sendKeys("test02")

// drvier.findElement(By.css('#kw')).sendKeys("css ")
drvier.findElement(By.css("a")).click()