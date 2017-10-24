/**
 * 
 * 解决散列冲突
 * 
 * 线性探查
 */

function HashTable() {
    let table = [];

    let keyValue = function(key,value){
        this.key = key;
        this.value = value;
    }


    this.put = function (key, value) {
        let postion = loseloseHashCode(key);
        console.log("key -- ", postion, key);
        if(table[postion] == undefined){
            table[postion] = new keyValue(key,value);

        }else{
            let index =postion;
            while (table[index] !== undefined){
                index++;
            }
            table[index] = new keyValue(key,value)
        }
        
    }
    this.remove = function (key) {
        let position = loseloseHashCode(key);

        if(table[position] !== undefined){
            if(table[position].key === key){
                table[position].value = undefined;
                return true;
            }else{
                let index = position;
                while(table[index] ===undefined || table[index].key !== key ){
                    index++
                }
                if(table[index].key === key){
                    table[index].value = undefined;
                    return true;
                }
            }
        }
        return false;
    }
    this.get = function (key) {
        let position = loseloseHashCode(key);

        if(table[position]!==undefined){
            
            if(table[position].key === key){
                return table[position].value;
            }else{
                let index = position;
                while(table[index] === undefined || table[index].key !== key){
                    index ++;
                }

                if(table[index].key === key){
                    return table[index].value;
                }

            }
        }
        return undefined;
    }

    let loseloseHashCode = function (key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash*33 + key.charCodeAt(key[i])
        }
        return hash % 1031;
    }

}

let table = new HashTable();

table.put('Jonathan', 'jonathan@email.com');
table.put('Jamie', 'jamie@email.com');
table.put('Sue', 'sue@email.com');
table.put('Mindy', 'mindy@email.com');

console.log(table.get("Jamie"))
console.log(table.get("Jonathan"))
table.remove("Jamie")

console.log(table.get("Jamie"))