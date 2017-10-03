/**
 * JavaScript 控制结构
 * 
 * 
 */

// console.log("packt" == true);

// console.log(Number("packt"), Number(true))

// console.log('packt' == false);

// console.log(Number("packt"), Number(false))

// console.log("0" == false)

// console.log(Number("10"), Number(false))


// if else   if else if else 

let a = 1
if ( a == 1){
    console.log(1)
} else if( a == 2 ) {
    console.log(2)
} else {
    console.log("!=1 !=2")
}

a == 0 ? console.log(1) : console.log("!=1")  // 三目运算

let  b = 3

switch (b) {
    case 1:
        console.log("1")
        break;
    case 2:
        console.log('2')
        break;
    default:
        console.log("no")
        break;
}

// for  

for (var i = 0; i < 9; i++) {
    console.log(i);
}

// do while

let j = 0;
do {
    console.log("do while....",j);
    j++;
} while (j < 9);


// while
let k = 0
while (k < 10) {
    console.log("while", k);
    k++;
}
