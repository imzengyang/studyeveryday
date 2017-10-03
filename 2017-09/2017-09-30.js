/**
 * 数组
 */

 //1. 为什么需要使用到数组
// var averangeTempJan = 20.1;
// var averangeTempFeb = 39;
// var averangeTempMar = 10.1;

// averangeTem[0] = 20.1
// averangeTem[1] = 39
// averangeTem[3] = 10.1

 //2. 创建和初始化数组
// let averangeTem = new Array(12);
// averangeTem[0] = 20.1
// averangeTem[1] = 39
// averangeTem[3] = 10.1
// // ....
// console.log(averangeTem)

let averangeTem = [10,21,12,13]
// console.log(averangeTem, averangeTem.length)

for (var index = 0; index < averangeTem.length; index++) {
    var element = averangeTem[index];
    // console.log(index, element)
}

 //3. 斐波那契数列  20

let fibinacci = [];
fibinacci[0] = 1;
fibinacci[1] = 2;

for(var i = 2; i< 20; i++){
    fibinacci[i] = fibinacci[i-1] + fibinacci[i - 2]
    console.log(i, fibinacci[i]);
}
