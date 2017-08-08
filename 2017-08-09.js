/**
 * JavaScript 流程结构控制
 * if ..else ..
 * 
 * if .. else if .. else..
 * 
 * for ...
 * 
 * do .. while ..
 * 
 * switch .. case ...
 */

let isbool = true;

if (isbool) {
    console.log("isbool is true")
}else {
    console.log("isbool is false")
}

let a = 1;
if (a == 0){
    console.log("a value is 0")
}else if(a == 1) {
    console.log("a value is 1")
}else if(a == 2){
    console.log("a value is 2")
}else {
    console.log(" a value ?")
}

for(let i =0; i<10; i++){
    console.log(i)
}

let i = 0
do {
    console.log("i:",i);
    i ++;   // ==>  i=i+1
} while(i < 10)

let today = "周"

switch (today) {
    case "周一":
        console.log("今天是周一！")
        break;
    case "周二":
        console.log("今天是周二！")
        break;
    case "周三":
        console.log("今天是周三！")
        break;
    case "周四":
        console.log("今天是周四！")
        break;
    case "周五":
        console.log("今天是周五！")
        break;
    case "周六":
        console.log("今天是周六！")
        break;
    case "周日":
        console.log("今天是周日！")
        break;
    default:
        console.log("没有这个日期")
        break;
}