/**
 * JavaScript 队列 
 * 优先队列
 * 
 * 优先级别 1 > 2 > 3
 */
function PriorityQueue() {
    let items = [];

    function PriorityElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        let priorityelement = new PriorityElement(element, priority);

        if (this.isEmpty()) {
            items.push(priorityelement)
        } else {
            let added = false;
            for (let i = 0; i < items.length; i++) {
                if (priorityelement.priority < items[i].priority) {
                    items.splice(i,0,priorityelement)
                    added = true;
                    break;
                }
            }
            if(!added){
                items.push(priorityelement)
            }
        }
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
        console.log(JSON.stringify(items))
    }
}

let queue = new PriorityQueue();

queue.enqueue("jack",10)
queue.enqueue("tom",5)
queue.enqueue("lisa",1)
queue.enqueue("lily",1)

queue.print()