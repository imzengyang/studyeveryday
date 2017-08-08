/**
 * JavaScript 流程结构控制语句
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
let isbool = true
if (isbool) {
    console.log("isbool true")
} else {
    console.log("isbool false ")
}

let a = "ss"
if (a == 1){
    console.log(" a value 1")
}else if( a == 2){
    console.log(" a value 2")
}else{
    console.log(" a vlaue num ")
}

for (let i = 0 ; i< 10 ; i++) {
    console.log("i==",i )
}

let i = 0;
do{
    console.log("while i",i);

    i++;
}while(i<10)

let today = "周"
switch (today) {
    case "周一":
        console.log("今天是周一")
        break;
    case "周一":
        console.log("今天是周一")
        break;
    case "周二":
        console.log("今天是周二")
        break;
    case "周三":
        console.log("今天是周三")
        break;
    case "周四":
        console.log("今天是周四")
        break;
    case "周五":
        console.log("今天是周五")
        break;
    case "周六":
        console.log("今天是周六")
        break;
    case "周日":
        console.log("今天是周日")
        break;
    default:
        console.log("日期输入有误")
        break;
}