// JavaScript 循环链表的实现

function CircleLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }

    let head;
    let length = 0;

    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element);
            let previous = null;
            let current = head;
            let index = 0;
            if (position === 0) {
                if (!head) {
                    head = node;
                    node.next = head;
                } else {
                    node.next = head
                    while (current.next !== head) {
                        current = current.next;
                    }
                    head = node;
                    current.next = head;
                }
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.next = current;
            }
            length++;
            return true;

        } else {
            return false;
        }

    }

    this.size = function () {
        return length;
    }

    this.toString = function () {
        let current = head;
        let string = current.element;
        while (current.next !== head) {
            
            current = current.next
            string += ","+ current.element
        }
        return string;
    }
    this.print = function () {
        console.log(this.toString())
    }


}


let list = new CircleLinkedList();
list.insert(0,1);
list.print();