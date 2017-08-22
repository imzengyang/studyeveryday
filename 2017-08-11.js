/**
 * selenium-webdriver 元素定位 xpath linkText partialLinkText name
 */

require('chromedriver');
var webdriver = require('selenium-webdriver')
const drvier = new webdriver.Builder().forBrowser('chrome').build();
let By = webdriver.By;

drvier.get("http://www.baidu.com");
// drvier.findElement(By.xpath('//*[@id="u1"]/a[5]')).click();


// drvier.findElement(By.linkText("新闻")).click();

// drvier.findElement(By.partialLinkText('新闻')).click();

drvier.findElement(By.name('wd')).sendKeys('1234')

