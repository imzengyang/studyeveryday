/**
 * Javascript 闭包
 * 
 */

function init(){
    let name = "abc";
    function printName(){
        console.log(name)
    }
    printName();
}
init();

function mkFunc(){
    let name="xiaoming";
    let age = 30;
    function getUser(){
        let userinfo= {name: name, age: age}
        return userinfo;
    }
    return getUser()
}
let getuser =  mkFunc()
console.log(getuser)    //{ name: 'xiaoming', age: 30 }
























































