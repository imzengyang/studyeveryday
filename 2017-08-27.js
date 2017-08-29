require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
let fs = require('fs');
let By = webdriver.By;
let path = require('path');
driver.manage().window().maximize();
driver.get('http://192.168.219.129:3000/');
driver.sleep(2000);
driver.findElement(By.xpath('/html/body/div[1]/div/div/ul/li[6]/a')).click();//登录
driver.findElement(By.id('name')).sendKeys('imzack');
driver.findElement(By.id('pass')).sendKeys('123456')
driver.findElement(By.id('pass')).submit();
// driver.findElement(By.xpath('//[@id="signin_form"]/div[3]/input')).click();
driver.findElement(By.className('span-success')).click();//发布话题
driver.sleep(1000);
driver.findElement(By.id('tab-value')).click();
driver.findElement(By.xpath('//*[@id="tab-value"]/option[2]')).click();//选择板块
driver.findElement(By.id('title')).sendKeys('Mongodb修改数据库操作手册');//标题
// driver.sleep(2000);
// driver.findElement(By.className('editor_buttons')).click();
// driver.findElement(By.id('topic_tags')).sendKeys('Mongodb');



driver.actions().mouseMove(driver.findElement(By.css('div.CodeMirror-scroll'))).click().perform();   // 鼠标移动到文章内容这个地方 click 获取焦点
driver.actions().mouseMove(driver.findElement(By.css('div.CodeMirror-scroll'))).sendKeys("hellowoerod").perform()   // 鼠标移动到这个文章内容处输入文字。
