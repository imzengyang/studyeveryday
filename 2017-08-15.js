/**
 * selenium-webdriver 浏览器器多窗口切换
 * 使用getAllWindowHandles() 方法
 * 
 *
 */


require('chromedriver')

var webdriver =  require('selenium-webdriver')
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get("https://www.baidu.com/");

driver.findElement(By.id('kw')).sendKeys('音乐')
driver.findElement(By.id('kw')).submit();
driver.sleep(3000)
driver.findElement(By.xpath('//*[@id="1"]/h3/a')).click();  //第一个搜索结果 打开新的窗口

driver.getAllWindowHandles().then(function(handles){
    console.log(handles.length)
    driver.switchTo().window(handles[1]).then(function(){
        driver.sleep(5000)
        driver.findElement(By.id('ww')).clear()
        driver.findElement(By.id('ww')).sendKeys("刘德华")
    })
})


