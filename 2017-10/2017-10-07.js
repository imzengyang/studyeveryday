/**
 * JavaScript 队列 循环队列
 * 
 * 
 */

 let Queue = require("./2017-10-05")
function hotPotato(Namelist,num){
    let queue= new Queue();

    for(let i=0; i<Namelist.length; i++){
        queue.enqueue(Namelist[i]);
    }

    while(queue.size() > 1){
        let eliminated = '';
        for(let i=0; i<num;i++){
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(eliminated+"退出游戏")
    }

    return queue.dequeue()

}

let names = ["xiaoming","jack","ben","tom","lisa"]
let winner = hotPotato(names,7)
console.log(winner+"胜出")
