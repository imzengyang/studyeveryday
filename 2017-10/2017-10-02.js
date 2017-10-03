/**
 * javascript 数组方法
 * 
 */
 let arrA = [1,2,3,4,1]
 let arrB = [51,52,53,54]
 let arr;
 let isbool;

// // //concat 连接2个或更多数组，并返回结果
arr = arrA.concat(arrB)
// console.log(arr)

let isEven = function(x){ 
    return (x % 2 == 0) ? true : false;
}
// // every 对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// console.log(isbool)
// console.log(arrA.every(isEven))

// // some 对数组中的每一项运行给定函数，如果任一项返回true，则返回true
// console.log(arrA.some(isEven))


// filter 对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组
arr = arrA.filter(isEven)
// console.log(arr);

// // forEach 对数组中的每一项运行给定函数。这个方法没有返回值
arrA.forEach((x)=>{
    console.log(x, (x % 2 == 0))
})
// // //join 将所有的数组元素连接成一个字符串
// console.log (arrA.join("-"))
// // // indexOf 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1
// console.log(arrA.indexOf(9))
// // // // lastIndexOf 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值
// console.log(arrA.lastIndexOf(1))
// // // // map 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
console.log(arrA.map(isEven))

// // // // slice 传入索引值，将数组里对应索引范围内的元素作为新数组返回
console.log(arrA.slice(1,3))

// // // // sort 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数
// // console.log(arrA.sort())
let a = [1,4,30,5,2]
// // // //todo排序
console.log(a.sort())
//自定义排序
let compare  =  function (x ,y ){
    if (x > y ) return 1;
    if (x < y ) return -1;
    return 0;
}
console.log(a.sort(compare))

// // // // reverse 颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在的第一个
// // console.log(arrA.reverse())
console.log(a.reverse())

// // // // toString 将数组作为字符串返回
console.log(arrA.toString())

// // // // valueOf 和toString类似，将数组作为字符串返回
console.log(a.valueOf())