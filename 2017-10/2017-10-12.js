

function DoublyLinkedList() {

    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }

    let length = 0;
    let head = null;
    let tail = null;

    this.append = function (element) {

        let node = new Node(element),
            current;
        if (head === null) {
            head = node
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    this.insert = function (position, element) {

        if (position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous = null;
            let index = 0;

            if (position == 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }

            } else if (position == length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                current.prev = node;

                previous.next = node;
                node.prev = previous;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    this.indexOf = function (element) {
        let current = head;
        let index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1
    }
    this.size = function () {
        return length;
    }

    this.toString = function () {
        let current = head;
        let string = "";
        while (current) {
            string += current.element + (current.next ? "," : "")
            current = current.next
        }
        return string;
    }
    this.print = function () {
        console.log(this.toString())
    }
}

let list = new DoublyLinkedList();

// list.append(1);
// list.print();

list.insert(0,5)
list.print()
list.insert(1,10)
list.print()
list.insert(1,6)
list.print()