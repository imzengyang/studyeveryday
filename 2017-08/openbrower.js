require("chromedriver");

var webdriver = require("selenium-webdriver")
const driver= new webdriver.Builder().forBrowser('chrome').build();
const By  = webdriver.By;
// function openbrower(url){
//     driver.get(url);
// }

// openbrower("http://www.baidu.com")
// openbrower("http://www.bing.com")

// let url = "http://www.baidu.com"

// if(url === "http://www.baidu.com"){
//     for(var i=0; i<100;i++){
//         openbrower(url);
//     }
    
// }else {
//     console.log("url error")
// }

driver.get("http://www.baidu.com")
//NO1
// driver.findElement({id:"kw"}).sendKeys("helloworld");
// driver.findElement(By.id("kw")).sendKeys("helloworld")

// driver.findElement(By.css('#kw')).sendKeys('helloworld');
// driver.findElement(By.name('wd')).sendKeys('hellowold')
// driver.findElement(By.className('s_ipt')).sendKeys('helloworld')

// driver.findElement(By.linkText("新闻")).click();
// driver.findElement(By.partialLinkText('新')).click();

driver.findElement(By.xpath('//*[@id="kw"]')).sendKeys("bing");
driver.findElement(By.xpath('//*[@id="kw"]')).submit();
driver.sleep(5000);
driver.findElement(By.css('div#\\1 > h3 > a')).click();
// driver.findElement(By.xpath('//*[@id="1"]/h3/a[1]')).click();