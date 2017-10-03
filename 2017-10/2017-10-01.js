/**
 * 
 * JavaScript 添加和删除元素
 * 
 * 多维数组
 */
var arr = [0,1,2,3];

arr[4] = 4
console.log(arr);
arr[0] = -1;
console.log(arr);

// push
arr.push(10,12);
console.log(arr, arr.length);

// unshift
arr.unshift(0)
console.log(arr)

//pop
arr.pop();
console.log(arr);
//shift
arr.shift();
console.log(arr);

// splice
arr.splice(1,2)
console.log(arr);

// 二维数组

let aTemp= [];

aTemp[0] = [1,23,4,4,5,6,7,8,9]
aTemp[1] = [1,23,4,4,5,6,7,8,9]

console.log(aTemp)

aTemp.push([23,4,5,5])
console.log(aTemp);

for(let i = 0; i<aTemp.length; i++ ){
    for(let j =0; j<aTemp[i].length;j++){
        console.log(i,j,aTemp[i][j])
    }
}


// ...san

// 
let btemp = [[[1,2],[3,4]],[[11,2],[3,4]],[[1,2],[23,11]]]

for(let i = 0; i<btemp.length; i++ ){
    for(let j =0; j<btemp[i].length;j++){
        for (let k = 0; k< btemp[i][j].length;k++)
        console.log(i,j,k,btemp[i][j][k])
    }
}