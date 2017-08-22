require("chromedriver");
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser("chrome").build();
let By = webdriver.By
driver.get("http://www.baidu.com");
driver.findElement(By.xpath('//*[@id="kw"]')).sendKeys('地图');//地图
driver.findElement(By.xpath('//*[@id="kw"]')).submit();
driver.sleep(5000);
driver.findElement(By.xpath('//*[@id="1"]/div[1]/div/div[2]/div[2]/div/div[1]/form/input[2]')).sendKeys('中国');
driver.findElement(By.xpath('//*[@id="1"]/div[1]/div/div[2]/div[2]/div/div[1]/form/input[2]')).submit();
driver.sleep(20000).then(() => {

    driver.getAllWindowHandles().then((handles) => {
        driver.switchTo().window(handles[parseInt(1)]);
        driver.findElement(By.xpath('//*[@id="sole-searchbox-content"]/input[@id="sole-input"]')).clear();
        driver.findElement(By.xpath('//*[@id="sole-searchbox-content"]/input[@id="sole-input"]')).sendKeys('上海地图');
        driver.findElement(By.id('search-button')).click();
    })
})

