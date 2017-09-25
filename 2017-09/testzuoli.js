require('chromedriver');
var assert = require('assert');
var webdriver = require('selenium-webdriver');
//var driver = new webdriver.Builder().forBrowser('chrome').build();
let chrome = require("selenium-webdriver/chrome");
var By = webdriver.By;
let path = require('path');
var user = Date.now();
const nodemailer = require('nodemailer');

function loadbeforeAndAfter() {
    before(async function () {
        driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build()
        return driver.executeScript(function () {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight
            }
        }).then(function (result) {
            driver.manage().window().setSize(result.width, result.height);
        });
    })
    //所有的it执行完成之后 关闭浏览器
    after(async function () {
        console.log('close');
        await driver.close();
    });
}
describe('注册和登录', async function () {
    this.timeout(60 * 1000);
    //加入headless 但是窗口没有最大化
    loadbeforeAndAfter();

    //执行每个it时进行截图放在指定的文件夹下
    afterEach(async function () {
        console.log('after each');
        var fs = require('fs');
        var time = Date.now();
        let imagpath = path.join(__dirname, '/images/');
        await driver.takeScreenshot().then(async function (image) {
            fs.writeFileSync(imagpath + time + '.png', image, 'base64')
        });
    });
    describe('注册', async function () {
        loadbeforeAndAfter();
        it('窗口最大化', async function () {
            console.log('最大化');
            await driver.get('http://localhost:3000');
            await driver.manage().window().maximize();
            await driver.sleep(1000);
        })
        it('导航到注册页面', async function () {
            await driver.findElement(By.css('body > div.navbar > div > div > ul > li:nth-child(5) > a')).click();
        });
        it('输入注册信息', async function () {
            await driver.findElement(By.id('loginname')).sendKeys(`${user}`);
            await driver.findElement(By.id('pass')).sendKeys('lzuo123456');
            await driver.findElement(By.id('re_pass')).sendKeys('lzuo123456');
            await driver.findElement(By.id('email')).sendKeys(`${user}@mailinator.com`);
            await driver.findElement(By.className('span-primary')).click();
        });
    });
    //连接mongodb 激活用户
    describe('激活用户', async function () {
        loadbeforeAndAfter();
        var MongoClient = require('mongodb').MongoClient;
        var assert = require('assert');
        const url = "mongodb://localhost:27017/node_club_dev";
        it('连接mongoDB', async function () {
        })
    })
})