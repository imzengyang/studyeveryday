/**
 *  Node.js -- module fs 简介  filesystem
 *  selenium-webdriver 截屏操作
 * 
 * fs  https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
 * 
 */



const fs = require('fs')

// fs.writeFileSync('01.txt','hello world')
require ('chromedriver');
var webdriver = require("selenium-webdriver")
var By = webdriver.By;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get("http://www.baidu.com");
driver.takeScreenshot().then(function(imagedata){
    // fs.writeFileSync('02.txt',imagedata)
    fs.writeFileSync('baidu.png',imagedata,'base64')
})
let gengduo = driver.findElement(By.name('tj_briicon'))
driver.actions().mouseMove(gengduo).perform(); // 鼠标移动到更多产品上
driver.takeScreenshot().then(function(imagedata){
    // fs.writeFileSync('02.txt',imagedata)
    fs.writeFileSync('mp3.png',imagedata,'base64')
})
driver.findElement((By.name('tj_mp3'))).click();