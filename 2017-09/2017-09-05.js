/**
 * JavaScript 回调 callback
 */

// setTimeout(function() {
//     console.log("abc")
// }, 2000);

// setInterval(function(){
//     console.log("123")
// },1000)

function f1(callback){
    setTimeout(function() {
        console.log("模拟一个数据执行需要耗费2秒的动作")
        callback()
    }, 2000);
}

function f2(){
    console.log("这是另一动作")
}

f1(f2)

