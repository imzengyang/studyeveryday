/**
 * 散列函数
 */
function HashTable(){
    let table = [];

    this.put = function(key,value){
        let postion = loseloseHashCode(key);
        console.log(postion + "-" +key);
        table[postion] = value;
    }
    this.remove = function(key){
        table[loseloseHashCode(key)] = undefined; 
    }
    this.get = function(key){   
         return table[loseloseHashCode(key)];
    }

    let loseloseHashCode = function(key){
        let hash = 0;
        for (let i =0; i<key.length; i++){
            hash+=key.charCodeAt(i);

        }
        return hash % 37;
    }

}
let table = new HashTable();
table.put("name","xiaoming");
table.put("password","123456");