/**
 * 散列表
 */
function HashTable() {
    let table = [];

    this.put = function (key, value) {
        let postion =  loseloseHashCode(key);
        console.log("key -- ", postion, key);
        table[postion] = value;
    }
    this.remove = function (key) {
        let position = loseloseHashCode(key);
        table[position] = undefined; 
    }
    this.get = function (key) {
        let position = loseloseHashCode(key);
        return table[position];
    }
    
    let loseloseHashCode = function (key) {
        let hash = 0;
        for(let i=0;i<key.length; i++){
            hash += key.charCodeAt(key[i])
        }
        return hash % 37;
    }

}
let table = new HashTable();
table.put("name", "xiaoming");
table.put("password", "123456");

console.log(table.get("name"))

