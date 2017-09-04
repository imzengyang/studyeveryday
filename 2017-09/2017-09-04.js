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
    let user="xiaoming";
    function getUser(){
        return user;
    }
    return getUser()
}
let getuser =  mkFunc()
console.log(getuser)
























































