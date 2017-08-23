/**
 * baidu map webelement inspect
 * 
 * http://www.w3school.com.cn/cssref/css_selectors.asp
 */

require ('chromedriver');
var webdriver = require("selenium-webdriver")
var By = webdriver.By;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://map.baidu.com/')
driver.findElement(By.id('sole-input')).sendKeys("zhongguo");
driver.sleep(2000)
driver.findElement(By.css('#ui3-suggest-scroll > ul > li:nth-child(1)')).click();
driver.findElement(By.id('search-button')).click();
driver.sleep(5000)
driver.findElement(By.css('ul.poilist > li:nth-child(1) > div.cf > div.col-r >div.mt_5.h_20 > a')).click();
