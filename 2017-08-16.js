/**
 * Ui Actions 介绍
 * https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/actions_exports_ActionSequence.html
 */

 require ('chromedriver');
 var webdriver = require("selenium-webdriver")
 var By = webdriver.By;

 var driver = new webdriver.Builder().forBrowser('chrome').build();
 
 driver.get("http://www.baidu.com");

 let gengduo = driver.findElement(By.name('tj_briicon'))
 driver.actions().mouseMove(gengduo).perform(); // 鼠标移动到更多产品上

 driver.findElement((By.name('tj_mp3'))).click();
