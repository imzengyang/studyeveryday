
require('chromedriver');
var webdriver=require('selenium-webdriver');
var By=webdriver.By;
var driver=new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/');
driver.findElement(By.css('#kw')).sendKeys('百度地图');
driver.findElement(By.id('su')).click();
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="1"]/div[1]/div/div[2]/div[2]/div/div[1]/form/a')).click();
driver.sleep(3000);
driver.getAllWindowHandles().then(function(allwindows){   
    console.log(allwindows.length)
    driver.switchTo().window(allwindows[1]).then(function(){ 
        driver.findElement(By.id('sole-input')).clear();
        driver.findElement(By.id('sole-input')).sendKeys('御桥')
        driver.findElement(By.id('search-button')).click();
        // driver.findElement(By.xpath('//*[@id="card-1"]/div/ul/li[1]')).click()
        driver.sleep(3000)
        driver.findElement(By.css('ul.poilist > li > div.cf > div.ml_30.mr_10 > div.row > span ')).getText().then(function(text){
            console.log('Text is', text)
        })
    })
})