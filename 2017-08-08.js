 'use strict' 
/**
 *  2017-08-08
 *  多行注释，单行注释
 *  console.log()
 *  声明一个变量 var let const
 *  函数 function 
 */

 // 单行注释

 
console.log("hello world")
console.log('hello world')
console.log(1)
console.log(1+1)
console.log("hello " + 3)

// // // 1. var
var a = "hello"
a = "good"
console.log(a + "world")
console.log(a,"xiaoming")

// // // 2 let
let b = 1
b = 3
console.log(b)
console.log( b + 1)

// // 3. const  常量  值不能再改变

const c = "good"
// c = "beteer"
console.log(c)

var a = "a"
{   
    var a = "abc"  
}
console.log(a)

let b ="b"
{
    let b ="abc"
    console.log("{}",b)
}
console.log(b)


// function
// 1 基本方法
function sayhello(){
    console.log("hello world");
}

sayhello();

// 函数返回值
function getName(){
    return "xiaoming"
}

let person = getName()
console.log(person)

// // 带参数的函数

function welcome(name){
    console.log("welcome",name);
}
welcome("xiaohong")
welcome("xiaoming")
