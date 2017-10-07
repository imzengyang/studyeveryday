/**
 * JavaScript  队列
 * TODO： 创建一个队列类
 * 
 * 
 */

function Queue() {
    let items = [];

    this.enqueue = function (element) {
        items.push(element);
    }

    this.dequeue = function () {
        return items.shift();
    }

    this.front = function () {
        return items[0]
    }

    this.size = function () {
        return items.length
    }

    this.isEmpty = function () {
        return items.length == 0
    }

    this.print = function () {
        console.log(items.toString())
    }
}

// let queue = new Queue();
// console.log(queue.isEmpty())
// queue.enqueue("jack")
// queue.enqueue("lisa")
// queue.enqueue('tom')
// queue.print()
// queue.dequeue()
// queue.dequeue()

// queue.print()


module.exports = Queue;


