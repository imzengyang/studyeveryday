/** 根据css 的attribute 来定位元素 */

require ('chromedriver');
var webdriver = require("selenium-webdriver")
var By = webdriver.By;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://map.baidu.com/')
driver.findElement(By.css('div[map-on-click=traffic]')).click();