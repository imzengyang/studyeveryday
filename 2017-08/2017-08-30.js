/**
 * Javascript 数组
 * 
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

// 创建一个数组

const Fruits = ["apple", "Banana",]

// console.log(Fruits)
 //通过索引访问数组元素

// console.log(Fruits[0])


 //遍历一个数组

 for(let f of Fruits){
     console.log(f)
 }

 for(let index in Fruits){
     console.log(index)
 }

 Fruits.forEach(function(item,index,array){
     console.log(item,index)
 })


//  添加元素到数组的末尾

Fruits.push("Orange")
console.log(Fruits)


// 删除数组末尾的元素

let newfruit = Fruits.pop()
console.log("newfriut:",newfruit,Fruits)


// 删除数组最前面（头部）的元素

let headf= Fruits.shift();
console.log("heder",headf,Fruits)

//添加到数组的前面（头部）
Fruits.unshift("cucumber")
console.log("Fruits:",Fruits)

// 找到某个元素在数组中的索引

let index = Fruits.indexOf("Banana")
console.log("banana index",index)
// 通过索引删除某个元素

Fruits.splice(1,1)
console.log('Fruit',Fruits)


// 从一个索引位置删除多个元素
let arr = ["apple","banana","cucucmber","orange"]
arr.splice(1,2)
console.log("arr",arr)

// 复制一个数组

let a = arr.slice()
console.log("a",a)

// 连接一个数组

let b = a.concat(['b'])
console.log(b)