/**
 * shell : 
 * windows : find "::ffff:192.168.219.1" cheese.log /C
 * linux : awk '/::ffff:192.168.219.1/' cheese.log | wc -l
 * 
 */

const readline = require('readline');
const fs = require('fs');
var count = 0;
let rl =  readline.createInterface({
    input:fs.createReadStream('./cheese.log')
})

rl.on('line',function(line){
    if(line.indexOf('::ffff:192.168.219.1')>-1){
        count += 1;
    }
    // console.log(line,line.indexOf('::ffff:192.168.219.1'));
}).on('close',function(){
    console.log("count:",count)
})