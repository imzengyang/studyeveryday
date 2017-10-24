/**
 * 处理 散列 冲突
 * 
 * 分离链接
 * 
 */

let {LinkedList} = require('./2017-10-08')

function HashTable() {
    let table = [];

    let keyValue = function(key,value){
        this.key = key;
        this.value = value;

        this.toString = function(){
            return "["+this.key+":"+this.value+"]"
        }
    }

    this.put = function (key, value) {
        let postion = loseloseHashCode(key);
        console.log("key -- ", postion, key);

        if(table[postion] === undefined){
            table[postion] = new LinkedList();
        }

        table[postion].append(new keyValue(key,value));
    }
    this.remove = function (key) {
        let position = loseloseHashCode(key);
        if(table[position] !== undefined){
            let current = table[position].getHead();
            while(current){
                if(current.element.key == key){
                    table[position].remove(current.element);
                    if(table[position].length == 0){
                        table[position] = undefined;
                    }
                }
                current = current.next;
            }
            return true;
        }
        return false;
    }
    this.get = function (key) {
        let position = loseloseHashCode(key);
        if(table[position] !== undefined){
            let current = table[position].getHead();
            while(current){
                if(current.element.key === key){
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    let loseloseHashCode = function (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(key[i])
        }
        return hash % 37;
    }

}

let table = new HashTable();
table.put("name", "xiaoming");
table.put("password", "123456");

table.put('Jonathan', 'jonathan@email.com');
table.put('Jamie', 'jamie@email.com');
table.put('Sue', 'sue@email.com');
table.put('Mindy', 'mindy@email.com');

console.log(table.get("Jamie"))
console.log(table.get("Jonathan"))
table.remove("Jamie")

console.log(table.get("Jamie"))

