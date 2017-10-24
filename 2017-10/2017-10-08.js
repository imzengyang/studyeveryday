/**
 * javascript 链表
 */

function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null
    }
    let head = null;
    let length = 0;
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
    this.insertAt = function (position, element) {
        if(position >=0 && position <=length){
            let current = head;
            let previous;
            let index = 0;
            let node = new Node(element)
            if(position == 0){
                head = node
                node.next = current
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current
                previous.next = node
            }

            length++;
            return true
        }else{
            return false;
        }
    }
    this.remove = function (element) {
        let index = this.indexOf(element)
        this.removeAt(index)
     }
    this.removeAt = function (position) {
        if(position > -1 && position <length){
            let current = head;
            let previous;
            let index = 0;
            if(position === 0){
                head = current.next
            }else{
                while(index++ < position){
                    
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            
            length --;
            return current.element;
        }else{
            return null;
        }
    }
    this.indexOf = function (element) { 
        let current = head;
        let index = 0;
        while(current){
            if(element === current.element){
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
    this.getHead = function (){
        return head
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

module.exports.LinkedList = LinkedList;

// let list = new LinkedList()
// console.log(list.size())
// list.append(10)
// console.log(list.size())
// list.append(5)
// list.append(4)
// list.print()

// list.removeAt(2)
// list.print()
// list.insertAt(0,1)
// list.print()
// list.insertAt(1,3)
// list.print()
// list.insertAt(4,3)
// list.print()
// console.log(list.indexOf(10))
// console.log(list.indexOf(111))
// list.remove(10);
// list.remove(3);
// list.print();